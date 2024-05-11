//import resumeFile from '../src/assets/Rodriguez-Ortiz Anthony - Resume (April 2024).pdf';
import resumeFile from '../assets/Rodriguez-Ortiz Anthony - Resume (April 2024).pdf';

export default function Resume() {
  const styles = {
    resumeContainer: {
      margin: '20px'
    },
    resumeIntro: {
      fontSize: '1.4rem'
    },
    li: {
      fontSize: '1.4rem'
    }
  };

  return (
    <div className='resume-container' style={styles.resumeContainer}>
      <h1>Resume</h1>
      <div className='resume-intro' style={styles.resumeIntro}>
        <p>
          Professionally, I have experience in research data analysis as well as experience in program evaluation. 
          I have been employed in fields such as academia, public health, social services, and education. 
          A more detailed account of my experience, credentials, and relevant coursework can be found within my resume.
        </p>
        <a href={resumeFile} download>Download a copy of my resume! </a>

      </div>
      <section className='proficiencies-container'>
        <h2>Front-end Proficiencies</h2>
          <ul>
            <li style={styles.li}>HTML</li>
            <li style={styles.li}>CSS</li>
            <li style={styles.li}>JavaScript</li>
            <li style={styles.li}>jQuery</li>
            <li style={styles.li}>Responsive design</li>
            <li style={styles.li}>React</li>
            <li style={styles.li}>Bootstrap</li>
          </ul>

        <h2>Back-end Proficiencies</h2>
          <ul>
            <li style={styles.li}>APIs</li>
            <li style={styles.li}>Node</li>
            <li style={styles.li}>Express</li>
            <li style={styles.li}>PostgreSQL, Sequelize</li>
            <li style={styles.li}>MongoDB, Mongoose</li>
            <li style={styles.li}>REST</li>
            <li style={styles.li}>GraphQL</li>
          </ul> 
      </section>
    </div>
  );
}
