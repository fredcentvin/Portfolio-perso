import React from "react";
import Logo from "../Components/Logo";
import Nav from "../Components/Nav"


function Header() {
    return(
    <div style={styles.div}>
        <Logo />
        <Nav />
    </div> 
    )
}
const styles={
    div:{
        display:'flex', 
        height:'120px', 
        flexDirection:'row',
        justifyContent:'space-between', 
        padding:'5px 15px',
        alignItems:'center'
    }
}
    export default Header;