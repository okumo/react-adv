import styles from '../styles/styles.module.css';
import { CustomProductHook } from '../hooks/CustomProductHook';
import { createContext, } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export const ProductCard = ({ product, children }: ProductCardProps) => {
    const { increaseBy, counter } = CustomProductHook(0);
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {children}
                {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />
            <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
            </div>
        </Provider>

    )
}

/* ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons */