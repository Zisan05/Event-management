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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
{
    path:"/",
    element:<Home></Home>,
    loader: ()=> fetch('/event.json')
},

{
    path: '/details/:id',
    element:<CardsDetails></CardsDetails>,
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
