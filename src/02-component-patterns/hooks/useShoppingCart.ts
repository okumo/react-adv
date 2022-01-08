import { useState } from "react"
import { Product, ProductInCart } from '../interfaces/interfaces'

export const CustomShoppingCartHook = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})
    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart(oldShoppingCart => {
            if (count === 0) {
                delete oldShoppingCart[product.id];
                return { ...oldShoppingCart }
            }
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }
        })
    }
    return {
        shoppingCart,
        onProductCountChange,
    }
}