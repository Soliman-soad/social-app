import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navber from './pages/CommonItem/Navber';
import Home from './pages/Home/Home';

function App() {
  const route = createBrowserRouter([

{
  path:'/',
  element:<Home/>
}
  ])

  return (
    <RouterProvider router={route}>
      <>

      <Home/>
    </>
    </RouterProvider>
    
  );
}

export default App;
