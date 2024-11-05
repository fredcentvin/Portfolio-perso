import logo1 from '../assets/images/logos/logo1.webp';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Footer(){
    return(
        <div style={styles.div}>
            <FontAwesomeIcon icon="fa-copyright" />
            <p>Copyright 2024 Frédéric Boniface</p>
   
             <img src={logo1} alt="logo agence" style={styles.img}></img>  
        </div>
        )
}
const styles={
    div:{
        textAlign:'center', 
        fontSize:'16px', 
        color:'#2c3e50', 
        borderTop:"2px solid #ccc"
    },
    img:{
        width:'60px',
        height:'auto'
    }
}
export default Footer;