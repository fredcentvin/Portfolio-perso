
import BackHome from '../Components/backHome/backHome'
function Error() {
    return (
       <main>
          <section style={styles.section} >
             <h1 style={styles.h1} >404</h1>
             <p style={styles.p} >Oups...  Page not found</p>
             <BackHome />
          </section>
       </main>
    )
  }
  const styles={
   section:{
      backgroundColor:'#ddd',
      padding:'15% 0'
   },
   h1:{
      color:'black', 
      fontSize:'30px', 
      textAlign:'center'
   },
   p:{
      color:'black', 
      fontSize:'22px', 
      textAlign:'center'
   }
  }
  
 export default Error