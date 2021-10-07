import Login from '../components/container/Login.js'
import Navbar from '../components/container/navbar.js';
import Footer from '../components/container/footer.js';

function PageLogin() {
  return (
    <>
    <div className="App">
        <Navbar /> 
        <br/>

        <Login />
        <br/>   
        <br/>
      
    </div>
    <Footer />
    </>   
  );
}

export default PageLogin;
