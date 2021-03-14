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
import LabsWallpaper from '../../asset/tarkovClick.jpg';
import WoodsWallpaper from '../../asset/wallpaperwoods.jpg';
import InterchangeWallpaper from '../../asset/wallpaperInterchange.png';
import CustomsWallpaper from '../../asset/wallpaperCustoms.jpg';
import ShorelineWallpaper from '../../asset/wallpaperShoreline.jpg';
import FactoryWallpaper from '../../asset/wallpaperFactory.png';
import ReserveWallpaper from '../../asset/wallpaperReserve.jpg';



function Sentences(props) {
    const HARDCORE = "Hardcore";
    const STANDARD = "Standard";
    const SIMPLE = "Simple";

    let [sentencesArrayBeginning, setSentencesArrayBeginning] = useState([]);
    let [sentencesArrayMiddle, setSentencesArrayMiddle] = useState([]);
    let [sentencesArrayStandardArmures, setSentencesArrayStandardArmures] = useState([]);
    let [sentencesArrayStandardCasque, setSentencesArrayStandardCasque] = useState([]);
    let [sentencesArrayHardcore, setSentencesArrayHardcore] = useState([]);

    let [arrayWeapons, setArrayWeapons] = useState([]);
    let [arrayMaps, setArrayMaps] = useState([]);

    let [clickSimple, setClickSimple] = useState(0);
    let [clickStandard, setClickStandard] = useState(0);
    let [clickHardcore, setClickHardcore] = useState(0);

    let [sentenceSimpleNow, setSentenceSimpleNow] = useState([]);
    let [sentenceStandardNow, setSentenceStandardNow] = useState([]);
    let [sentenceNowHardcore, setSentenceNowHardcore] = useState([]);

    let [lockedSimple, setLockedSimple] = useState(false);
    let [lockedStandard, setLockedStandard] = useState(false);
    let [lockedHardcore, setLockedHardcore] = useState(false);

  
    
    useEffect(() => initialize(),[]);

    const initialize = () => {
        setSentencesArrayBeginning(sentences.debut);
        setSentencesArrayMiddle(sentences.middle);
        setSentencesArrayStandardArmures(sentences.standardArmures);
        setSentencesArrayStandardCasque(sentences.standardCasque);
        setSentencesArrayHardcore(sentences.hardcore);
        setArrayWeapons(armes.armes);
        setArrayMaps(maps.maps);
        setSentenceSimpleNow("Clique sur \"LANCER\" pour génerer un challenge");
    }

    const rollSentence = () => {
        createSentence();
    }

    const changeBackground = (map) => {
        switch (map) {
            case "Bois":
                document.body.style.backgroundImage = "url("+WoodsWallpaper+")";
                break;
            case "Echangeur":
                document.body.style.backgroundImage = "url("+InterchangeWallpaper+")";
                break;
            case "Labs":
                document.body.style.backgroundImage = "url("+LabsWallpaper+")";
                break;
            case "Base militaire":
                document.body.style.backgroundImage = "url("+ReserveWallpaper+")";
                break;
            case "Douanes":
                document.body.style.backgroundImage = "url("+CustomsWallpaper+")";
                break;
            case "Littoral":
                document.body.style.backgroundImage = "url("+ShorelineWallpaper+")";
                break;
            case "Usine":
                document.body.style.backgroundImage = "url("+FactoryWallpaper+")";
                break;                
            default:
                console.log("ERREUR");

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
        sentenceSimple()
        setClickStandard(clickStandard + 1);
        if(!lockedStandard){            
            setSentenceStandardNow(createSentenceStandardNow());
        }
    }

    const sentenceHardcore = () => {
        sentenceStandard();
        setClickHardcore(clickHardcore + 1);
        if(!lockedHardcore){
            setSentenceNowHardcore(createSentenceHardcoreNow());
        }
    }

    const createSentenceSimpleNow = () => {
        let mapNow = arrayMaps[Math.floor(Math.random() * arrayMaps.length)].nom;
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

    const createSentenceHardcoreNow = () => {
        return sentencesArrayHardcore[Math.floor(Math.random() * sentencesArrayHardcore.length)].phrase;
    }

    const findSentenceSimple = () => {        
        return sentenceSimpleNow;        
    }

    const findSentenceStandard = () => {
        if(clickStandard !== 0 && (props.difficulty === STANDARD || props.difficulty === HARDCORE)){
            return sentenceStandardNow;
        }
    }

    const findSentenceHardcore = () => {
        if(clickHardcore !== 0 && props.difficulty === HARDCORE){
            return sentenceNowHardcore;
        }
    }

    const changeLock = (e) => {
        switch (e.target.className) {
            case "cadenas-simple":               
                setLockedSimple(!lockedSimple);                 
                break;
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
    
    const checkLockedSimple = () => {     
        if(!lockedSimple && clickSimple === 0) return;   
        return <img className="cadenas-simple" src={lockedSimple && clickSimple > 0 ? cadenasClose : cadenasOpen} alt="Logo" onClick={changeLock.bind(this)}/>
    }
   
    const checkLockedStandard = () => {     
        if(!lockedStandard && clickStandard === 0) return;   
        if((props.difficulty === STANDARD || props.difficulty === HARDCORE) && clickStandard > 0 ){
            return <img className="cadenas-standard" src={lockedStandard && clickStandard > 0 ? cadenasClose : cadenasOpen} alt="Logo" onClick={changeLock.bind(this)}/>
        }
    }

    const checkLockedHardcore = () => {     
        if(!lockedHardcore && clickHardcore === 0) return;   
        if(props.difficulty === HARDCORE && clickHardcore > 0 ){
            return <img className="cadenas-hardcore" src={lockedHardcore && clickHardcore > 0 ? cadenasClose : cadenasOpen} alt="Logo" onClick={changeLock.bind(this)}/>
        }
    }

    return (
        <Col>
            <div className="Sentence">
                <p className="tarkov-text">
                    {findSentenceSimple()} 
                    {checkLockedSimple()}
                </p>
                <p className="tarkov-text">
                    {findSentenceStandard()} 
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