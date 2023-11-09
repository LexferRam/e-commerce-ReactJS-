
import { useRoutes, BrowserRouter } from "react-router-dom"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import Navbar from "../../components/Navbar"
import { ShoppingCartProvider } from "../../context"
import CheckoutSideMenu from "../../components/CheckoutSideMenu"
import './App.css'

const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:category', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {

  return (
    // <ShoppingCartProvider>
    //   <BrowserRouter>
    //     <AppRoutes />
    //     <Navbar />
    //     <CheckoutSideMenu />
    //   </BrowserRouter>
    // </ShoppingCartProvider>

    
    <div className="container-principal">

      <div className="container">
        <div className="caja1">sdfhgsdgfhsgdfjk</div>
        <div className="caja2">2</div>
        {/* <div className="caja3">3</div> */}
      </div>

      {/* <div className="container2">
        <div className="caja4">4</div>
        <div className="caja5">5</div>
        <div className="caja6">6</div>
      </div> */}

    </div>
  )
}

export default App