import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
} from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}

const redusers = combineReducers({
    dataPage: reducer,
});
const persistedReducer = persistReducer(persistConfig, redusers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export const persistor = persistStore(store);

window.store = store;

export default store;