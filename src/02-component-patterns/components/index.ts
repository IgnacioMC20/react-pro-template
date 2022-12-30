

import { ProductCart as ProductCartHOC } from './ProductCart';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export * from './ProductButtons';
export * from './ProductImage';
export * from './ProductTitle';

export const ProductCart = Object.assign(ProductCartHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})