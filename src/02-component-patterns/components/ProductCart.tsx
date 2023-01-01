import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import { CSSProperties, ReactElement, createContext } from 'react';
import { Product, ProductContextProps } from '../interfaces/products';

import '../styles/custom-styles.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties
}

export const ProductCart = ({ children, product, className, style }: Props) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
                {/* <ProductImage img={product.img} />
                <ProductTitle title={product.title} />
                <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            </div>
        </Provider>
    )
}

// ProductCart.Title = ProductTitle
// ProductCart.Image = ProductImage
// ProductCart.Buttons = ProductButtons

