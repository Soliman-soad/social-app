import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login';
import Home from './pages/Home/Home';

function App() {
  const route = createBrowserRouter([

{
  path:'/',
  element:<Home/>
},
{
  path:'/login',
  element: <Login/>
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
