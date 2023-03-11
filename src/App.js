import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/Profile/EditProfile'
import PrivateRoute from './privateRoute/PrivateRoute';
import PostPage from './pages/PostPage/PostPage';
import Friends from './pages/Friends/Friends';
import PageError from './pages/PageError/PageError';

function App() {
  const route = createBrowserRouter([
{
  path:'/',
  element:<PrivateRoute><Home/></PrivateRoute>,
  errorElement:<PageError/>
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
  path:'/profile/:id',
  element:<PrivateRoute><Profile/></PrivateRoute>
},
{
  path:'/editProfile',
  element:<PrivateRoute><EditProfile/></PrivateRoute>
},
{
  path:'/post/:id',
  element:<PrivateRoute><PostPage/></PrivateRoute>
},
{
  path:'/friends',
  element:<PrivateRoute><Friends/></PrivateRoute>
}
  ])

  return (
    <RouterProvider router={route}>
      <>
    </>
    </RouterProvider>
    
  );
}

export default App;
