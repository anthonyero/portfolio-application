import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// Utilize value in tab to highlight the selected tab

function NavTabs() {
	const currentPage = useLocation().pathname;

	return (
		<Tabs value={currentPage} variant="scrollable" scrollButtons allowScrollButtonsMobile>	
			<Tab label='About Me' value='/about' to='/about' component={Link}/>
			<Tab label='Portfolio' value='/portfolio' to='/portfolio' component={Link}/>
			<Tab label='Contact' value='/contact' to='/contact' component={Link}/>
			<Tab label='Resume' value='/resume' to='/resume' component={Link}/>
		</Tabs>
	);
};

export default NavTabs;