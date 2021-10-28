import NavbarLogado from "../components/container/NavbarLogado.js";
import Video from "../components/utils/Video.js";
import ListaModoPreparo from "../components/utils/ListaModoPreparo.js";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getModoDePreparo from "../api/modoPreparoAPI.js";
import concluirPOST from "../api/concluirReceita.js";
import panelaReceita from "../assets/img/modoPreparo/panela-receita.png";
import panelaModoPreparo from "../assets/img/modoPreparo/panela-modo-preparo.png";
import conchaIngredientes from "../assets/img/modoPreparo/concha-ingredientes.png";
import Conquista from "../components/utils/Conquista.js";
import useSound from 'use-sound';

import trompete from '../assets/music/trompete.mp3'
import demon from '../assets/music/demon.mp3'
import churras_musica from '../assets/music/churras_musica.mp3'
import musica_casamento from '../assets/music/casamento.mp3'
import musica_epoca from '../assets/music/grande-familia.mp3'
import musica_natal from '../assets/music/musica_natal.mp3'
import musica_rei_alho from '../assets/music/rei_alho.mp3'
import musica_halloween from '../assets/music/halloween.mp3'

import PrimeiraReceita from '../assets/img/conquista/primeira-receita.png'
import HellsKitchen from "../assets/img/conquista/HellsKitchen.png"
import pengu from "../assets/img/conquista/pingu.png"
import velho from "../assets/img/conquista/velhoputo.png"
import jackin from "../assets/img/conquista/jackin.png"
import Anel from "../assets/img/conquista/anel.png"
import Carne from "../assets/img/conquista/carne.png"
import EpocaImg from "../assets/img/conquista/beicola.png"
import rei_alho from "../assets/img/conquista/rei_alho.png"
import PaveImg from "../assets/img/conquista/pave.png"
import HalloweenImg from '../assets/img/conquista/halloween.png'

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
// Verifca mascara

function startLocalStorage(str){
  if(localStorage.getItem(str) === null || 
     localStorage.getItem(str) === '' || 
     localStorage.getItem(str) === 'NaN')
     localStorage.setItem(str, 0)
}

function verificaExist(){
  //receitas_concluidas
  startLocalStorage('receitas_concluidas')
  // epoca_ano
  startLocalStorage('epoca_ano')
  //churrasco
  startLocalStorage('churrasco')
  // alho
  startLocalStorage('alho')
  // casamento
  startLocalStorage('casamento')
  //natal
  startLocalStorage('natal')
  //halloween
  startLocalStorage('halloween')  
}

function ehConquistaQNT(){
  localStorage.setItem('receitas_concluidas', parseInt(localStorage.getItem('receitas_concluidas'))+1)
  let receitas_concluidas = localStorage.getItem('receitas_concluidas')  
  if( receitas_concluidas  === '1' ||
      receitas_concluidas  === '5' ||
      receitas_concluidas  === '10' ||
      receitas_concluidas  === '15' ||
      receitas_concluidas === '20'
       
    ){
    return true
  }
  return false
}

function ehCasamento(id){
  let casamento = localStorage.getItem('casamento')
  if( id === '21'  && casamento !== '1'){
    localStorage.setItem('casamento', 1)
    return true
  }
  return false
}

function ehChurrasco(id){
  if(id === '12' ||
     id === '13' ||
     id === '14' )
    localStorage.setItem('churrasco' , parseInt(localStorage.getItem('churrasco'))+1 )
  let churrasco = localStorage.getItem('churrasco')
  if(churrasco === '3'){
    return true
  }
    
  return false
}

function ehEpocaAno(id){
  if(id === '3' ||
     id === '7' ||
     id === '6' ||
     id === '8' ||
     id === '11' ||
     id === '10' )
    localStorage.setItem('epoca_ano' , parseInt(localStorage.getItem('epoca_ano'))+1 )
  let epoca_ano = localStorage.getItem('epoca_ano')
  if(epoca_ano === '6'){
    return true
  }
    
  return false
}
function ehReiDoAlho(id){
  if(id === '9' ||
     id === '12' ||
     id === '18' )
    localStorage.setItem('alho' , parseInt(localStorage.getItem('alho'))+1 )
  let epoca_ano = localStorage.getItem('alho')
  if(epoca_ano === '3'){
    return true
  }
    
  return false
}

