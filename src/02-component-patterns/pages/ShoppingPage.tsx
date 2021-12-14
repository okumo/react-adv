import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components';

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
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title="Producto 1" />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title="Producto 2" />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
