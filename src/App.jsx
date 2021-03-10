import './App.css';
import Sentences from './components/sentence/sentences.jsx';
import Difficulty from './components/sentence/difficulty/difficulty.jsx';

import { Col, Row } from 'react-bootstrap';
import image from './asset/test.png'


function App() {

  return (
    <div className="App">
       <header className="App-header">
         <nav>          
         </nav> 
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
                <Difficulty />
                <Sentences difficulty="Paul"/>
              </div>
            </article>
         </section>
       </main>
       <footer>
        <Row>
          <Col>
            <p className="textFooter">copyright ErryonTV with Ghostwake version 0.0.1 ALPHA</p>
          </Col>
        </Row>
        </footer>    
    </div>
  );
}

export default App;