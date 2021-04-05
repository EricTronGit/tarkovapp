import LabsWallpaper from '../asset/wallpaperLabs.jpg';
import WoodsWallpaper from '../asset/wallpaperwoods.jpg';
import InterchangeWallpaper from '../asset/wallpaperInterchange.jpg';
import CustomsWallpaper from '../asset/wallpaperCustoms.jpg';
import ShorelineWallpaper from '../asset/wallpaperShoreline.jpg';
import FactoryWallpaper from '../asset/wallpaperFactory.jpg';
import ReserveWallpaper from '../asset/wallpaperReserve.jpg';

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