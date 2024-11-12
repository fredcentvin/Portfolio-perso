import moi from '../assets/images/moi.webp'

function ItemBio(){
	return(
		<div className='gridItem'style={styles.gridItem} >
			<img src= {moi} alt="profil de frédéric" style={styles.img}></img>
			<div className='GridBio'>
				<h2 className='BioTitle' style={styles.BioTitle} >À propos de moi</h2>
				<p style={styles.p} >
				Bonjour et bienvenue sur mon portfolio! Je m'appelle Frédéric Boniface et je suis intégrateur web junior.<br />
				Après plus de 20 années passées dans l'univers de la maintenance industrielle, j'ai envisagé une reconversion professionnelle.<br />
				Passionné de longues dates par l'informatique, je me suis naturellement tourné vers l'intégration web en réalisant un parcours de formation chez OpenClassrooms menant à l'obtention d'un diplôme de niveau V et son équivalence RNCP.<br />
				Durant ce parcours j'ai pu oeuvrer à la réalisation de divers projets utilisants différents langages tels que : HTML, CSS, SASS, JAVASCRIPT, JEST, REACT, REDUX et en intégrant la démarche SEO.<br /> En appliquant les principes de la méthode agile SCRUM, la gestion de versions est déposée sur Github pour favoriser la collaboration.
				</p>
			</div>
		</div>
	)
}
const styles={
	gridItem:{
		display:'flex',
		flexDirection:'row',
		marginLeft:'50px',
	
	},
	p:{
		fontSize:'18px',
		padding:'20px 200px 10px 30px',
		margin:'0 50px 30px 50px',
		color:'white'
	},
	img:{
		width:'200px',
		height:'200px',
		marginTop:'85px',
		marginBottom:'30px',
		borderRadius:'50%'
	},
	GridBio:{
		display:'flex',
	},
	BioTitle:{
		fontSize:'30px',
		color:'white',
		paddingLeft:'80px',
		marginBottom:'0'
	}
}
export default ItemBio