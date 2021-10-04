import Receitas from "../components/container/receitas.js";
import Navbar from "../components/container/navbar.js";
import Footer from "../components/container/footer.js";
import GetReceitas from "../data/receitasData";
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

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
        <Container>
          <Row className="justify-content-md-center">
            <Col md="3">
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
            </Col>
            <Col sm md xs lg="1">
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown1">
                  Categoria
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark" className="super-colors">
                  <Dropdown.Item eventKey="1">Todas</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Aves</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Bebidas</Dropdown.Item>
                  <Dropdown.Item eventKey="4">Bolos</Dropdown.Item>
                  <Dropdown.Item eventKey="5">Doces</Dropdown.Item>
                  <Dropdown.Item eventKey="6">Peixes</Dropdown.Item>
                  <Dropdown.Item eventKey="7">Salgados</Dropdown.Item>
                  <Dropdown.Item eventKey="8">Massas</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col sm md xs lg="2">
              <Dropdown variant="dark">
                <Dropdown.Toggle variant="dark" id="dropdown2">
                  Dificuldade
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark" className="super-colors">
                  <Dropdown.Item eventKey="1">Iniciante</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Intermediária</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Avançada</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
        <br />
        <Receitas receitaList={receitaList} />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default PageReceitas;
