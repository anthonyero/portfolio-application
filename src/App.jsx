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
          <p>@anthonyero</p>
        </Grid>
        <Grid item xs={8}>
          <div>
            <Nav />
          </div>
        </Grid>
      </Grid>
      <main >
        <Outlet />
      </main>
    </>
  );
};

export default App;
