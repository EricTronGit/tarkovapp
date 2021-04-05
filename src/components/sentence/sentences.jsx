import './sentences.css';
import hardcoreFrench from "../../jsonfiles/hardcore.json"
import hardcoreEnglish from "../../jsonfiles/hardcoreEnglish.json"

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

    let [appLangage, setAppLangage] = useState(props.langage); 

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
    
    useEffect(() => {
        setAppLangage(props.langageSelect()); 
    });

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
        mapNow = SentencesSVC.createMapNow(appLangage);
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
        setClickSimple(clickSimple + 1);
        if(!lockedSimple){
            setSentenceSimpleNow(SentencesSVC.createSentenceSimpleNow(mapNow, appLangage));
        }
    }

    const sentenceStandard = () => {
        sentenceSimple();
        setClickStandard(clickStandard + 1);
        if(!lockedStandard){            
            setSentenceStandardNow(SentencesSVC.createSentenceStandardNow(appLangage));
        }
    }

    const sentenceDifficile = () => {
        sentenceStandard();
        setClickDifficile(clickDifficile + 1);
        if(!lockedDifficile){
            setSentenceNowDifficile(SentencesSVC.createSentenceDifficileNow(appLangage));
        }
    }

    const sentenceHardcore = () => {
        sentenceDifficile();   
        let arrayMapsHardcore;
        let arrayHardcore; 
        setClickHardcore(clickHardcore + 1);  
        if(appLangage === "FR"){
            arrayHardcore = hardcoreFrench;
        } else {
            arrayHardcore = hardcoreEnglish;
        }
        if(!lockedSimple){
            if(mapNow === "Bois" || mapNow === "Woods"){
                arrayMapsHardcore = arrayHardcore.bois;   
            } 
            if(mapNow === "Echangeur" || mapNow === "Interchange"){
                arrayMapsHardcore = arrayHardcore.echangeur                
            }  
            if(mapNow === "Labs"){
                arrayMapsHardcore = arrayHardcore.labs;       
            }  
            if(mapNow === "Base militaire" || mapNow === "Reserve"){
                arrayMapsHardcore = arrayHardcore.basemilitaire;         
            }  
            if(mapNow === "Douanes" || mapNow === "Customs"){
                arrayMapsHardcore = arrayHardcore.douanes;          
            }  
            if(mapNow === "Littoral" || mapNow === "Shoreline"){
                arrayMapsHardcore = arrayHardcore.littoral;   
            }  
            if(mapNow === "Usine" || mapNow === "Factory"){
                arrayMapsHardcore = arrayHardcore.usine;       
            }  
            
            setSentenceNowHardcore(SentencesSVC.createSentenceHardcoreNow(arrayMapsHardcore, appLangage));                           
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
