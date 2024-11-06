import moi from '../assets/images/moi.webp'

function Itembio(){
	return(
		<div className='gridItem'style={styles.gridItem} >
			<img src= {moi} alt="profil de frédéric" style={styles.img}></img>
		<p style={styles.p} >
		Apres plus de 20 années passées dans l'univers de la maintenance industrielle, j'ai envisagé une reconversion professionnelle. 
		Passionné de longues dates par l'informatique, je me suis tourné vers l'intégration web en réalisant un parcours de formation chez OpenClassrooms menant à l'obtention d'un niveau V et à l'obtention d'un diplome d'équivalence RNCP.
		Durant ce parcours j'ai pu oeuvrer à la réalisation de divers projets utilisants différents langages tels que : HTML, CSS, SASS, JAVASCRIPT, REACT, REDUX.
		</p>
		</div>
	)

}
const styles={
	gridItem:{
		display:'flex',
		flexDirection:'row',
		marginLeft:'50px',
		marginBottom:'30px'
	},
	p:{
		fontSize:'16px',
		padding:'10px 150px 10px 30px',
		margin:'0 50px'
	},
	img:{
		width:'180px',
		height:'180px'
	}
}
export default Itembio