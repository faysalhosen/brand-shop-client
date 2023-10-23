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
import DetailsApple from './ProductDetails/DetailsApple';
import DetailsSamsung from './ProductDetails/DetailsSamsung';
import DetailsAsus from './ProductDetails/DetailsAsus';
import DetailsRealme from './ProductDetails/DetailsRealme';
import DetailsSony from './ProductDetails/DetailsSony';
import DetailsXiaomi from './ProductDetails/DetailsXiaomi';
import UpdateApple from './UpdateProducts/UpdateApple';
import UpdateSamsung from './UpdateProducts/UpdateSamsung';
import UpdateAsus from './UpdateProducts/UpdateAsus';
import UpdateSony from './UpdateProducts/UpdateSony';
import UpdateRealme from './UpdateProducts/UpdateRealme';
import UpdateXiaomi from './UpdateProducts/UpdateXiaomi';
import Mycart from './Mycart';
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
      },
      {
        path: '/detailsApple/:id',
        element: <DetailsApple></DetailsApple>,
        loader: ({params}) => fetch(`http://localhost:5000/apple/${params.id}`)
      },
      {
        path: '/detailsSamsung/:id',
        element: <DetailsSamsung></DetailsSamsung>,
        loader: ({params}) => fetch(`http://localhost:5000/samsung/${params.id}`)
      },
      {
        path: '/detailsAsus/:id',
        element: <DetailsAsus></DetailsAsus>,
        loader: ({params}) => fetch(`http://localhost:5000/asus/${params.id}`)
      },
      {
        path: '/detailsRealme/:id',
        element: <DetailsRealme></DetailsRealme>,
        loader: ({params}) => fetch(`http://localhost:5000/realme/${params.id}`)
      },
      {
        path: '/detailsSony/:id',
        element: <DetailsSony></DetailsSony>,
        loader: ({params}) => fetch(`http://localhost:5000/sony/${params.id}`)
      },
      {
        path: '/detailsXiaomi/:id',
        element: <DetailsXiaomi></DetailsXiaomi>,
        loader: ({params}) => fetch(`http://localhost:5000/xiaomi/${params.id}`)
      },
      {
        path: '/updateApple/:id',
        element: <UpdateApple></UpdateApple>,
        loader: ({params}) => fetch(`http://localhost:5000/apple/${params.id}`)
      },
      {
        path: '/updateSamsung/:id',
        element: <UpdateSamsung></UpdateSamsung>,
        loader: ({params}) => fetch(`http://localhost:5000/samsung/${params.id}`)
      },
      {
        path: '/updateAsus/:id',
        element: <UpdateAsus></UpdateAsus>,
        loader: ({params}) => fetch(`http://localhost:5000/asus/${params.id}`)
      },
      {
        path: '/updateSony/:id',
        element: <UpdateSony></UpdateSony>,
        loader: ({params}) => fetch(`http://localhost:5000/sony/${params.id}`)
      },
      {
        path: '/updateRealme/:id',
        element: <UpdateRealme></UpdateRealme>,
        loader: ({params}) => fetch(`http://localhost:5000/realme/${params.id}`)
      },
      {
        path: '/updateXiaomi/:id',
        element: <UpdateXiaomi></UpdateXiaomi>,
        loader: ({params}) => fetch(`http://localhost:5000/xiaomi/${params.id}`)
      },
      {
        path: '/mycart',
        element: <Mycart></Mycart>,
        loader: () => fetch('http://localhost:5000/cart')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
