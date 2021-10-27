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
import demon from '../assets/music/demon.mp3'
import useSound from 'use-sound';
import trompete from '../assets/music/trompete.mp3'
import musica_casamento from '../assets/music/casamento.mp3'
import PrimeiraReceita from '../assets/img/conquista/primeira-receita.png'
import HellsKitchen from "../assets/img/conquista/HellsKitchen.png"
import pengu from "../assets/img/conquista/pingu.png"
import velho from "../assets/img/conquista/velhoputo.png"
import jackin from "../assets/img/conquista/jackin.png"
import Anel from "../assets/img/conquista/anel.png"
import Carne from "../assets/img/conquista/carne.png"

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

function verificaExist(){
  //receitas_concluidas
  if(localStorage.getItem('receitas_concluidas') === null || localStorage.getItem('receitas_concluidas') === '' || localStorage.getItem('receitas_concluidas') === 'NaN')
    localStorage.setItem('receitas_concluidas', 0)
  // epoca_ano
  if(localStorage.getItem('epoca_ano') === null || localStorage.getItem('epoca_ano') === '' || localStorage.getItem('epoca_ano') === 'NaN')
    localStorage.setItem('epoca_ano', 0)
  //churrasco
  if(localStorage.getItem('churrasco') === null || localStorage.getItem('churrasco') === '' || localStorage.getItem('churrasco') === 'NaN')
    localStorage.setItem('churrasco', 0)
  // alho
  if(localStorage.getItem('alho') === null || localStorage.getItem('alho') === '' || localStorage.getItem('alho') === 'NaN')
    localStorage.setItem('alho', 0)
  // casamento
  if(localStorage.getItem('casamento') === null || localStorage.getItem('casamento') === '' || localStorage.getItem('casamento') === 'NaN')
    localStorage.setItem('casamento', 0)
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
  console.log(id)
  if(id === '12' ||
     id === '13' ||
     id === '14' )
    localStorage.setItem('churrasco' , parseInt(localStorage.getItem('churrasco'))+1 )
  let churrasco = localStorage.getItem('churrasco')
  if(churrasco === '3')
    return true
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

function getImg(id){
  return id === '1' ? PrimeiraReceita:
         id === '5' ? pengu:
         id === '10' ? velho:
         id === '15' ? jackin:
         id === '20' ? HellsKitchen:
         ''
}
function getConquistaPorQuantidade(){
  let qnt = localStorage.getItem('receitas_concluidas')
  let nome = getNome(qnt)
  let img = getImg(qnt)
  const resultado = {
    nome_conquista: nome,
    imagem: img,
    descrição_conquista: 'Está conquista é adquirida ao completar ' + qnt + ' receitas',   
  }
  return resultado
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

function PageModoPreparo() {
  const { id } = useParams();
  const [play] = useSound(
    trompete,
    { volume: 0.5 }
  );
  const [play_demon] = useSound(
    demon,
    { volume: 0.5 }
  );
  const [play_casamento] = useSound(
    musica_casamento,
    { volume: 0.2 }
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
    verificaExist()
    var resultado = false
    if(ehConquistaQNT()){
      setConquistaAdquirida(getConquistaPorQuantidade())
      if(localStorage.getItem('receitas_concluidas') === '20'){
        play_demon()
      }else
        play()
      resultado = true
    }
    if(ehChurrasco(id)){
      setConquistaAdquirida(getChurrasco())
      play()
      resultado = true
    }

    if (ehCasamento(id)){
      setConquistaAdquirida(getCasamento())
      play_casamento() // mudar dps
      resultado = true
    }
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
