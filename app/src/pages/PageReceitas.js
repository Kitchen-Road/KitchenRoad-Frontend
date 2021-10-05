import Receitas from "../components/container/receitas.js";
import NavbarLogado from "../components/container/NavbarLogado.js";
import Footer from "../components/container/footer.js";
import GetReceitas from "../api/receitasAPI";
import GetDica from "../api/dicasAPI";
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Logo from "../assets/img/logo";
import Popup from "../components/utils/Popup.js";

function PageReceitas() {
  const [filtro, setFiltro] = useState("");
  const [dificuldade, setDificuldade] = useState("");
  const [input, setInput] = useState("");
  const [receitaList, setReceitasList] = useState([]);
  const [dicaList, setDicaList] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    const loadReceitas = async () => {
      console.log(buttonPopup);
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
        <Logo width="70" height="70" />
        <NavbarLogado />

        <div className="title-1">Receitas</div>
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
            <Col sm md xs lg="2">
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
          </Row>
        </Container>
        <Receitas receitaList={receitaList} />
        <Container>
          <div className="title-2">
            Está tendo dificuldade em prosseguir? Talvez uma dica lhe ajude!
          </div>
          <Button variant="dark" onClick={() => setButtonPopup(true)}>
            Dicas da Vovó
          </Button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div>
              {dicaList.map((item, key) => (
                <div>
                  {item.dicas.map((dica, key) => (
                    <div>
                      <h2 className="title-1">{dica.titulo}</h2>
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
