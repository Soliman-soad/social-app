import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

function App() {
  const route = createBrowserRouter([

{
  path:'/',
  element:<Home/>
},
{
  path:'/login',
  element: <Login/>
},
{
  path:'/register',
  element: <Register/>
},
{
  path:'/profile',
  element:<Profile/>
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
