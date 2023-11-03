import { useContext } from "react"
import OrderCard from "../../components/OrderCard"
import { Layout } from "../../components/layout"
import { ShoppingCartContext } from "../../context"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/20/solid"

const MyOrder = () => {

  const context = useContext(ShoppingCartContext) as any
  const currentPath = window.location.pathname
  let index: any = currentPath?.substring(currentPath?.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1

  return (
    <Layout>
      <div className="flex flex-col width-80 mb-6">
        <div className="flex justify-center items-center w-80 relative mb-6">
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
          </Link>
          <h1 className="font-medium text-xl">My Order</h1>
        </div>
        {
          context.order?.[index]?.products.map((product: any) => (
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