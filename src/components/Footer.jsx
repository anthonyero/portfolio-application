export default function Footer() {
  const styles = {
    footer: {
      display: 'flex',
      justifyContener: 'center',
      alignItems: 'center'
    },
    github: {
      width: '50%',
      height: '50%',
      margin: '20px'
    },
    linkedin: {
      width: '60%',
      height: '60%',
      margin: '20px'
    },
    pubmed: {
      width: '60%',
      height: '60%',
      margin: '20px'
    }
  };

  return (
    <div className='footer' style={styles.footer}>
          <a href='https://www.github.com/anthonyero'><img className = 'github' src='/assets/images/github-mark.png' style={styles.github}></img></a>
          <a href='https://www.linkedin.com/in/anthony-rodriguez-ortiz'><img className = 'linkedin' src='/assets/images/LinkedIn-Blue-21@2x.png' style={styles.linkedin}></img></a>
          <a href='https://pubmed.ncbi.nlm.nih.gov/?term=Rodriguez-Ortiz+AE&cauthor_id=35961851'><img className = 'pubmed' src='/assets/images/256px-US-NLM-PubMed-Logo.svg.png' style={styles.pubmed}></img></a>
    </div>
  );
}