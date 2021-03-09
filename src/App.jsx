import './App.css';
import Button from 'react-bootstrap/Button';
import Sentences from './components/sentence/sentences.jsx';


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
                <Sentences name="Paul"/>
              </div>
            </article>
         </section>
       </main>
       <footer><p className="textFooter">copyright ErryonTV with Ghostwake version 0.0.1 ALPHA</p></footer>    
    </div>
  );
}

export default App;
