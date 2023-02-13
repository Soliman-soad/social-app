import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navber from './pages/CommonItem/Navber';

function App() {
  const route = createBrowserRouter([
{
  path:'/',
  element:<Navber/>
}
  ])

  return (
    <RouterProvider router={route}>
      <div>
      <Navber/>
    </div>
    </RouterProvider>
    
  );
}

export default App;
