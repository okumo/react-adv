import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components';
import '../styles/custom-styles.css';
const product = {
    id: "1",
    title: "Productito",
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ProductCard product={product} className='bg-dark'>
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title="Producto 1" className="text-white text-bold" />
                    <ProductCard.Buttons className='custom-bottoms' />
                </ProductCard>

                <ProductCard product={product} style={{ backgroundColor: '#70D1F8' }}>
                    <ProductImage />
                    <ProductTitle title="Producto 2" />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