function ehNatal(id){
  if(id === '3' ||
     id === '7' )
    localStorage.setItem('natal' , parseInt(localStorage.getItem('natal'))+1 )
  let natal = localStorage.getItem('natal')
  if(natal === '2'){
    return true
  }
    
  return false
}

function ehHalloween(id){
  if(id === '10' ||
     id === '11' )
    localStorage.setItem('halloween' , parseInt(localStorage.getItem('halloween'))+1 )
  let halloween = localStorage.getItem('halloween')
  if(halloween === '2'){
    return true
  }
    
  return false
}
// Conquista QNT
function getNome(id){
  return id === '1' ? 'Primeira de muitas' :
         id === '5' ? 'Quase profissional':
         id === '10' ? 'Masterchef':
         id === '15' ? 'Melhor que o Jacquin Barriga':
         id === '20' ? 'Cozinheiro do Inferno': 
         ''
}

function getImg(id) {
  return id === "1"
    ? PrimeiraReceita
    : id === "5"
    ? pengu
    : id === "10"
    ? velho
    : id === "15"
    ? jackin
    : id === "20"
    ? HellsKitchen
    : "";
}

function getConquistaPorQuantidade(){
  let qnt = localStorage.getItem('receitas_concluidas')
  let nome = getNome(qnt)
  let img = getImg(qnt)

  const resultado = {
    nome_conquista: nome,
    imagem: img,
    descrição_conquista:
      "Está conquista é adquirida ao completar " + qnt + " receitas",
  };
  return resultado;
}

// Conquista Categoria

function getCasamento(){
  const casamento = {
    nome_conquista: 'Felizes para sempre',
    imagem: Anel,
    descrição_conquista: 'Está conquista é adquirida ao se completar o bolo de casamento',
  }
  return casamento
}

function getChurrasco(){
  const casamento = {
    nome_conquista: 'Só falta a cerveja',
    imagem: Carne,
    descrição_conquista: 'Está conquista é adquirida ao se completar todas as receitas para churrasco',
  }
  return casamento
}


function getNatal(){
  const casamento = {
    nome_conquista: 'é pavê ou pá come',
    imagem: PaveImg,
    descrição_conquista: 'Está conquista é adquirida ao se completar todas as receitas de natal',
  }
  return casamento
}

function getHalloween(){
  const casamento = {
    nome_conquista: "Que os jogos comecem",
    imagem: HalloweenImg,
    descrição_conquista: 'Está conquista é adquirida ao se completar todas as receitas de halloween',
  }
  return casamento
}


function getEpocaAno(){
  const casamento = {
    nome_conquista: 'A grande família',
    imagem: EpocaImg,
    descrição_conquista: 'Está conquista é adquirida ao se completar todas as receitas de época',
  }
  return casamento
}

function getAlho(){
  const casamento = {
    nome_conquista: 'Rei do Alho',
    imagem: rei_alho,
    descrição_conquista: 'Está conquista é adquirida ao se completar todas as receitas que contém alho',
  }
  return casamento
}



