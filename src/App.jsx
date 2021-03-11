import './App.css';
import Sentences from './components/sentence/sentences.jsx';
import Difficulty from './components/sentence/difficulty/difficulty.jsx';

import { Col, Container, Nav, Row } from 'react-bootstrap';
import image from './asset/test.png'
import { useState } from 'react';

function App() {
  
  const [difficulty, setDifficulty] = useState("Standard");

  const callback = (chosenDifficulty) => {
     setDifficulty(chosenDifficulty);  
  }

  return (

    <div className="App">
      <header className="App-header">
        <Nav>

        </Nav>
      </header>
      <Container className="vh-100 d-flex flex-column ">
      <main>        
          <Row>
            <Col>
            <img className="App-logo" src={image} alt="Logo" />
            </Col>
          </Row>
          <Row>
            <Difficulty difficultySelect={callback} />
          </Row>
          <Row>
            <Sentences difficulty={difficulty} />
          </Row>        
      </main>
      </Container>
      <footer>
      <Container fluid>
        <Row>
          <Col>
          <p className="textFooter">Copyright <a href="https://www.twitch.tv/erryontv" target="_blank"
              rel="noreferrer">ErryonTV</a> version 0.0.1 ALPHA</p>
          </Col>
        </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
