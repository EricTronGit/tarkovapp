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
import SentencesSVC from '../../services/sentencesSVC.js'

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

    let sentencesArrayBeginning = sentences.debut;
    let sentencesArrayMiddle = sentences.middle;
    let sentencesArrayDifficile = sentences.difficile
    let sentencesArrayStandardArmures = sentences.standardArmures;
    let sentencesArrayStandardCasque = sentences.standardCasque;

    let arrayWeapons = armes.armes;
    let arrayMaps = maps.maps;

    let sentencesArrayHardcoreDouanes = hardcore.douanes;
    let sentencesArrayHardcoreBois = hardcore.bois;
    let sentencesArrayHardcoreEchangeur = hardcore.echangeur;
    let sentencesArrayHardcoreLittoral = hardcore.littoral;
    let sentencesArrayHardcoreLabs = hardcore.labs;
    let sentencesArrayHardcoreUsine = hardcore.usine;
    let sentencesArrayHardcoreBaseMilitaire = hardcore.basemilitaire;

    let clickSimple = 0;
    let clickStandard = 0;
    let clickDifficile = 0;
    let clickHardcore = 0;

    let [sentenceSimpleNow, setSentenceSimpleNow] = useState([]);
    let [sentenceStandardNow, setSentenceStandardNow] = useState([]);
    let [sentenceNowDifficile, setSentenceNowDifficile] = useState([]);
    let [sentenceNowHardcore, setSentenceNowHardcore] = useState([]);

    let [lockedSimple, setLockedSimple] = useState(false);
    let [lockedStandard, setLockedStandard] = useState(false);
    let [lockedDifficile, setLockedDifficile] = useState(false);
    let [lockedHardcore, setLockedHardcore] = useState(false);
    
    useEffect(() => initialize(),[]);

    const initialize = () => {      
        setSentenceSimpleNow();
    }  

    const changeBackground = (mapNow) => {
        const monImage = new Image();        
        monImage.src = backgroundSVC.changeBackground(mapNow);
        monImage.onload = function(){
            document.body.style.backgroundImage = "url("+monImage.src+")";
        }      
    }

    const createSentence = () => {
        mapNow = arrayMaps[Math.floor(Math.random() * arrayMaps.length)].nom;
        changeBackground(mapNow);
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
        clickSimple = clickSimple + 1;
        if(!lockedSimple){
            setSentenceSimpleNow(SentencesSVC.createSentenceSimpleNow(sentencesArrayBeginning, mapNow, sentencesArrayMiddle, arrayWeapons));
        }
    }

    const sentenceStandard = () => {
        sentenceSimple();
        clickStandard = clickStandard + 1;
        if(!lockedStandard){            
            setSentenceStandardNow(SentencesSVC.createSentenceStandardNow(sentencesArrayStandardArmures,sentencesArrayStandardCasque));
        }
    }

    const sentenceDifficile = () => {
        sentenceStandard();
        clickDifficile = clickDifficile + 1;
        if(!lockedDifficile){
            setSentenceNowDifficile(SentencesSVC.createSentenceDifficileNow(sentencesArrayDifficile));
        }
    }

    const sentenceHardcore = () => {
        sentenceDifficile();   
        let arrayMapsHardcore;
        clickHardcore = clickHardcore + 1;
        if(!lockedSimple){
            switch(mapNow){
                case "Douanes":                     
                    arrayMapsHardcore = sentencesArrayHardcoreDouanes;                  
                    break;
                case "Bois": 
                    arrayMapsHardcore = sentencesArrayHardcoreBois; 
                    break;
                case "Labs":   
                    arrayMapsHardcore = sentencesArrayHardcoreLabs;              
                    break;
                case "Base militaire":   
                    arrayMapsHardcore = sentencesArrayHardcoreBaseMilitaire;                 
                    break;
                case "Littoral": 
                    arrayMapsHardcore = sentencesArrayHardcoreLittoral;                       
                    break;
                case "Usine": 
                    arrayMapsHardcore = sentencesArrayHardcoreUsine;                       
                    break;
                case "Echangeur": 
                    arrayMapsHardcore = sentencesArrayHardcoreEchangeur;                        
                    break;
                default:
                    setSentenceNowHardcore("");
                    break;
            }
            setSentenceNowHardcore(SentencesSVC.createSentenceHardcoreNow(arrayMapsHardcore));                           
        }        
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
