import React from 'react';
import Button from 'react-bootstrap/Button';

class Sentences extends React.Component {

    HARDCORE = "Hardcore";
    STANDARD = "Standard";
    SIMPLE = "Simple";

    constructor(props) {
      super(props);
      this.state = {
        sentenceNow:"Cliquez sur ROLL pour lancer l'aléatoire",
        sentencesArrayBeginning:["Lance une carte ","Pars sur la carte ","Rends toi sur "],
        arrayMaps:["Echangeur","Douanes","Labs","Base militaire","Littoral","Usine","Bois"],
        sentencesArrayMiddle:[" avec ", " en t'équipant d'"],
        arrayWeapons:["une AK47","une AKM","un Hunter","un SKS","une M4A1","une HK 416"],
        arrayHardcore:["Tue 15 PMC au couteau"]
      }
      
    }

    rollSentence(e) {
        const resultSentence = this.createSentence();
        this.setState({...this.state,sentenceNow:resultSentence})
    }

    createSentence(){
        this.IA();
        return this.state.sentencesArrayBeginning[Math.floor(Math.random() * this.state.sentencesArrayBeginning.length)] + 
                this.state.arrayMaps[Math.floor(Math.random() * this.state.arrayMaps.length)] +
                this.state.sentencesArrayMiddle[Math.floor(Math.random() * this.state.sentencesArrayMiddle.length)] +
                this.state.arrayWeapons[Math.floor(Math.random() * this.state.arrayWeapons.length)];
    }

    IA(){
        switch(this.props.difficulty) {
            case this.HARDCORE:
                console.log("HARDCORE");
                break;
            case this.STANDARD:
                console.log("STANDARD");
                break;
            case this.SIMPLE:
                console.log("SIMPLE");
                break;
            default:
              console.log("ERREUR");
              break;
          }
        
    }

    render() { 
        return (
            <div className="Sentence">
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