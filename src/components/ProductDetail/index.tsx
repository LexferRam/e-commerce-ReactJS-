import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { ShoppingCartContext } from '../../context'

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext) as any

    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)] flex-col fixed right-0 top-68 bg-white border border-black rounded-lg`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div
                    onClick={() => context.closeProductDetail()}
                >
                    <XMarkIcon className='h-6 w-6 text-black' />
                </div>
            </div>
            <figure className='px-6'>
                <img
                    src={context.productToShow.images[0]}
                    alt={context.productToShow.title}
                    className="w-full h-full rounded-lg"
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-md mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-2xl'>{context.productToShow.title}</span>
                <span className='font-light text-md'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail