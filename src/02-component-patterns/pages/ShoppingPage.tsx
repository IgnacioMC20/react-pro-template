import { ProductButtons, ProductCart, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products"
import { useShoppingCart } from "../hooks/useShoppingCart"

export const ShoppingPage = () => {

  const { shoppingCart, onProductCartChange} = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {/* <ProductCart product={product} >
          <ProductCart.Image className="custom-image" />
          <ProductCart.Title />
          <ProductCart.Buttons />
        </ProductCart> */
        /* <ProductCart
          product={product}
          style={{
            backgroundColor: '#70D1F8'
          }}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCart> */}

        {
          products.map(p => (
            <ProductCart key={p.id} product={p} className="bg-dark text-white" value={shoppingCart[p.id]?.count || 0} onChange={(e) => onProductCartChange(e)}>
              <ProductImage className="custom-image" />
              <ProductTitle />
              <ProductButtons className="custom-buttons" />
            </ProductCart>
          ))
        }

        <div className="shopping-cart">
          {
            Object.entries(shoppingCart).map(([key, product]) => (
              <ProductCart key={key} product={product} value={product.count} className="bg-dark text-white" style={{ width: '100px' }} onChange={(e) => onProductCartChange(e)}>
                <ProductImage className="custom-image" />
                <ProductButtons className="custom-buttons" />
              </ProductCart>
            ))
          }
        </div>
      </div>
      <div>
        <code>
          {JSON.stringify(shoppingCart, null, 5)}
        </code>
      </div>
    </div>
  )
}
