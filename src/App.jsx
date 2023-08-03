import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='contentApp'>
        <Catalog/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
