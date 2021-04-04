class SentencesSVC {

    static createSentenceSimpleNow = (sentencesArrayBeginning, mapNow,sentencesArrayMiddle,arrayWeapons) => {  
        return sentencesArrayBeginning[Math.floor(Math.random() * sentencesArrayBeginning.length)].phrase +
        mapNow +
        sentencesArrayMiddle[Math.floor(Math.random() * sentencesArrayMiddle.length)].phrase +
        arrayWeapons[Math.floor(Math.random() * arrayWeapons.length)].nom;
    }

    static createSentenceStandardNow = (sentencesArrayStandardArmures, sentencesArrayStandardCasque) => {
        return sentencesArrayStandardArmures[Math.floor(Math.random() * sentencesArrayStandardArmures.length)].phrase +
        sentencesArrayStandardCasque[Math.floor(Math.random() *  sentencesArrayStandardCasque.length)].phrase
       
    }

    static createSentenceDifficileNow = (sentencesArrayDifficile) => {
        return sentencesArrayDifficile[Math.floor(Math.random() * sentencesArrayDifficile.length)].phrase;
    }

    static createSentenceHardcoreNow = (arrayMapsHardcore) =>{
        return arrayMapsHardcore[Math.floor(Math.random() * arrayMapsHardcore.length)].phrase
    }

}

export default SentencesSVC;