
export interface ProductInCart extends Product {
    count: number
  }

export interface Product {
    id: string;
    title: string;
    img?: string;
}

// interface ProductbuttonsProps {
//     counter: number;
//     increaseBy: (value: number) => void
// }

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface OnChangeArgs {
    product: Product;
    count: number;
}