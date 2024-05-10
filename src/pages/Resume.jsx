//import resumeFile from '../src/assets/Rodriguez-Ortiz Anthony - Resume (April 2024).pdf';
import resumeFile from '../assets/Rodriguez-Ortiz Anthony - Resume (April 2024).pdf';

export default function Resume() {
  const styles = {
    proficiencesContainer: {
      margin: '20px'
    }
  };

  return (
    <div>
      <h1>Resume</h1>
      <p>
        My 
        <a href={resumeFile} download>Download a copy of my resume! </a>
      </p>
      <section className='proficiencies-container' style={styles.proficiencesContainer}>
        <h2>Front-end Proficiencies</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>

        <h2>Back-end Proficiencies</h2>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>PostgreSQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul> 
      </section>
    </div>
  );
}
