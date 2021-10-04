import Receitas from "../components/container/receitas.js";
import Navbar from "../components/container/navbar.js";
import Footer from "../components/container/footer.js";
import GetReceitas from "../data/receitasData";
import React, { useState, useEffect } from "react";

function PageReceitas() {
  const [filtro, setFiltro] = useState("");
  const [input, setInput] = useState("");
  const [receitaList, setReceitasList] = useState([]);
  
  useEffect(() => {
    const loadReceitas = async () => {
      let list = [];
      list = await GetReceitas.getReceitas(filtro);
      setReceitasList(list);
    };
    loadReceitas();
  }, [filtro]);

  const updateInput = async (input) => {
    setInput(input);
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <br />
        <div className="title-1">Receitas</div>
        <br />
        <div className="search">
          <div className="icon" onClick={() => setFiltro(input)}></div>
          <div className="input">
          <input
            type="text"
            id="search-receita"
            placeholder="Pesquisar"
            value={input}
            onChange={(e) => updateInput(e.target.value)}
          />
        </div>
      </div>
      <button className="btn-bk" >Categoria</button>
      <button className="btn-bk" >Dificuldade</button>
        <br />
        <Receitas receitaList={receitaList} />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default PageReceitas;
