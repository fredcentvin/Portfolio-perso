import React from "react"

function Nav(){
 
    return(
        <div className="navContainer" style={styles.navContainer}>
           
                <p style={styles.pNav}>mon CV</p>
                <p style={styles.pNav}>CONTACT</p>
                <p style={styles.pNav}>mes réalisations</p>
          

        </div>
    )
}
const styles={
    navContainer:{
        display:'flex',
        flexDirection:'row',
        gap:'20px'
    },
    pNav:{
        fontSize:'14px'
    }
}
export default Nav