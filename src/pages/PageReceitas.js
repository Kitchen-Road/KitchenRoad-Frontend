import Receitas from "../components/container/receitas.js";
import NavbarLogado from "../components/container/NavbarLogado.js";
import Footer from "../components/container/footer.js";
import GetReceitas from "../api/receitasAPI";
import GetDica from "../api/dicasAPI";
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Popup from "../components/utils/Popup.js";

function formatDificuldade(dificuldade) {
  var xp;
  switch (dificuldade) {
    case "F":
      xp = "Iniciante";
      break;
    case "M":
      xp = "Intermediária";
      break;
    case "D":
      xp = "Avançada";
      break;
  }
  return xp;
}

function PageReceitas() {
  const [filtro, setFiltro] = useState("");
  const [dificuldade, setDificuldade] = useState("");
  const [input, setInput] = useState("");
  const [receitaList, setReceitasList] = useState([]);
  const [dicaList, setDicaList] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    const loadReceitas = async () => {
      let list = [];
      list = await GetReceitas.getReceitas(filtro, dificuldade);
      setReceitasList(list);
    };
    loadReceitas();
  }, [filtro, dificuldade]);

  useEffect(() => {
    const loadDicas = async () => {
      let list = [];
      list = await GetDica.getDica();
      setDicaList(list);
    };
    loadDicas();
  }, [buttonPopup]);

  const updateInput = async (input) => {
    setInput(input);
  };

  return (
    <>
      <div className="App">
        <NavbarLogado />

        <div className="title-1">Receitas</div>

        <Container>
          <Row className="justify-content-md-center">
            <Col xs="3">
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
            <Col xs="auto">
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown1">
                  Categoria
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark" className="super-colors">
                  <Dropdown.Item onClick={() => setFiltro()}>
                    Todas
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFiltro("Aves")}>
                    Aves
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFiltro("Bebidas")}>
                    Bebidas
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFiltro("Bolos")}>
                    Bolos
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFiltro("Carnes")}>
                    Carnes
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFiltro("Doces")}>
                    Doces
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFiltro("Peixes")}>
                    Peixes
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFiltro("Salgados")}>
                    Salgados
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFiltro("Massas")}>
                    Massas
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs="auto">
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown2">
                  Dificuldade
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark" className="super-colors">
                  <Dropdown.Item onClick={() => setDificuldade()}>
                    Todas
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDificuldade("I")}>
                    Iniciantes
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDificuldade("T")}>
                    Intermediárias
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDificuldade("A")}>
                    Avançadas
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs="auto">
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown2">
                  Festividades
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark" className="super-colors">
                  <Dropdown.Item onClick={() => setFiltro("")}>
                    Todas
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFiltro("Natal")}>
                    Natal
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFiltro("Páscoa")}>
                    Páscoa
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFiltro("Halloween")}>
                    Halloween
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setFiltro("Festa Junina")}>
                    Festa Junina
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
        <Receitas receitaList={receitaList} />
        <Container>
          <div className="title-4-dark">
            Está tendo dificuldade em prosseguir? Talvez uma dica lhe ajude!
          </div>
          <button className="btn-black" onClick={() => setButtonPopup(true)}>
            Dicas da Vovó
          </button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div>
              {dicaList.map((item, key) => (
                <div>
                  {item.dicas.map((dica, key) => (
                    <div>
                      <h2 className="title-1">{dica.titulo}</h2>
                      <h3 className="title-2">
                        {formatDificuldade(dica.dificuldade)}
                      </h3>
                      <p>{dica.conteudo_dica}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Popup>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default PageReceitas;
