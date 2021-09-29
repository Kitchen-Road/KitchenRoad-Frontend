import Register from '../components/container/register.js'
import Navbar from '../components/container/navbar.js';
import Footer from '../components/container/footer.js'

function Home() {
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

export default Home;
