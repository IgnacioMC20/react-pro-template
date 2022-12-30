import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import { createContext } from 'react';
import { ProductContextProps, Props } from '../interfaces/products';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCart = ({ children, product }: Props) => {

    const { counter, increaseBy } = useProduct();

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
                <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            </div>
        </Provider>
    )
}

// ProductCart.Title = ProductTitle
// ProductCart.Image = ProductImage
// ProductCart.Buttons = ProductButtons

