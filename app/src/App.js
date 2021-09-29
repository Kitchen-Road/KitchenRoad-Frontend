import './assets/css/global.scss';

import Register from './components/container/register.js'
import Navbar from './components/container/navbar.js';
import Footer from './components/container/footer.js'

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
