import './sentences.css';
import armes from "../../jsonfiles/armes.json"
import sentences from "../../jsonfiles/sentences.json"
import maps from "../../jsonfiles/maps.json"
import React, {
    useEffect
} from 'react';
import Button from 'react-bootstrap/Button';
import {
    useState
} from 'react';
import {
    Col
} from 'react-bootstrap';
import cadenasOpen from '../../asset/cadenasopen.png';
import cadenasClose from '../../asset/cadenas.png';
import Prout from '../../asset/tarkovClick.jpg';


function Sentences(props) {
    const HARDCORE = "Hardcore";
    const STANDARD = "Standard";
    const SIMPLE = "Simple";

    let sentenceNow = "";

    let [sentencesArrayBeginning, setSentencesArrayBeginning] = useState([]);
    let [sentencesArrayMiddle, setSentencesArrayMiddle] = useState([]);
    let [sentencesArrayHardcore, setSentencesArrayHardcore] = useState([]);
    let [arrayWeapons, setArrayWeapons] = useState([]);
    let [arrayMaps, setArrayMaps] = useState([]);
    let [click, setClick] = useState(0);
    let [clickHardcore, setClickkHardcore] = useState(0);
    let [sentenceStandardNow, setSentenceStandardNow] = useState([]);
    let [lockedStandard, setLockedStandard] = useState(false);
    let [lockedHardcore, setLockedHardcore] = useState(false);
    let [sentenceNowHardcore, setSentenceNowHardcore] = useState([]);
    
    useEffect(() => initialize(),[]);

    const initialize = () => {
        setSentencesArrayBeginning(sentences.debut);
        setSentencesArrayMiddle(sentences.middle);
        setSentencesArrayHardcore(sentences.hardcore);
        setArrayWeapons(armes.armes);
        setArrayMaps(maps.maps);
        setSentenceStandardNow("Clique sur \"LANCER\" pour génerer un challenge");
    }

    const rollSentence = () => {
        document.body.style.backgroundImage = "url("+Prout+")";
        //TODO pas beau, trouver une autre solution
        if(props.difficulty === HARDCORE){
            setClickkHardcore(clickHardcore + 1);
        }
        setClick(click + 1);
        createSentence();
    }

    const createSentence = () => {
        chooseSentence();
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
        if(!lockedStandard){
           sentenceNow = createSentenceNow();
           setSentenceStandardNow(sentenceNow);
        }
    }

    const sentenceHardcore = () => {
        if(!lockedStandard){
            sentenceNow = createSentenceNow();
            setSentenceStandardNow(sentenceNow)       
        }
        //TODO REVOIR
        if(!lockedHardcore){
            setSentenceNowHardcore(setSentenceHardcore());
        }
    }

    const createSentenceNow = () => {
        return sentencesArrayBeginning[Math.floor(Math.random() * sentencesArrayBeginning.length)].phrase +
        arrayMaps[Math.floor(Math.random() * arrayMaps.length)].nom +
        sentencesArrayMiddle[Math.floor(Math.random() * sentencesArrayMiddle.length)].phrase +
        arrayWeapons[Math.floor(Math.random() * arrayWeapons.length)].nom;
    }

    const setSentenceHardcore = () => {
        return sentencesArrayHardcore[Math.floor(Math.random() * sentencesArrayHardcore.length)].phrase;
    }

    const findSentenceHardcore = () => {
        if(click !== 0 && props.difficulty === HARDCORE){
            return sentenceNowHardcore;
        }
}
    const changeLock = (e) => {
        switch (e.target.className) {
            case "cadenas-standard":                 
                setLockedStandard(!lockedStandard)
                break;
            case "cadenas-hardcore":               
                setLockedHardcore(!lockedHardcore);                 
                break;
            default:
                console.log("ERREUR");
                break;
        }
    }

    const checkLockedStandard = () => {     
        if(!lockedStandard && click === 0) return;   
        return <img className="cadenas-standard" src={lockedStandard && click > 0 ? cadenasClose : cadenasOpen} alt="Logo" onClick={changeLock.bind(this)}/>
    }

    const checkLockedHardcore = () => {     
        if(!lockedHardcore && clickHardcore === 0) return;   
        if(props.difficulty === HARDCORE && clickHardcore > 0 ){
            return <img className="cadenas-hardcore" src={lockedHardcore && click > 0 ? cadenasClose : cadenasOpen} alt="Logo" onClick={changeLock.bind(this)}/>
        }
    }
   
    return (
        <Col>
            <div className="Sentence">
                <p className="tarkov-text">
                    {sentenceStandardNow} 
                    {checkLockedStandard()}
                </p>
                <p className="tarkov-text-defi">
                    {findSentenceHardcore()}
                    {checkLockedHardcore()}
                </p>
                <Button variant="primary" className="btn-tarkov" onClick={rollSentence.bind(this)}>LANCER</Button>
            </div>
        </Col>
    );
}
  
export default Sentences;