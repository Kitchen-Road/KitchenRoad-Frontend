import NavbarLogado from "../components/container/NavbarLogado.js";
import Video from "../components/utils/Video.js";
import ListaModoPreparo from "../components/utils/ListaModoPreparo.js";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getModoDePreparo from "../api/modoPreparoAPI.js";
import panelaReceita from '../assets/img/modoPreparo/panela-receita.png'
import panelaModoPreparo from '../assets/img/modoPreparo/panela-modo-preparo.png'
import conchaIngredientes from '../assets/img/modoPreparo/concha-ingredientes.png'
import Conquista from "../components/utils/Conquista.js";
import PrimeiraReceita from '../assets/img/conquista/primeira-receita.png'

import useSound from 'use-sound';
import trompete from '../assets/music/trompete.mp3'

function formatExperienciaReceita(dificuldade) {
  var xp;
  switch (dificuldade) {
    case "I":
      xp = "Iniciante";
      break;
    case "T":
      xp = "Intermediária";
      break;
    case "A":
      xp = "Avançada";
      break;
  }
  return xp;
}

function getNome(id){
  return id === '1' ? 'Primeira de muitas' :
         id === '5' ? 'Quase profissional':
         id === '10' ? 'Masterchef':
         id === '15' ? 'Melhor que o Jacquin Barriga':
         ''
}

function getImg(id){
  return id === '1' ? PrimeiraReceita:
         id === '5' ? 'Quase profissional':
         id === '10' ? 'https://www.puccicozinhas.com.br/wp-content/uploads/2017/05/Cozinha_Pucci_Slide_Cozinheira_Profissional.png':
         id === '15' ? 'https://play-lh.googleusercontent.com/zICISZPXRhNwnGcIVscVoB9eVlLH8KWdki7rTCSMesg3dDOG3zf_66_oWKhKPHfnN5Q4':
         ''
}
function getConquistaPorQuantidade(qnt){
  let nome = getNome(qnt)
  let img = getImg(qnt)
  const resultado = {
    nome_conquista: nome,
    imagem: img,
    descrição_conquista: 'Está conquista é adquirida ao completar ' + qnt + ' receitas',   
  }
  return resultado
}

function PageModoPreparo() {
  const { id } = useParams();
  const [play] = useSound(
    trompete,
    { volume: 0.5 }
  );
  const [conquistaAdquirida, setConquistaAdquirida] = useState({
    nome_conquista: '-------',
    imagem: 'https://cdn.discordapp.com/attachments/869650300913479715/902398054852874290/rei-do-alho-logo-5ED449F072-seeklogo.png',
    descrição_conquista: "------------------",
    
  })
  const [receita, setReceita] = useState({
    nome_receita: "-----",
    categoria: "-----",
    link_video_receita: "https://www.youtube.com/embed/j5a0jTc9S10",
    ingredientes: "----\r\n3 ----\r\n----\r\n -----.",
    modo_preparo: "------\n-----.\n -------.\n-------.\n-------",
    dificuldade: "--------",
  });
  const [buttonConquista, setButtonConquista] = useState(false);

  useEffect(() => {
    const loadModoPreparo = async () => {
      let preparo;
      preparo = await getModoDePreparo.getModoDePreparo(id);
      setReceita(preparo);
    };
    loadModoPreparo();
  }, []);

  const handleClick = () => {
    if(localStorage.getItem('receitas_concluidas') === null || localStorage.getItem('receitas_concluidas') === '' || localStorage.getItem('receitas_concluidas') === 'NaN')
      localStorage.setItem('receitas_concluidas', 0)
    localStorage.setItem('receitas_concluidas', parseInt(localStorage.getItem('receitas_concluidas'))+1)
    let receitas_concluidas = localStorage.getItem('receitas_concluidas')
    if( receitas_concluidas  === '1' ||
        receitas_concluidas  === '5' ||
        receitas_concluidas  === '10' ||
        receitas_concluidas  === '15'
      ){
      const resultado = getConquistaPorQuantidade(receitas_concluidas)
      setConquistaAdquirida(resultado)
      play()
      return true
    }
    return false
      
  };

  return (
    <div className="App">
      <NavbarLogado />
      <main>
        <Link to="/Receitas">
          <button className="btn-black">voltar</button>
        </Link>
        <div className="topic">
          <div className="title-modo">
            <img class="img-label" src={panelaReceita}/>
            <h2 className="title-1-red">{receita.nome_receita}</h2>
          </div>
          <h3 className="title-2">{receita.categoria}</h3>
          <Video link={receita.link_video_receita} />
          <p>{formatExperienciaReceita(receita.dificuldade)}</p>
        </div>
        <ListaModoPreparo 
        title="Ingredientes" 
        value={receita.ingredientes} 
        img={conchaIngredientes}
        />
        <ListaModoPreparo
          title="Modo de preparo"
          value={receita.modo_preparo}
          img={panelaModoPreparo}
        />
      </main>
      
          <button className="btn-black" 
            onClick={() => setButtonConquista(handleClick())}>
            Marcar como concluída
          </button>
      {/* <Link to="/Receitas"> */}
        <Conquista trigger={buttonConquista} setTrigger={setButtonConquista}>
          <h2 className="title-1">{conquistaAdquirida.nome_conquista}</h2>
          <img src={conquistaAdquirida.imagem} alt="Erro para carregar a imagem "/>
          <p>{conquistaAdquirida.descrição_conquista}</p>
        </Conquista>
      {/* </Link> */}
    </div>
  );
}

export default PageModoPreparo;
