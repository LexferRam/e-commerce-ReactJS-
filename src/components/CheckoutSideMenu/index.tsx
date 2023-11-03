import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { ShoppingCartContext } from '../../context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import { Link } from 'react-router-dom'

const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext) as any

    const handleDelete = (id: any) => {
        const filteredProducts = context.cartProducts.filter((product: any) => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle('')
    }

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)] flex-col fixed right-0 top-68 bg-white border border-black rounded-lg`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div
                    onClick={() => context.closeCheckoutSideMenu()}
                >
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer' />
                </div>
            </div>

            <div className="px-6 overflow-y-scroll scrollbar-hide flex-1">
                {
                    context.cartProducts.map((product: any) => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>

            <div className="px-6 mb-6">
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>

                <Link to="/my-orders/last">
                <button
                    className='w-full bg-black text-white py-3 rounded-lg'
                    onClick={() => handleCheckout()}
                >
                    Checkout
                </button>
                </Link>

            </div>
        </aside>
    )
}

export default CheckoutSideMenu