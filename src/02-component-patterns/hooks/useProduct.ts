import { useEffect, useState } from 'react'
import { InitialValues, OnChangeArgs, Product } from '../interfaces/products'
interface useProductsArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}
export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductsArgs) => {

  // const isMounted = useRef(false);
  // useEffect(() => {
  //   isMounted.current = true;
  // }, [])

  const [counter, setCounter] = useState<number>(initialValues?.count || value)

  useEffect(() => {
    setCounter(initialValues?.count || value);
  }, [value, initialValues])

  const increaseBy = (value: number) => {

    const newValue = Math.max(counter + value, 0)
    if (initialValues?.maxCount && newValue >= initialValues?.maxCount) {
      setCounter(initialValues.maxCount);
    } else {
      setCounter(newValue);
    }

    onChange && onChange({ count: newValue, product });
  }

  const reset = () => {
    setCounter(initialValues?.count || value);
  }

  return {
    counter,
    increaseBy,
    reset,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount
  }
}
