import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'react-lazy-load-image-component/src/effects/blur.css';


import PrivateRoute from './privateRoute/PrivateRoute';
import { lazy, Suspense } from 'react';
import Spinner from './pages/Items/Spinner';

const Login = lazy(()=> import('./pages/Authentication/Login'));
const Register = lazy(()=> import('./pages/Authentication/Register'));
const Home = lazy(()=>import('./pages/Home/Home'));
const Profile = lazy(()=>import('./pages/Profile/Profile'));
const EditProfile = lazy(()=>import('./pages/Profile/EditProfile'));
const PostPage = lazy(()=>import('./pages/PostPage/PostPage'));
const Friends = lazy(()=>import('./pages/Friends/Friends'));
const PageError = lazy(()=>import('./pages/PageError/PageError'));
const About = lazy(()=>import('./pages/about/About'));
const Message = lazy(()=>import('./pages/Message/Message'));

function App() {
  const route = createBrowserRouter([
{
  path:'/',
  element: <Suspense fallback={<Spinner/>} ><PrivateRoute><Home/></PrivateRoute></Suspense>,
  errorElement:<Suspense fallback={<Spinner/>} ><PageError/></Suspense>
},
{
  path:'/login',
  element:<Suspense fallback={<Spinner/>} ><Login/></Suspense> 
},
{
  path:'/register',
  element: <Suspense fallback={<Spinner/>} ><Register/></Suspense>
},
{
  path:'/profile/:id',
  element:<PrivateRoute><Suspense fallback={<Spinner/>} ><Profile/></Suspense></PrivateRoute>
},
{
  path:'/editProfile',
  element:<PrivateRoute><Suspense fallback={<Spinner/>} ><EditProfile/></Suspense></PrivateRoute>
},
{
  path:'/post/:id',
  element:<PrivateRoute><Suspense fallback={<Spinner/>} ><PostPage/></Suspense></PrivateRoute>
},
{
  path:'/friends',
  element:<PrivateRoute><Suspense fallback={<Spinner/>} ><Friends/></Suspense></PrivateRoute>
},
{
  path:"/about",
  element:<PrivateRoute><Suspense fallback={<Spinner/>} ><About/></Suspense></PrivateRoute>
},
{
  path:'/message',
  element:<Suspense fallback={<Spinner/>} ><Message/></Suspense>
}

  ])

  return (
    <div className='max-w-screen-2xl mx-auto'>
    <RouterProvider router={route}>
      
    </RouterProvider>
    </div>
    
  );
}

export default App;
