import React from "react";

import Navbar from "../components/container/navbar";

import Img1 from "../assets/img/imgHome1.png"
import Img2 from "../assets/img/imgHome2.png"
import Computador from '../assets/img/computador.png'

import Footer from "../components/container/footer";
import {Link} from "react-router-dom";
const Home = () => {
    
    return (
        <div className="App" >
            <Navbar /> 
            <article className="article-1">
                <section className="text-area">
                    <div>
                        <h1 className="item_black">O novo jeito de aprender a <span className="item_red">cozinhar !</span></h1>
                        <span className="sub-title">Aprende com o <span className="item_red">Kitchen Road</span> é divertido! Com diversas receitas e um comunidade ativa, aqui é o melhor  para evoluir na culinária</span>
                    </div>
                    <Link to="/SignUP"><button className="btn-orange">Começe Agora</button></Link>
                </section>
                <section className="grid-home">
                    <img className="img2" src= {Img2}/>
                    <img className="img1" src= {Img1}/>
                </section>
            </article>
            
            <div className="title-home">
                <h2 className="title-2-dark" >Aumente seu repertório de receitas conhecidas da melhor forma possível</h2>
                <img className = "computador" src ={Computador}/>
            </div>
            <article className="grid-home">
                <section className="secao-home left-section">
                    <h3 className="title-2-red">Progresso rápido</h3>
                    <span className="sub-title">Sem gastar tempo para pesquisar por receitas, a plataforma exibirá inúmeras recomendações de pratos de acordo com seu nível de técnica culinária.</span>
                </section>
                <section className="secao-home">
                    <h3 className="title-2-red">Motivação constante</h3>
                    <span className="sub-title">É bem mais fácil se manter motivado no processo de aprendizagem com uma comunidade ativa, onde você interagir e tirar dúvidas!</span>
                </section>
                <section className="secao-home left-section">
                    <h3 className="title-2-red">Experiência livre de anúncios</h3>
                    <span className="sub-title">Fique tranquilo, não acontecerá de você perder o time na cozinha por conta de um anúncio. Não aqui!</span>
                </section>
                <section className="secao-home">
                    <h3 className="title-2-red">Gamificação</h3>
                    <span className="sub-title">Desenvolva suas habilidades desbloqueando conquistas e troféus.</span>
                </section>
                
            </article>
            <Footer/>
        </div>
    )
}

export default Home;