export default function About() {
  const styles = {
    aboutTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '20px'
    },
    headshot: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'
    }

  }

  return (
    <div className='about-text-container' style={styles.aboutTextContainer}>
    <img className = 'headshot' src='/assets/images/personal_photo_resized.jpg' style={styles.headshot} width='60%' height='60%'/>
      <h1>About Me</h1>
      <p>
         My name is Anthony Rodriguez-Ortiz, I am a Research Data Analyst Associate with the Northwestern University, Feinberg School of Medicine.
      </p>

      <p> 
        Primarily, I assist with our social and sexual network data research projects that utilize the internally developed Network Canvas software suite. 
        Two projects I would like to highlight include a social and sexual network data pilot examining HIV-1 in Ibadan, Nigeria. 
        The other project is a RADx-UP C3 studying examine COVID-19 behaviors and attitudes in the central United States. 
        I graduated from the University of Chicago in 2019, where I majored in Public Policy.
      </p>

      <p>
        Currently, I am a student in the Northwestern Coding Boot Camp offered by Northwestern University and edX. My anticipated completion is early June, 2024. 
        I am interested in utilizing my experience in data analysis and social network research to assist in the development of research software and data analytic tools in a full-stack developer role. 
      </p>
    </div>
  );
}
