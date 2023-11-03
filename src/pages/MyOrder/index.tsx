import { useContext } from "react"
import OrderCard from "../../components/OrderCard"
import { Layout } from "../../components/layout"
import { ShoppingCartContext } from "../../context"
import { Link, useParams } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/20/solid"

const MyOrder = () => {

  const context = useContext(ShoppingCartContext) as any
  const currentPath = useParams()
  // window.location.pathname.split('/').slice(-1)[0];
  console.log(currentPath.id)

  return (
    <Layout>
      <div className="flex flex-col width-80">
        <div className="flex justify-center items-center w-80 relative mb-6">
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
          </Link>
          <h1>My Order</h1>
        </div>
        {
          context.order?.slice(-1)[0].products?.map((product: any) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder