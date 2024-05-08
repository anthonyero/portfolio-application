import path from 'path';
import Container from '@mui/material/Container';

export default function PortfolioItem (props) {
	{imagePath, deployedLink, repoLink, title} = props;

	return (
		<div>
			<Container>
				<img src={imagePath} />
				<Container>
					<p>{title}</p>
					<a href={deployedLink} />
					<a href={repoLink}/>
				</Container>
			</Container>
		</div>
	)
}