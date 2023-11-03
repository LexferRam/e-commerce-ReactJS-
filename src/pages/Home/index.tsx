import { useState, useEffect } from "react"
import Card from "../../components/Card"
import { Layout } from "../../components/layout"
import ProductDetail from "../../components/ProductDetail"
import CheckoutSideMenu from "../../components/CheckoutSideMenu"

const Home = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map((item: any) => (
            <Card
              key={item.id}
              data={item}
            />
          ))
        }
      </div>
      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  )
}

export default Home