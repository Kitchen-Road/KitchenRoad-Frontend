
import PrimeiraReceita from '../assets/img/conquista/primeira-receita.png'
import HellsKitchen from "../assets/img/conquista/HellsKitchen.png"
import pengu from "../assets/img/conquista/pingu.png"
import velho from "../assets/img/conquista/velhoputo.png"
import jackin from "../assets/img/conquista/jackin.png"

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
  const getConquistaPorQuantidade = (qnt) => {
    let nome = getNome(qnt)
    let img = getImg(qnt)
    const resultado = {
      nome_conquista: nome,
      imagem: img,
      descrição_conquista: 'Está conquista é adquirida ao completar ' + qnt + ' receitas',   
    }
    return resultado
}

default export getConquistaPorQuantidade