import React from 'react';
import Button from 'react-bootstrap/Button';


class Sentences extends React.Component {
    
    componentDidMount(){ 
    }
    

    constructor(props) {
      super(props);
      this.state = {
        sentenceNow:"Cliquez sur ROLL pour lancer l'aléatoire",
        sentencesArray:["Je suis la phrase 1","Je suis la phrase 2","Je suis la phrase 3","Je suis la phrase 4"]
      }
      
    }


    rollSentence(e) {
        const maVar = this.state.sentencesArray[Math.floor(Math.random() * this.state.sentencesArray.length)];
        this.setState({...this.state,sentenceNow:maVar})
    }

    render() { 
        return ( 
            
            <div className="Sentence">.
                <div>  
                    <p className="phrase-Challenge">{this.state.sentenceNow}</p>
                </div>
                <div>
                    <Button variant="dark" onClick={this.rollSentence.bind(this)}>ROLL</Button>
                </div>
            </div>    
        );
    };
     
}
  
export default Sentences;