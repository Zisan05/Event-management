import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componenets/Root/Root';
import Home from './componenets/Home/Home';
import Register from './componenets/Register/Register';
import Login from './componenets/Login/Login';
import AuthProvider from './componenets/Provider/AuthProvider';
import CardsDetails from './componenets/CardsDetails/CardsDetails';
import PrivetRoute from './componenets/PrivetRoute/PrivetRoute';
import Errorpage from './componenets/ErrorPage/Errorpage';
import Gallery from './componenets/Gallery/Gallery';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
{
    path:"/",
    element:<Home></Home>,
    loader: ()=> fetch('/event.json')
    
},

{
    path: '/details/:id',
    element:<PrivetRoute><CardsDetails></CardsDetails></PrivetRoute>,
    loader: ()=> fetch('/event.json')
},

{
    path:"/register",
    element:<Register></Register>
},
{
    path:"/login",
    element:<Login></Login>
},
{
    path:"/gallery",
    element:<PrivetRoute><Gallery></Gallery></PrivetRoute>,
    loader: ()=> fetch('/gallery.json')

},

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
