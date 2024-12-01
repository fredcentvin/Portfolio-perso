import logoredux from '../../assets/logos/logoredux.png'
import logoJavascript from '../../assets/logos/logoJavascript.png'
import logohtml from '../../assets/logos/logohtml.png'
import logocss from '../../assets/logos/logocss.png'
import logoreact from '../../assets/logos/logoreact.png'
import logosass from '../../assets/logos/logosass.png'
import logogithub from '../../assets/logos/logogithub.png'
import './bannerLogos.css'

function Bannerlogos(){
    return(
        <div className='gridBannerLogos'> 
            <img className='fixImgLogos' src= {logohtml} alt="logo html"></img>
            <img className='fixImgLogos' src= {logocss} alt="logo css" ></img>
            <img className='fixImgLogos' src= {logosass} alt="logo sass"></img>
            <img className='fixImgLogos' src= {logoJavascript} alt="logo javascript"></img>
            <img className='fixImgLogos' src= {logoreact} alt="logo react"></img>
            <img className='fixImgLogos' src= {logoredux} alt="logo redux"></img>
            <img className='fixImgLogos' src= {logogithub} alt="logo github"></img>
        </div>
    )
}

export default Bannerlogos