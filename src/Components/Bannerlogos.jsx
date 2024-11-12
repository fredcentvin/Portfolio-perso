import logoredux from '../assets/logos/logoredux.png'
import logoJavascript from '../assets/logos/logoJavascript.png'
import logohtml from '../assets/logos/logohtml.png'
import logocss from '../assets/logos/logocss.png'
import logoreact from '../assets/logos/logoreact.png'
import logosass from '../assets/logos/logosass.png'
import logogithub from '../assets/logos/logogithub.png'

function Bannerlogos(){
    return(
        <div className='gridBannerLogos' style={styles.gridBannerLogos}> 
            <img src= {logohtml} alt="logo html" style={styles.img}></img>
            <img src= {logocss} alt="logo css" style={styles.img}></img>
            <img src= {logosass} alt="logo sass" style={styles.img}></img>
            <img src= {logoJavascript} alt="logo javascript" style={styles.img}></img>
            <img src= {logoreact} alt="logo react" style={styles.img}></img>
            <img src= {logoredux} alt="logo redux" style={styles.img}></img>
            <img src= {logogithub} alt="logo github" style={styles.img}></img>
        </div>
    )
}
const styles={
    gridBannerLogos:{
        display:'flex',
        flexDirection:'row',
        gap:'80px',
        marginBottom:'30px'
    },
    img:{
        
    }

}
export default Bannerlogos