function PageModoPreparo() {
  const { id } = useParams();

  const [play] = useSound(
    trompete,
    { volume: 0.5 }
  );
  const [play_churrasco] = useSound(
    churras_musica,
    { volume: 0.2 }
  );
  const [play_demon] = useSound(
    demon,
    { volume: 0.5 }
  );
  const [play_epoca] = useSound(
    musica_epoca,
    { volume: 0.5 }
  );
  const [play_casamento] = useSound(
    musica_casamento,
    { volume: 0.2 }
  );
  const [play_natal] = useSound(
    musica_natal,
    { volume: 0.2 }
  );
  const [play_alho] = useSound(
    musica_rei_alho,
    { volume: 0.2 }
  );
  const [play_halloween] = useSound(
    musica_halloween,
    { volume: 0.4 }
  );
  
  const [conquistaAdquirida, setConquistaAdquirida] = useState({
    nome_conquista: "-------",
    imagem:
      "https://cdn.discordapp.com/attachments/869650300913479715/902398054852874290/rei-do-alho-logo-5ED449F072-seeklogo.png",
    descrição_conquista: "------------------",
  });
  const [receita, setReceita] = useState({
    nome_receita: "-----",
    categoria: "-----",
    link_video_receita: "https://www.youtube.com/embed/j5a0jTc9S10",
    ingredientes: "----\r\n3 ----\r\n----\r\n -----.",
    modo_preparo: "------\n-----.\n -------.\n-------.\n-------",
    dificuldade: "--------",
  });
  const [buttonConquista, setButtonConquista] = useState(false);
  const [buttonValid, setButtonValid] = useState(false);

  useEffect(() => {
    const loadModoPreparo = async () => {
      let preparo;
      preparo = await getModoDePreparo.getModoDePreparo(id);
      setReceita(preparo);
    };
    loadModoPreparo();
  }, []);

  function escolhe_musica() {
    // rei alho
    if(localStorage.getItem('alho') === '3'){
      localStorage.setItem('alho' , parseInt(localStorage.getItem('alho'))+1 )
      play_alho()
    }
    // casamento
    else if(localStorage.getItem('casamento') === '1'){
      localStorage.setItem('casamento', 2)
      play_casamento()  
    }
    // grande familia
    else if(localStorage.getItem('epoca_ano') === '6'){
      localStorage.setItem('epoca_ano' , parseInt(localStorage.getItem('epoca_ano'))+1 )
      play_epoca()  
    }
    // pave pa come
    else if(localStorage.getItem('natal') === '2' ){
      localStorage.setItem('natal' , parseInt(localStorage.getItem('natal'))+1 )
      play_natal()
    }
    // halloween
    else if(localStorage.getItem('halloween') === '2'){
      play_halloween()  
    }
    // churrasco
    else if(localStorage.getItem('churrasco') === '3'){
      localStorage.setItem('churrasco' , parseInt(localStorage.getItem('churrasco'))+1 )
      play_churrasco()  
    }
    // demon
    else if(localStorage.getItem('receitas_concluidas')  === '20' ){
      play_demon()  
    }
    // padrao    
    else
      play()
  }
  
  const handleClick = () => {
    verificaExist()
    var resultado = false
    if(ehConquistaQNT()){
      setConquistaAdquirida(getConquistaPorQuantidade())
      resultado = true
    }

    if(ehNatal(id)){
      setConquistaAdquirida(getNatal())
      resultado = true
    }

    if(ehHalloween(id)){
      setConquistaAdquirida(getHalloween())
      resultado = true
    }


    if(ehEpocaAno(id)){
      setConquistaAdquirida(getEpocaAno())
      resultado = true
    }

    if(ehChurrasco(id)){
      setConquistaAdquirida(getChurrasco())
      resultado = true
    }

    if (ehCasamento(id)){
      setConquistaAdquirida(getCasamento())
      resultado = true
    }
    
    if (ehReiDoAlho(id)){
      setConquistaAdquirida(getAlho())
      resultado = true
    }
    if(resultado)
      escolhe_musica()  

    return resultado 

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
            <img class="img-label" src={panelaReceita} />
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

      <button
        className="btn-black"
        disabled={buttonValid}
        onClick={() => setButtonConquista(handleClick())}
      >
        Concluir Receita
      </button>
      {/* <Link to="/Receitas"> */}
      <Conquista trigger={buttonConquista} setTrigger={setButtonConquista}>
        <h2 className="title-1">{conquistaAdquirida.nome_conquista}</h2>
        <img
          src={conquistaAdquirida.imagem}
          alt="Erro para carregar a imagem "
        />
        <p>{conquistaAdquirida.descrição_conquista}</p>
      </Conquista>
      {/* </Link> */}
    </div>
  );
}

export default PageModoPreparo;
