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
    
    const [showMention, setShowMention] = useState(false);

    const handleCloseMention = () => setShowMention(false);
    const handleShowMention = () => setShowMention(true);


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
                                    <p className="text-modal">Ce site vous permet de lancer un aléatoire pour savoir avec quel équipement et quelles missions supplémentaire vous allez devoir accomplir durant votre RAID.</p>
                                    <p className="text-modal">Vous pouvez "bloquer" certaines phrases pour qu'elles ne bougent plus lors de vos prochains lancées.</p>
                                    <p className="text-modal">Ce site est en parti fait sur ma chaîne Twitch <a href="https://www.twitch.tv/erryontv" target="_blank" rel="noreferrer">ErryonTV</a>. N'hésitez pas à me faire des retours ou me de me proposer des ajouts.</p>
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
                            <Button variant="link btn-link-custom" onClick={handleShowMention}>
                                Mentions Légales
                            </Button>
                            <Modal show={showMention} onHide={handleCloseMention} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Mentions Légales</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="text-modal">Ce site n'est en aucuns cas en partenariat avec Battlestate Games. Il est fait par des fans pour la communauté d'Escape From Tarkov.</p>
                                    <p className="text-modal"><b>Tout droit reservés à Battlestate Games.</b></p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseMention}>
                                        Fermer
                                    </Button>
                                </Modal.Footer>
                            </Modal>
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
                            <p className="textFooter">Copyright
                             <a href="https://www.twitch.tv/erryontv" target="_blank" rel="noreferrer">ErryonTV</a> version 0.1.0 BETA avec l'aide de <a href="https://github.com/francoispeyret" target="_blank" rel="noreferrer">Meeshoot</a></p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default App;
