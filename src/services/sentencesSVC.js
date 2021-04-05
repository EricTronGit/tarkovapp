import mapsEnglish from '../jsonfiles/mapsEnglish.json'
import mapsFrench from '../jsonfiles/maps.json'
import sentencesEnglish from '../jsonfiles/sentencesEnglish.json';
import sentencesFrench from '../jsonfiles/sentences.json';
import armesFrench from "../jsonfiles/armes.json"
import armesEnglish from "../jsonfiles/armesEnglish.json"



class SentencesSVC {    

    static createMapNow = (appLangage) => {
        if(appLangage === "FR"){
            return mapsFrench.maps[Math.floor(Math.random() * mapsFrench.maps.length)].nom;
        }
        else  {
            return mapsEnglish.maps[Math.floor(Math.random() * mapsEnglish.maps.length)].nom;
        }
    }

    static createSentenceSimpleNow = (mapNow, appLangage) => {  
        if(appLangage === "FR"){
            return sentencesFrench.debut[Math.floor(Math.random() * sentencesFrench.debut.length)].phrase +
            mapNow +
            sentencesFrench.middle[Math.floor(Math.random() * sentencesFrench.middle.length)].phrase +
            armesFrench.armes[Math.floor(Math.random() * armesFrench.armes.length)].nom;
        } else {
            return sentencesEnglish.debut[Math.floor(Math.random() * sentencesEnglish.debut.length)].phrase +
            mapNow +
            sentencesEnglish.middle[Math.floor(Math.random() * sentencesEnglish.middle.length)].phrase +
            armesEnglish.armes[Math.floor(Math.random() * armesEnglish.armes.length)].nom;
        }

    }

    static createSentenceStandardNow = (appLangage) => {
        if(appLangage === "FR"){
            return sentencesFrench.standardArmures[Math.floor(Math.random() * sentencesFrench.standardArmures.length)].phrase +
            sentencesFrench.standardCasque[Math.floor(Math.random() *  sentencesFrench.standardCasque.length)].phrase
        } else {
            return sentencesEnglish.standardArmures[Math.floor(Math.random() * sentencesEnglish.standardArmures.length)].phrase +
            sentencesEnglish.standardCasque[Math.floor(Math.random() *  sentencesEnglish.standardCasque.length)].phrase
        }
       
    }

    static createSentenceDifficileNow = (appLangage) => {
        if(appLangage === "FR"){
            return sentencesFrench.difficile[Math.floor(Math.random() * sentencesFrench.difficile.length)].phrase;
        } else {
            return sentencesEnglish.difficile[Math.floor(Math.random() * sentencesEnglish.difficile.length)].phrase;
        }
        
    }

    static createSentenceHardcoreNow = (arrayMapsHardcore) =>{
        return arrayMapsHardcore[Math.floor(Math.random() * arrayMapsHardcore.length)].phrase
    }

}

export default SentencesSVC;