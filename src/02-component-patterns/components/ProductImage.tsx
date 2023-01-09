import { CSSProperties, useContext } from 'react';
import noImg from '../assets/no-image.jpg'
import { ProductContext } from './ProductCart';
import styles from '../styles/styles.module.css'


export const ProductImage = ({ img = '', className, style }: {img?: string; className?: string, style?: CSSProperties}) => {

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
        <img className={`${styles.productImg} ${className}`} style={style} src={imgToShow} alt='coffee mug' />
    )
}