import { ChangeEventHandler, useContext } from "react"
import Card from "../../components/Card"
import { Layout } from "../../components/layout"
import ProductDetail from "../../components/ProductDetail"
import CheckoutSideMenu from "../../components/CheckoutSideMenu"
import { ShoppingCartContext } from "../../context"

const Home = () => {

  const context = useContext(ShoppingCartContext) as any

  const renderView = () => {
    if (!context.filteredItem?.length) return <div>No data found</div>

    return (
      context.filteredItem?.map((item: any) => (
        <Card
          key={item.id}
          data={item}
        />
      ))
    )
  }
  
  return (
    <Layout>
      <div className="flex justify-center items-center w-80 relative mb-6">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>

      <input
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        type='text'
        placeholder="Search a product"
        onChange={(event): ChangeEventHandler<HTMLInputElement> => context.setSearchByTitle(event.target.value)}
      />

      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  )
}

export default Home