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
		img: {
			width: '810px', 
		 	height: '455px;',
		 	opacity: isHover ? '40%': '100%'
		}
	}

	return (
		<div>
			<Container>
				<img src={imagePath} style={styles.img}
				onMouseEnter={handleMouseEnter}
            	onMouseLeave={handleMouseLeave}/>
				<Container>
					<p>{title}</p>
					<a href={deployedLink}>Deployed</a>
					<a href={repoLink}>GitHub</a>
				</Container>
			</Container>
		</div>
	)
}