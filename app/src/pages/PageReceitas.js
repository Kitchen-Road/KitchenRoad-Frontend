import Receitas from "../components/container/receitas.js";
import Navbar from "../components/container/navbar.js";
import Footer from "../components/container/footer.js";
import React from "react";

function PageReceitas() {
  return (
    <>
      <div className="App">
        <Navbar />
        <br />
        <Receitas />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default PageReceitas;
