import './App.css';
import Register from './components/Form/Register/Register.js';
import Login from './components/Form/Login/Login.js';
import Navbar from './components/Form/Navbar/Navbar';
import Footer from './components/Footer/Footer'

function App() {
  return (

    <div className="App">
      <Navbar />
      <br/>

      <Register />
      <br/>

      <Footer />      
      <br/>


    </div>
  );
}

export default App;
