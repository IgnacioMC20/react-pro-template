import { ProductButtons, ProductCart, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products"
const product = products[0];
export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

        <ProductCart product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle />
          <ProductButtons className="custom-buttons" />
        </ProductCart>

    </div>
  )
}
