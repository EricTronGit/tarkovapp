import LabsWallpaper from '../asset/wallpaperLabs.jpg';
import WoodsWallpaper from '../asset/wallpaperwoods.jpg';
import InterchangeWallpaper from '../asset/wallpaperInterchange.jpg';
import CustomsWallpaper from '../asset/wallpaperCustoms.jpg';
import ShorelineWallpaper from '../asset/wallpaperShoreline.jpg';
import FactoryWallpaper from '../asset/wallpaperFactory.jpg';
import ReserveWallpaper from '../asset/wallpaperReserve.jpg';
import DefaultWallpaper from '../asset/tarkovBackground.jpg'

class backgroundSVC {    

    static changeBackground = (mapNow) => {  
        if(mapNow === "Bois" || mapNow === "Woods"){
            return WoodsWallpaper;      
        } 
        if(mapNow === "Echangeur" || mapNow === "Interchange"){
            return InterchangeWallpaper;         
        }  
        if(mapNow === "Labs"){
            return LabsWallpaper;          
        }  
        if(mapNow === "Base militaire" || mapNow === "Reserve"){
            return ReserveWallpaper;      
        }  
        if(mapNow === "Douanes" || mapNow === "Customs"){
            return CustomsWallpaper;      
        }  
        if(mapNow === "Littoral" || mapNow === "Shoreline"){
            return ShorelineWallpaper;      
        }  
        if(mapNow === "Usine" || mapNow === "Factory"){
            return FactoryWallpaper;      
        }  
        return DefaultWallpaper;

    }
    
}


export default backgroundSVC;