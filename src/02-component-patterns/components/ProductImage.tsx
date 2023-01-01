import { useContext } from 'react';
import noImg from '../assets/no-image.jpg'
import { ProductContext } from './ProductCart';
import styles from '../styles/styles.module.css'


export const ProductImage = ({ img = '', className }: {img?: string; className?: string}) => {

    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if(img){
        imgToShow = img;
    }else if(product.img){
        imgToShow = product.img
    }else{
        imgToShow = noImg;
    }

    return (
        <img className={`${styles.productImg} ${className}`} src={imgToShow} alt='coffee mug' />
    )
}