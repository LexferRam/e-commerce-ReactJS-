import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext({})

export const ShoppingCartProvider = ({ children }: any) => {

    // Shopping cart - quantity
    const [count, setCount] = useState(0)

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    })

    // Product Detail - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

    // Products
    const [items, setItems] = useState([])
    const [filteredItem, setFilteredItem] = useState([])

    // get products by title
    const [searchByTitle, setSearchByTitle] = useState('')

    // get products by Category
    const [searchByCategory, setSearchByCategory] = useState('')

    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items: any, searchByTitle: any) => {
        return items?.filter((item: any) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items: any, searchByCategory: any) => {
        return items?.filter((item: any) => item?.category?.name?.toLowerCase()?.includes(searchByCategory?.toLowerCase()))
    }

    const filterBy = (searchType: any, items: any, searchByTitle: any, searchByCategory: any) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter((item: any) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return items
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItem(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItem(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItem(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItem(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])

    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                isProductDetailOpen,
                openProductDetail,
                closeProductDetail,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order, 
                setOrder,
                items, 
                setItems,
                searchByTitle, 
                setSearchByTitle,
                filteredItem,
                searchByCategory, 
                setSearchByCategory
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}