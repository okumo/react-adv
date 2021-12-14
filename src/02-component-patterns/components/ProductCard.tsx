import styles from '../styles/styles.module.css';
import { CustomProductHook } from '../hooks/CustomProductHook';
import { createContext, CSSProperties, ReactElement, } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export interface Props {
    product: Product,
    children: ReactElement | ReactElement[],
    className?: string;
    style?: CSSProperties
}

export const ProductCard = ({ product, children, className, style }: Props) => {
    const { increaseBy, counter } = CustomProductHook(0);
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>

    )
}