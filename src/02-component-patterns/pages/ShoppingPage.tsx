import { useState } from 'react';
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';
const product1 = {
    id: "1",
    title: "Productito",
    img: './coffee-mug.png'
}
const product2 = {
    id: '2',
    title: 'Producto 2',
    img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2]

interface ProductInCart extends Product {
    count: number
}

export const ShoppingPage = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {products.map(product => (
                    <ProductCard product={product} style={{ backgroundColor: '#70D1F8' }}>
                        <ProductImage className='custom-image' />
                        <ProductTitle className='text-bold' />
                        <ProductButtons className='custom-bottoms' />
                    </ProductCard>
                ))}
            </div>

            <div className='shopping-cart'>
                <ProductCard product={product1} style={{ backgroundColor: '#70D1F8', width: '100px' }}>
                    <ProductImage className='custom-image' />
                    <ProductButtons className='custom-bottoms' />
                </ProductCard>            </div>
        </div>
    )
}
