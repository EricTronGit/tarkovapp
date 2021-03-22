import LabsWallpaper from '../asset/wallpaperLabs.png';
import WoodsWallpaper from '../asset/wallpaperwoods.png';
import InterchangeWallpaper from '../asset/wallpaperInterchange.png';
import CustomsWallpaper from '../asset/wallpaperCustoms.png';
import ShorelineWallpaper from '../asset/wallpaperShoreline.png';
import FactoryWallpaper from '../asset/wallpaperFactory.png';
import ReserveWallpaper from '../asset/wallpaperReserve.png';

class backgroundSVC {    

    static changeBackground = (mapNow) => {    
        switch (mapNow) {
            case "Bois":                
                return WoodsWallpaper;         
            case "Echangeur":               
                return InterchangeWallpaper;    
            case "Labs":
                return LabsWallpaper;     
            case "Base militaire":
                return ReserveWallpaper;   
            case "Douanes":
                return CustomsWallpaper;
            case "Littoral":
                return ShorelineWallpaper;
            case "Usine":
                return FactoryWallpaper;      
            default:
                console.log("ERREUR");
        }   
    }
    
}


export default backgroundSVC;