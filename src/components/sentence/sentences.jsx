import './sentences.css';
import armes from "../../jsonfiles/armes.json"
import sentences from "../../jsonfiles/sentences.json"
import maps from "../../jsonfiles/maps.json"
import hardcore from "../../jsonfiles/hardcore.json"
import React, {
    useEffect
} from 'react';
import {
    useState,
    forwardRef,
    useImperativeHandle
} from 'react';
import {
    Col, Container, Row
} from 'react-bootstrap';
import cadenasOpen from '../../asset/cadenasopen.png';
import cadenasClose from '../../asset/cadenas.png';

import backgroundSVC from '../../services/backgroundSVC.js'



const Sentences = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        rollSentence() {
            createSentence();
        }
    }));

    const SIMPLE = "Simple";
    const STANDARD = "Standard";
    const DIFFICILE = "Difficile";
    const HARDCORE = "Hardcore";

    let mapNow;

    //TODO faire une phrase en français plus mieux !!! 
    const ALTERATIONDEFI = "Fais - 1 à ta classe d'armure et - 1 à ta classe de casque";

    let [sentencesArrayBeginning, setSentencesArrayBeginning] = useState([]);
    let [sentencesArrayMiddle, setSentencesArrayMiddle] = useState([]);
    let [sentencesArrayStandardArmures, setSentencesArrayStandardArmures] = useState([]);
    let [sentencesArrayStandardCasque, setSentencesArrayStandardCasque] = useState([]);
    let [sentencesArrayDifficile, setSentencesArrayDifficile] = useState([]);
    
    let [sentencesArrayHardcoreDouanes, setSentencesArrayHardcoreDouanes] = useState([]);
    let [sentencesArrayHardcoreBois, setSentencesArrayHardcoreBois] = useState([]);
    let [sentencesArrayHardcoreEchangeur, setSentencesArrayHardcoreEchangeur] = useState([]);
    let [sentencesArrayHardcoreLittoral, setSentencesArrayHardcoreLittoral] = useState([]);
    let [sentencesArrayHardcoreLabs, setSentencesArrayHardcoreLabs] = useState([]);
    let [sentencesArrayHardcoreUsine, setSentencesArrayHardcoreUsine] = useState([]);
    let [sentencesArrayHardcoreBaseMilitaire, setSentencesArrayHardcoreBaseMilitaire] = useState([]);

    let [arrayWeapons, setArrayWeapons] = useState([]);
    let [arrayMaps, setArrayMaps] = useState([]);

    let [clickSimple, setClickSimple] = useState(0);
    let [clickStandard, setClickStandard] = useState(0);
    let [clickDifficile, setClickDifficile] = useState(0);
    let [clickHardcore, setClickHardcore] = useState(0);

    let [sentenceSimpleNow, setSentenceSimpleNow] = useState([]);
    let [sentenceStandardNow, setSentenceStandardNow] = useState([]);
    let [sentenceNowDifficile, setSentenceNowDifficile] = useState([]);
    let [sentenceNowHardcore, setSentenceNowHardcore] = useState([]);

    let [lockedSimple, setLockedSimple] = useState(false);
    let [lockedStandard, setLockedStandard] = useState(false);
    let [lockedDifficile, setLockedDifficile] = useState(false);
    let [lockedHardcore, setLockedHardcore] = useState(false);
    
    useEffect(() => initialize(),[]);
    useEffect(() => initializeDefi(), []);

    const initialize = () => {
        setSentencesArrayBeginning(sentences.debut);
        setSentencesArrayMiddle(sentences.middle);
        setSentencesArrayStandardArmures(sentences.standardArmures);
        setSentencesArrayStandardCasque(sentences.standardCasque);
        setSentencesArrayDifficile(sentences.difficile);        
        setArrayWeapons(armes.armes);
        setArrayMaps(maps.maps);
        setSentenceSimpleNow();
    }

    const initializeDefi = () => {
        setSentencesArrayHardcoreDouanes(hardcore.douanes);
        setSentencesArrayHardcoreBois(hardcore.bois);
        setSentencesArrayHardcoreEchangeur(hardcore.echangeur);
        setSentencesArrayHardcoreLittoral(hardcore.littoral);
        setSentencesArrayHardcoreLabs(hardcore.labs);
        setSentencesArrayHardcoreUsine(hardcore.usine);
        setSentencesArrayHardcoreBaseMilitaire(hardcore.basemilitaire);
    }

    const changeBackground = (mapNow) => {
        const monImage = new Image();        
        monImage.src = backgroundSVC.changeBackground(mapNow);
        monImage.onload = function(){
            document.body.style.backgroundImage = "url("+monImage.src+")";
        }      
    }

    const createSentence = () => {
        chooseSentence();
    }

    const chooseSentence = () => {
        switch (props.difficulty) {
            case SIMPLE:
                return sentenceSimple();
            case STANDARD:
                return sentenceStandard();
            case DIFFICILE:
                return sentenceDifficile();   
            case HARDCORE:
                return sentenceHardcore(); 
            default:
                console.log("ERREUR");
                break;
        }

    }
    
    const sentenceSimple = () => {
        setClickSimple(clickSimple + 1);
        if(!lockedSimple){
            setSentenceSimpleNow(createSentenceSimpleNow());
        }
    }

    const sentenceStandard = () => {
        sentenceSimple();
        setClickStandard(clickStandard + 1);
        if(!lockedStandard){            
            setSentenceStandardNow(createSentenceStandardNow());
        }
    }

    const sentenceDifficile = () => {
        sentenceStandard();
        setClickDifficile(clickDifficile + 1);
        if(!lockedDifficile){
            setSentenceNowDifficile(createSentenceDifficileNow());
        }
    }

    const sentenceHardcore = () => {
        sentenceDifficile();   
        let arrayMapeu;
        setClickHardcore(clickHardcore + 1);  
        if(!lockedSimple){
            switch(mapNow){
                case "Douanes":                     
                    arrayMapeu = sentencesArrayHardcoreDouanes;                  
                    break;
                case "Bois": 
                    arrayMapeu = sentencesArrayHardcoreBois; 
                    break;
                case "Labs":   
                    arrayMapeu = sentencesArrayHardcoreLabs;              
                    break;
                case "Base militaire":   
                    arrayMapeu = sentencesArrayHardcoreBaseMilitaire;                 
                    break;
                case "Littoral": 
                    arrayMapeu = sentencesArrayHardcoreLittoral;                       
                    break;
                case "Usine": 
                    arrayMapeu = sentencesArrayHardcoreUsine;                       
                    break;
                case "Echangeur": 
                    arrayMapeu = sentencesArrayHardcoreEchangeur;                        
                    break;
                default:
                    setSentenceNowHardcore("");
                    break;
            }
            setSentenceNowHardcore(arrayMapeu[Math.floor(Math.random() * arrayMapeu.length)].phrase);                           
        }
        
    }

    const createSentenceSimpleNow = () => {    
        mapNow = arrayMaps[Math.floor(Math.random() * arrayMaps.length)].nom;
        changeBackground(mapNow); 
        return sentencesArrayBeginning[Math.floor(Math.random() * sentencesArrayBeginning.length)].phrase +
        mapNow +
        sentencesArrayMiddle[Math.floor(Math.random() * sentencesArrayMiddle.length)].phrase +
        arrayWeapons[Math.floor(Math.random() * arrayWeapons.length)].nom;
    }

    const createSentenceStandardNow = () => {
        return sentencesArrayStandardArmures[Math.floor(Math.random() * sentencesArrayStandardArmures.length)].phrase +
        sentencesArrayStandardCasque[Math.floor(Math.random() *  sentencesArrayStandardCasque.length)].phrase
       
    }

    const createSentenceDifficileNow = () => {
        return sentencesArrayDifficile[Math.floor(Math.random() * sentencesArrayDifficile.length)].phrase;
    }

    const findSentenceSimple = () => {  
        return sentenceSimpleNow;        
    }

    const findSentenceStandard = () => {
        if(clickStandard !== 0 && (props.difficulty === STANDARD || props.difficulty === DIFFICILE || props.difficulty === HARDCORE)){
            return sentenceStandardNow;
        }
    }

    const findSentenceDifficile = () => {
        if(clickDifficile !== 0 && (props.difficulty === DIFFICILE || props.difficulty === HARDCORE)){
            return sentenceNowDifficile;
        }
    }

    const findSentenceHardcore = () => {
        if(clickDifficile !== 0 && ( props.difficulty === HARDCORE)){
            return sentenceNowHardcore;
        }
    }

    const findSentenceRandom = () => {
        if(Math.floor(Math.random() * 99) === 1){
            return ALTERATIONDEFI;
        }
    }

    const changeLock = (e) => {
        switch (e.target.className) {
            case "cadenas-simple":               
                setLockedSimple(!lockedSimple);                 
                break;
            case "cadenas-normal":                 
                setLockedStandard(!lockedStandard)
                break;
            case "cadenas-difficile":               
                setLockedDifficile(!lockedDifficile);                 
                break;
            case "cadenas-hardcore":               
                setLockedHardcore(!lockedHardcore);                 
                break;
            default:
                console.log("ERREUR");
                break;
        }
    }
    
    const checkLockedSimple = () => {     
        if(!lockedSimple && clickSimple === 0) return;   
        return <img className="cadenas-simple" src={lockedSimple && clickSimple > 0 ? cadenasClose : cadenasOpen} alt="Logo" onClick={changeLock.bind(this)}/>
    }
   
    const checkLockedStandard = () => {     
        if(!lockedStandard && clickStandard === 0) return;
        if((props.difficulty === STANDARD || props.difficulty === DIFFICILE || props.difficulty === HARDCORE) && clickStandard > 0 ){
            return <img className="cadenas-normal" src={lockedStandard && clickStandard > 0 ? cadenasClose : cadenasOpen} alt="Logo" onClick={changeLock.bind(this)}/>
        }
    }

    const checkLockedDifficile = () => {     
        if(!lockedDifficile && clickDifficile === 0) return;   
        if((props.difficulty === DIFFICILE || props.difficulty === HARDCORE ) && clickDifficile > 0 ){
            return <img className="cadenas-difficile" src={lockedDifficile && clickDifficile > 0 ? cadenasClose : cadenasOpen} alt="Logo" onClick={changeLock.bind(this)}/>
        }
    }


    const findSentenceSimpleValue = findSentenceSimple();

    if(findSentenceSimpleValue) {
        return (
            <Container className="boxSentence my-3 my-lg-5">
                <Row>
                    <Col>
                        <div className="Sentence">
                            <p className="tarkov-text">
                                {findSentenceSimple()}
                                {checkLockedSimple()}
                            </p>
                            <p className="tarkov-text-defi">
                                {findSentenceHardcore()}
                            </p>
                            <p className="tarkov-text">
                                {findSentenceStandard()}
                                {checkLockedStandard()}
                            </p>
                            <p className="tarkov-text-random">
                                {findSentenceRandom()}
                            </p>
                            <p className="tarkov-text-defi">
                                {findSentenceDifficile()}
                                {checkLockedDifficile()}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
    return null;
});
  
export default Sentences;