import './App.css';
import Sentences from './components/sentence/sentences.jsx';
import Difficulty from './components/sentence/difficulty/difficulty.jsx';

import { Col, Container, Navbar, Row, Button , Modal} from 'react-bootstrap';
import image from './asset/newImg.png'

import { useState } from 'react';

function App() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
          <Button variant="primary btn-link-custom" onClick={handleShow}>
            A Propos
          </Button>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>A Propos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="text-modal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda itaque eveniet libero vel qui dicta, veniam nihil nostrum in vero eum a ea modi voluptas et maiores ab! Excepturi voluptates pariatur expedita commodi, numquam labore magni quidem quisquam dicta modi, dolore perferendis. Ratione quam, at voluptate eius natus fugit ipsum?</p>
              <p className="text-modal"><u>Un grand merci a :</u><br />
              <span>Ghostwake</span><br />
              <span>TheGetGet</span></p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fermer
              </Button>             
            </Modal.Footer>
          </Modal>
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
            <Row>
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
