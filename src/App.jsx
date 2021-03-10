import './App.css';
import Sentences from './components/sentence/sentences.jsx';
import Difficulty from './components/sentence/difficulty/difficulty.jsx';

import { Col, Nav, Row } from 'react-bootstrap';
import image from './asset/test.png'


function App() {

  return (
    <div className="App">
       <header className="App-header">
         <Nav>
                    
         </Nav> 
       </header>
       <main>
       <section>
            <article>
              <div>
                <img className="App-logo" src={image} alt="Logo"/>
              </div>
            </article>
         </section>
         <section>
            <article>
              <div>
                <Difficulty difficultySelect="Standard"/>
                <Sentences difficulty="Paul"/>
              </div>
            </article>
         </section>
       </main>
       <footer>
        <Row>
          <Col>
            <p className="textFooter">Copyright <a href="https://www.twitch.tv/erryontv" target="_blank">ErryonTV</a> version 0.0.1 ALPHA</p>
          </Col>
        </Row>
        </footer>    
    </div>
  );
}

export default App;
