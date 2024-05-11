import Nav from './NavTabs';

function Header () {
	const styles = {
		headerContainerHorizontal: {
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center'
		},
		headerContainerVertical: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center'

		},
		a: {
			fontSize: '1.4rem',
			margin: '20px'
		}
	}

	return (
		<header>
			<div className='header-container' style={styles.headerContainerVertical}>
				<a href='/' style={styles.a}>Anthony Rodriguez-Ortiz</a>
				<Nav />
			</div>
		</header>
	)
}

export default Header