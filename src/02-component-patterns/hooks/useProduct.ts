import { useEffect, useState } from 'react'
import { OnChangeArgs, Product } from '../interfaces/products'
interface useProductsArgs {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
}
export const useProduct = ( {onChange, product, value = 0}: useProductsArgs ) => {

    const [counter, setCounter] = useState(value)


    const increaseBy = (value: number) => {

        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);

        onChange && onChange({count: newValue, product});
    }
    useEffect(() => {
      setCounter(value)
    }, [value])
    

    const reset = () => {
      setCounter(0);
    }

    return {
        counter,
        increaseBy,
        reset
    }
}
