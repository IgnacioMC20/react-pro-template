import { ProductButtons, ProductCart, ProductImage, ProductTitle } from "../components"


const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCart product={product} >
          <ProductCart.Image className="custom-image" />
          <ProductCart.Title />
          <ProductCart.Buttons />
        </ProductCart>

        <ProductCart product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle />
          <ProductButtons className="custom-buttons" />
        </ProductCart>

        <ProductCart
          product={product}
          style={{
            backgroundColor: '#70D1F8'
          }}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCart>

      </div>
    </div>
  )
}
