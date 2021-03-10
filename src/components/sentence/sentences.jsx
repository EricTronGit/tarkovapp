import React from 'react';
import Button from 'react-bootstrap/Button';



class Sentences extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        sentenceNow:"Cliquez sur ROLL pour lancer l'aléatoire",
        sentencesArrayBeginning:["Lance une carte ","Pars sur la carte ","Rends toi sur "],
        arrayMaps:["Echangeur","Douanes","Labs","Base militaire","Litorral","Usine","Bois"],
        sentencesArrayMiddle:[" avec ", " en t'équipant d'"],
        arrayWeapons:["une AK47","une AKM","un Hunter","un SKS","une M4A1","une HK 416"]
      }
      
    }


    rollSentence(e) {
        const resultSentence = this.createSentence();
        this.setState({...this.state,sentenceNow:resultSentence})
    }

    createSentence(){
        return this.state.sentencesArrayBeginning[Math.floor(Math.random() * this.state.sentencesArrayBeginning.length)] + 
                this.state.arrayMaps[Math.floor(Math.random() * this.state.arrayMaps.length)] +
                this.state.sentencesArrayMiddle[Math.floor(Math.random() * this.state.sentencesArrayMiddle.length)] +
                this.state.arrayWeapons[Math.floor(Math.random() * this.state.arrayWeapons.length)];
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