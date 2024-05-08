import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function NavTabs() {
	const currentPage = useLocation().pathname;

	return (
		<Tabs value={currentPage}>	
			<Tab label='About Me' to='/About' component={Link}/>
			<Tab label='Portfolio' to='/Portfolio' component={Link}/>
			<Tab label='Contact' to='/Contact' component={Link}/>
			<Tab label='Resume' to='/Resume' component={Link}/>
		</Tabs>
	);
};

export default NavTabs;