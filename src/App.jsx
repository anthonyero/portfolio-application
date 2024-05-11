import { Outlet } from 'react-router-dom';
// import Nav from './components/NavTabs';
import Footer from './components/Footer'
import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
import Header from './components/Header'

function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
