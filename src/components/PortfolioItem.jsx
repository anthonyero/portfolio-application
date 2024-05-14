import Container from '@mui/material/Container';
import {useState} from 'react'

export default function PortfolioItem ({imagePath, deployedLink, repoLink, title}) {
	
	const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };

    const handleMouseLeave = () => {
       setIsHover(false);
    };

    const styles = {
    	container: {
    		position: 'relative',
    		objectFit: 'scale-down',
    		margin: '20px'
    	},
		img: {
			width: '810px', 
		 	height: '455px;',
		 	opacity: isHover ? '40%': '100%'
		},
		itemDescriptives: {
			position: 'absolute',
			top: '30%',
			bottom: '50%',
			left: '50%', 
			display: isHover ? '' : 'none',
			fontSize: '1.8rem', 
			fontWeight: 'bold'
		},
		linkContainer: {
			display: 'flex',
			flexDirection: 'column',
			margin: '20px'
		}
	}

	return (
		<div>
			<Container className= 'portfolio-item' maxWidth='sm' style={styles.container}>
				<img src={imagePath} style={styles.img}
				onMouseEnter={handleMouseEnter}
            	onMouseLeave={handleMouseLeave}/>
				<Container className='item-descriptives' style={styles.itemDescriptives}>
					<p>{title}</p>
					<div className='link-container' style={styles.linkContainer}>
						<a href={deployedLink}>Deployed</a>
						<a href={repoLink}>GitHub</a>
					</div>
				</Container>
			</Container>
		</div>
	)
}