import React from "react";
import Button from "../utils/button";

const Search = () => {
  return (
    <>
      <Button text="Categorias" style="bk" />
      <Button text="Dificuldade" style="bk" />
      <div className="search">
        <div className="icon"></div>
        <div className="input">
          <input type="text" id="search-receita" placeholder="Pesquisar" />
        </div>
      </div>
    </>
  );
};

export default Search;
