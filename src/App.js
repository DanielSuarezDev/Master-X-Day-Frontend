import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/global.scss'
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/Main'
import Interface from './components/interface'



function App() {
 

  return (
    <div className="App">
      <Header/>
      <Main />
      <Footer />

      <Interface />

    </div>

  

  );
}

export default App;
