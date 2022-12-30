import { ProductCart } from "../components"


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
        <ProductCart product={product}>
          <ProductCart.Image />
          <ProductCart.Title />
          <ProductCart.Buttons />
        </ProductCart>

        {/* <ProductCart product={product}>
          <ProductImage />
          <ProductTitle title='' /> `
          <ProductButtons counter={0} increaseBy={function (value: number): void{
            throw new Error('error')
          }} />
        </ProductCart> */}

      </div>
    </div>
  )
}