import {
      applyMiddleware,
      combineReducers,
      compose,
      legacy_createStore,
  } from "redux";
  import thunkMiddleware from "redux-thunk";
  import reducer from "./reducer";
  
  const redusers = combineReducers({
      dataPage: reducer,
  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = legacy_createStore(
      redusers,
      composeEnhancers(applyMiddleware(thunkMiddleware))
  );
  
  window.store = store;
  
  export default store;