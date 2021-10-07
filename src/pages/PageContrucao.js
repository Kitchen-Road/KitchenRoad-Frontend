import React from "react";
import Footer from "../components/container/footer";
import Navbar from "../components/container/navbar";
import Construcao from '../assets/img/construcao.png'

function PageConstrucao(){
    return <div className="App">
        <Navbar/>
        <img className="img-construcao" src={Construcao} alt="Imagem dizendo q a tela está em construção."/>
        <Footer/>
        </div>
}

export default PageConstrucao