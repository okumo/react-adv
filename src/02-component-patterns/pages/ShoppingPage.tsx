import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { CustomShoppingCartHook } from '../hooks/useShoppingCart'
import { products } from '../data/products';


export const ShoppingPage = () => {
    const { onProductCountChange, shoppingCart } = CustomShoppingCartHook()
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {products.map((product, key) => (
                    <ProductCard product={product} style={{ backgroundColor: '#70D1F8' }} onChange={onProductCountChange} key={key} value={shoppingCart[product.id]?.count || 0}>
                        <ProductImage className='custom-image' />
                        <ProductTitle className='text-bold' />
                        <ProductButtons className='custom-bottoms' />
                    </ProductCard>
                ))}
            </div>
            <div className='shopping-cart' >

                {Object.entries(shoppingCart).map(([key, product]) => {
                    return <ProductCard product={product} style={{ backgroundColor: '#70D1F8', width: '100px' }} key={key} value={product.count} onChange={onProductCountChange}>
                        <ProductImage className='custom-image' />
                        <ProductButtons className='custom-bottoms' style={{ display: 'flex', justifyContent: 'center' }} />
                    </ProductCard>
                }

                )}
            </div>
            {/* <div className='shopping-cart'>
                <ProductCard product={product1} style={{ backgroundColor: '#70D1F8', width: '100px' }}>
                    <ProductImage className='custom-image' />
                    <ProductButtons className='custom-bottoms' style={{ display: 'flex', justifyContent: 'center' }} />
                </ProductCard>            </div> */}

            <code>
                {JSON.stringify(shoppingCart)}
            </code>
        </div>
    )
}
