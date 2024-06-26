import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';

import About from './pages/About.jsx'
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/ContactForm.jsx';
import Resume from './pages/Resume.jsx';

// Create the router as well as the accessible routes and their respective component
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/about',
        element: <About />
      }, 
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/resume',
        element: <Resume />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);