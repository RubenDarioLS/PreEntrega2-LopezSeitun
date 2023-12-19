import { createContext, useState } from 'react'


export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {


    const [cart, setCart] = useState([])


    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalQuantity = () => cart.reduce((acumulador, itemActual) => acumulador + itemActual.quantity, 0);




    const addItem = (item, quantity) => {

        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.log('el producto ya se agrego')
        }


    }

    const removeItem = (itemId) => {

        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)

    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}