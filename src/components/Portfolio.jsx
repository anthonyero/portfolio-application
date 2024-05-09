import Grid from '@mui/material/Grid';
import PortfolioItem from './PortfolioItem.jsx';
import portfolioData from '../assets/portfolio-info.json'; 
import path from 'path'


export default function ResponsiveGrid() {
  return (
    <>
      <Grid container justifyContent='space-evenly' alignItems='stretch'>
        {portfolioData.map((project, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <PortfolioItem imagePath={project.imagePath} deployedLink={project.deployedLink} repoLink={project.repoLink} title={project.title}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
}