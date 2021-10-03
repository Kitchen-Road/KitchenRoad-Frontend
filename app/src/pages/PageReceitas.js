import Receitas from "../components/container/receitas.js";
import Navbar from "../components/container/navbar.js";
import Footer from "../components/container/footer.js";
import GetReceitas from "../data/receitasData";
import React, { useState, useEffect } from "react";

function PageReceitas() {
  const [receitaList, setReceitasList] = useState([]);
  useEffect(() => {
    const loadReceitas = async () => {
      let list = [];
      list = await GetReceitas.getReceitas();
      setReceitasList(list);
    };
    loadReceitas();
  }, []);

  return (
    <>
      <div className="App">
        <Navbar />
        <br />
        <Receitas receitaList={receitaList} />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default PageReceitas;
