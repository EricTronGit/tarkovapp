import './sentences.css';

import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col } from 'react-bootstrap';


function Sentences(props) {
    const HARDCORE = "Hardcore";
    const STANDARD = "Standard";
    const SIMPLE = "Simple";

    const sentencesArrayBeginning = ["Lance une carte ", "Pars sur la carte ", "Rends toi sur "];
    const sentencesArrayMiddle = [" avec ", " en t'équipant d'"];
    const arrayMaps = ["Echangeur", "Douanes", "Labs", "Base militaire", "Littoral", "Usine", "Bois"];
    const arrayWeapons = ["une AK47", "une AKM", "un Hunter", "un SKS", "une M4A1", "une HK 416"];
    const arrayHardcore = ["Tue 3 PMCs dans la tête", "Tue 5 Scavs en 10 minutes", "Ne porte pas dispositif audio"];

    let [click, setClick] = useState(0);
    const [sentenceNow, setSentenceNow] = useState("Clique sur ROLL pour génerer un challenge");




    const rollSentence = (e) => {
        click = setClick(click + 1);
        const resultSentence = createSentence();
        setSentenceNow(resultSentence);
    }

    const createSentence = () => {
        return chooseSentence();

    }

    const chooseSentence = () => {
        switch (props.difficulty) {
            case HARDCORE:
                return sentenceHardcore();
            case STANDARD:
                return sentenceStandard();                
            case SIMPLE:
                console.log("SIMPLE");
                break;
            default:
                console.log("ERREUR");
                break;
        }

    }

    const sentenceStandard = () => {
        return sentencesArrayBeginning[Math.floor(Math.random() * sentencesArrayBeginning.length)] +
        arrayMaps[Math.floor(Math.random() * arrayMaps.length)] +
        sentencesArrayMiddle[Math.floor(Math.random() * sentencesArrayMiddle.length)] +
        arrayWeapons[Math.floor(Math.random() * arrayWeapons.length)];
    }

    const sentenceHardcore = () => {
        return sentencesArrayBeginning[Math.floor(Math.random() * sentencesArrayBeginning.length)] +
        arrayMaps[Math.floor(Math.random() * arrayMaps.length)] +
        sentencesArrayMiddle[Math.floor(Math.random() * sentencesArrayMiddle.length)] +
        arrayWeapons[Math.floor(Math.random() * arrayWeapons.length)];
    }


    return (
        <Col>
            <div className="Sentence">
                <p className="phrase-Challenge">{sentenceNow}</p>
                {(props.difficulty === HARDCORE && click !== 0) && <p className="list-challenge">
                    {arrayHardcore[Math.floor(Math.random() * arrayHardcore.length)]}</p>}
                <Button variant="primary" className="btn-tarkov" onClick={rollSentence.bind(this)}>LANCER</Button>
            </div>
        </Col>
    );
  
     
}
  
export default Sentences;