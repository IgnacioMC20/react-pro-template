import { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCart';
import styles from '../styles/styles.module.css'


export const ProductButtons = ({ className }: { className?: string }) => {
    //Todo: maxCount
    const { counter, increaseBy, maxCount } = useContext(ProductContext);
    //Todo: isMaxReached = useCallback,[count, maxCount]
    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    )

    return (
        <div className={`${styles.buttonsContainer} ${className}`}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={() => increaseBy(1)}>+</button>
        </div>
    )
}