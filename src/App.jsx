import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

function App() {

  return (
    <>
      <CssBaseline />
      <Grid container spacing = {1}>
        <Grid item xs={4}>
          <Item>@anthonyero</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <Nav />
          </Item>
        </Grid>
      </Grid>
      <main >
        <Outlet />
      </main>
    </>
  );
};

export default App;
