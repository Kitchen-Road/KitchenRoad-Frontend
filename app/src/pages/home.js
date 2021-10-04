import React from "react";

import Navbar from "../components/container/navbar";

import Img1 from "../assets/img/imgHome1.png"
import Img2 from "../assets/img/imgHome2.png"

import Button from "../components/utils/button";

const Home = () => {
    return (
        <>
        <Navbar /> 
        <div className="header_home">
            <div className="text_area">
                <h1 className="item_black">O novo jeito de aprender a <span className="item_red">cozinhar !</span></h1>
                <span className="sub_title item_black">Aprende com o <span className="item_red">Kitchen Road</span> é divertido! Com diversas receitas e um comunidade ativa, aqui é o melhor  para evoluir na culinária</span>
            </div>
            <Button style="btn_header" text="Começar Agora" />
        </div>
        <div className="second_area">
            <h1 className="item_black second_area_text" >Aumente seu repertório de receitas conhecidas da melhor forma possível</h1>
        </div>
        </>
    )

}

export default Home;