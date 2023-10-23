import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Home.jsx';
import AddProduct from './AddProduct';
import Login from './Login/Login';
import Register from './Login/Register';
import Apple from './Brands/Apple';
import Samsung from './Brands/Samsung';
import Sony from './Brands/Sony';
import Xiaomi from './Brands/Xiaomi';
import Realme from './Brands/Realme';
import Asus from './Brands/Asus';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/brand')
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/apple',
        element: <Apple></Apple>,
        loader: () => fetch('http://localhost:5000/apple')
      },
      {
        path: '/samsung',
        element: <Samsung></Samsung>,
        loader: () => fetch('http://localhost:5000/samsung')
      },
      {
        path: '/sony',
        element: <Sony></Sony>,
        loader: () => fetch('http://localhost:5000/sony')
      },
      {
        path: '/xiaomi',
        element: <Xiaomi></Xiaomi>,
        loader: () => fetch('http://localhost:5000/xiaomi')
      },
      {
        path: '/realme',
        element: <Realme></Realme>,
        loader: () => fetch('http://localhost:5000/realme')
      },
      {
        path: '/asus',
        element: <Asus></Asus>,
        loader: () => fetch('http://localhost:5000/asus')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
