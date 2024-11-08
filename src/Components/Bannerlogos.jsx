import logoredux from '../assets/logos/logoredux.png'
import logoJavascript from '../assets/logos/logoJavascript.png'
import logohtml from '../assets/logos/logohtml.png'
import logocss from '../assets/logos/logocss.png'
import logoreact from '../assets/logos/logoreact.png'
import logosass from '../assets/logos/logosass.png'

function Bannerlogos(){
    return(
        <div className='gridBannerLogos' style={styles.gridBannerLogos}> 
            <img src= {logohtml} alt="header projet" style={styles.img}></img>
            <img src= {logocss} alt="header projet" style={styles.img}></img>
            <img src= {logosass} alt="header projet" style={styles.img}></img>
            <img src= {logoJavascript} alt="header projet" style={styles.img}></img>
            <img src= {logoreact} alt="header projet" style={styles.img}></img>
            <img src= {logoredux} alt="header projet" style={styles.img}></img>
        </div>
    )
}
const styles={
    gridBannerLogos:{
        display:'flex',
        flexDirection:'row',
        gap:'30px'
    },
    img:{
        
    }

}
export default Bannerlogos