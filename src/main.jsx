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
import AuthProvider from './Login/Provider/AuthProvider';
import PriverRoute from './PrivetRoute/PriverRoute';
import Error from './components/Error/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/brand')
      },
      {
        path: '/addProduct',
        element: <PriverRoute><AddProduct></AddProduct></PriverRoute>
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
        loader: () => fetch('https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/apple')
      },
      {
        path: '/samsung',
        element: <Samsung></Samsung>,
        loader: () => fetch('https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/samsung')
      },
      {
        path: '/sony',
        element: <Sony></Sony>,
        loader: () => fetch('https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/sony')
      },
      {
        path: '/xiaomi',
        element: <Xiaomi></Xiaomi>,
        loader: () => fetch('https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/xiaomi')
      },
      {
        path: '/realme',
        element: <Realme></Realme>,
        loader: () => fetch('https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/realme')
      },
      {
        path: '/asus',
        element: <Asus></Asus>,
        loader: () => fetch('https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/asus')
      },
      {
        path: '/detailsApple/:id',
        element: <PriverRoute><DetailsApple></DetailsApple></PriverRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/apple/${params.id}`)
      },
      {
        path: '/detailsSamsung/:id',
        element: <PriverRoute><DetailsSamsung></DetailsSamsung></PriverRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/samsung/${params.id}`)
      },
      {
        path: '/detailsAsus/:id',
        element: <PriverRoute><DetailsAsus></DetailsAsus></PriverRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/asus/${params.id}`)
      },
      {
        path: '/detailsRealme/:id',
        element: <PriverRoute><DetailsRealme></DetailsRealme></PriverRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/realme/${params.id}`)
      },
      {
        path: '/detailsSony/:id',
        element: <PriverRoute><DetailsSony></DetailsSony></PriverRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/sony/${params.id}`)
      },
      {
        path: '/detailsXiaomi/:id',
        element:<PriverRoute><DetailsXiaomi></DetailsXiaomi></PriverRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/xiaomi/${params.id}`)
      },
      {
        path: '/updateApple/:id',
        element: <PriverRoute><UpdateApple></UpdateApple></PriverRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/apple/${params.id}`)
      },
      {
        path: '/updateSamsung/:id',
        element: <PriverRoute><UpdateSamsung></UpdateSamsung></PriverRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/samsung/${params.id}`)
      },
      {
        path: '/updateAsus/:id',
        element: <PriverRoute><UpdateAsus></UpdateAsus></PriverRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/asus/${params.id}`)
      },
      {
        path: '/updateSony/:id',
        element: <PriverRoute><UpdateSony></UpdateSony></PriverRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/sony/${params.id}`)
      },
      {
        path: '/updateRealme/:id',
        element: <PriverRoute><UpdateRealme></UpdateRealme></PriverRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/realme/${params.id}`)
      },
      {
        path: '/updateXiaomi/:id',
        element: <PriverRoute><UpdateXiaomi></UpdateXiaomi></PriverRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/xiaomi/${params.id}`)
      },
      {
        path: '/mycart',
        element: <PriverRoute><Mycart></Mycart></PriverRoute>,
        loader: () => fetch('https://brand-shop-server-rk38sh018-faysalhosen.vercel.app/cart')
      }
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
