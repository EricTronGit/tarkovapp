import './App.css';
import Sentences from './components/sentence/sentences.jsx';
import Difficulty from './components/sentence/difficulty/difficulty.jsx';

import { Col, Container, Navbar, Row } from 'react-bootstrap';
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
      <Navbar fixed="top" variant="dark">        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          </Navbar.Text>
        </Navbar.Collapse>
       </Navbar>
      </header>
      <Container className="vh-100 d-flex flex-column ">
      <main>        
          <Row>
            <Col>
            <img className="App-logo" src={image} alt="Logo" />
            </Col>
          </Row>
          <Container className="boxSentenceDifficulty">
            <Row>
              <Difficulty difficultySelect={callback} />
            </Row>
            <Row>
              <Sentences difficulty={difficulty} />
            </Row>     
          </Container>   
      </main>
      </Container>
      <footer>
      <Container fluid>
        <Row>
          <Col>
          <p className="textFooter">Copyright <a href="https://www.twitch.tv/erryontv" target="_blank"
              rel="noreferrer">ErryonTV</a> version 0.0.5 ALPHA</p>
          </Col>
        </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
