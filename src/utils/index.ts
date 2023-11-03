/**
 * This functions calculates total price of a new order
 * @param {Array} products 
 * @returns {number} Total price
 */
export const totalPrice = (products: any) => {
    return products.reduce((sum: any, product: any) => sum + product.price, 0)
}