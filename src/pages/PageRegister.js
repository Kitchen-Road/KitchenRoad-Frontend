import Register from '../components/container/Register.js'
import Navbar from '../components/container/navbar.js';
import Footer from '../components/container/footer.js'

function PageRegister() {
  return (
    <>
    <div className="App">
        <Navbar /> 
        <br/>

        <Register />
        <br/>   
        <br/>
      
    </div>
    <Footer />
    </>   
  );
}

export default PageRegister;
