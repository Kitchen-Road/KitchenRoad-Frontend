import NavbarLogado from '../components/container/NavbarLogado.js';
import Video from '../components/utils/Video.js';
import ListaModoPreparo from '../components/utils/ListaModoPreparo.js'; 

//exemplo para uso
const receita = {
    nome_receita: 'Pizza de peperoni',
    categoria: 'Massas',
    link_video_receita: 'https://www.youtube.com/embed/A_Y0qdWVPgg',
    ingredientes:'farinha de trigo\r\n3 ovos\r\nUma unidade linguiça peperoni\r\n 300 gramas de coco ralado.',
    modo_preparo: 'bota tudo em uma cumbuca e misture até ficar homogeneo.\nbote em uma forma.\n acrescente queijo e peperoni a seu gosto.\nleve ao forno a 180 graus e espere por 20 minutos.\nEsta pronto e so comer',
    dificuldade: 'Intermediário'
}

function PageModoPreparo() {
    return (
      <div className="App">
          <NavbarLogado />
          <main>
            <button className="btn-black">voltar</button>
            <div className="topic">
              <h2 className="title">{receita.nome_receita}</h2>
              <h3 className="title-2">{receita.categoria}</h3>
              <Video link={receita.link_video_receita}/>
              <p>{receita.dificuldade}</p>
            </div>
            <ListaModoPreparo 
                title="Ingredientes"
                value={receita.ingredientes}
            />
            <ListaModoPreparo 
                title="Modo de preparo"
                value={receita.modo_preparo}
            />
            
          </main>
      </div> 
    );
  }
  
  export default PageModoPreparo;