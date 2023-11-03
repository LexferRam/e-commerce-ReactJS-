import { useContext } from "react"
import OrdersCard from "../../components/OrdersCard"
import { Layout } from "../../components/layout"
import { ShoppingCartContext } from "../../context"
import { Link } from "react-router-dom"

const MyOrders = () => {
  const context = useContext(ShoppingCartContext) as any

  return (
    <Layout>
      <div className="flex justify-center items-center w-80 relative mb-6">
        <h1 className="font-medium text-xl">My Orderss</h1>
      </div>

      {
        context.order.map((order: any, index: any) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrders