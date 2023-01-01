import { useContext } from 'react';
import { ProductContext } from './ProductCart';
import styles from '../styles/styles.module.css'


export const ProductTitle = ({ title, className }: { title?: string; className?: string }) => {

    const { product } = useContext(ProductContext);
    
    return (
        <span className={`${styles.productDescription} ${className}`}>{title ? title : product.title}</span>
    )
}