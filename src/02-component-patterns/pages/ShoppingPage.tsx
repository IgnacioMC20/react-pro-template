import { ProductButtons, ProductCart, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products"
const product = products[0];
export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCart
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({reset, count, isMaxCountReached, increaseBy}) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle />
              <ProductButtons className="custom-buttons" />

              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {
                (!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>)
              }
              <span>{count}</span>
            </>
          )
        }
      </ProductCart>

    </div>
  )
}
