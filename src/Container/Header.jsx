import React from "react";
import Logo from "../Components/Logo";
import Nav from "../Components/Nav"


function Header() {
    return(
    <div style={styles.div}>
        <Logo />
        <h1 style={styles.styletitle} >INTÉGRATEUR WEB</h1>
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
        alignItems:'center',
        background: 'lightgrey',
    },
    styletitle:{
        paddingLeft:'170px'
    }
}
    export default Header;