import NavbarLogado from '../components/container/NavbarLogado.js';
import Video from '../components/utils/Video.js';
import ListaModoPreparo from '../components/utils/ListaModoPreparo.js'; 
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getModoDePreparo from '../api/modoPreparoAPI.js';
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
    const { id } = useParams();
    const [bananinha, setReceita] = useState({});

    useEffect(() => {
      const loadModoPreparo = async () => {
        let list = [];
        list = await getModoDePreparo.getModoDePreparo(id);
        setReceita(list);
        console.log(bananinha);
      };
      loadModoPreparo();
    }, []);

    return (
      <div className="App">
          <NavbarLogado />
          <main>
          <Link to="/Receitas"><button className="btn-black">voltar</button> </Link>
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