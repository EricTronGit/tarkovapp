import './App.css';
import Sentences from './components/sentence/sentences.jsx';
import Difficulty from './components/sentence/difficulty/difficulty.jsx';

import {Col, Container, Navbar, Row, Button, Modal} from 'react-bootstrap';
import image from './asset/EFT-challenge-white.png'

import React, {useState, useRef} from 'react';

function App() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [difficulty, setDifficulty] = useState("Standard");

    const callback = (chosenDifficulty) => {
        setDifficulty(chosenDifficulty);
    }

    const sentencesRef = useRef();

    let sentenceComponent = (<Sentences difficulty={difficulty} ref={sentencesRef}/>);

    return (
        <div className="App">
            <header className="App-header">
                <Navbar variant="dark">
                    <Navbar.Collapse className="justify-content-center">
                            <Button variant="link btn-link-custom" href="https://github.com/EricTronGit/tarkovapp">
                                Github
                            </Button>
                            <Button variant="link btn-link-custom" onClick={handleShow}>
                                À Propos
                            </Button>
                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>A Propos</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="text-modal">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Assumenda itaque eveniet libero vel qui dicta, veniam nihil nostrum in vero eum
                                        a ea modi voluptas et maiores ab! Excepturi voluptates pariatur expedita
                                        commodi, numquam labore magni quidem quisquam dicta modi, dolore perferendis.
                                        Ratione quam, at voluptate eius natus fugit ipsum?</p>
                                    <p className="text-modal"><u>Un grand merci a :</u><br/>
                                        <span>Ghostwake</span><br/>
                                        <span>TheGetGet</span><br/>
                                        <span>Razorflak</span></p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Fermer
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Button variant="link btn-link-custom" onClick={handleShow}>
                                Mentions Légales
                            </Button>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <Container className="pb-5 d-flex flex-column">
                <main>
                    <Row>
                        <Col>
                            <img className="App-logo" src={image} alt="Logo"/>
                        </Col>
                    </Row>
                    <Container className="my-3 boxDifficultyAndLaunch">
                        <Row>
                            <Col sm={9}>
                                <Difficulty difficultySelect={callback}/>
                            </Col>
                            <Col className="px-0">
                                <Button variant="primary" className="btn-block btn-tarkov btn-launch" onClick={() => sentencesRef.current.rollSentence()}>LANCER</Button>
                            </Col>
                        </Row>
                    </Container>

                    {sentenceComponent}
                </main>
            </Container>
            <footer>
                <Container fluid>
                    <Row>
                        <Col>
                            <p className="textFooter">Copyright <a href="https://www.twitch.tv/erryontv" target="_blank"
                                                                   rel="noreferrer">ErryonTV</a> version 0.1.0 ALPHA</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default App;
