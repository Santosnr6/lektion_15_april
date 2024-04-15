import './cartPage.css';

function CartPage() {
  return (
    <div className="cart-page">
        
        {
          cart.map(book => {
            return <p>{ book.title + " : " + book.quantity }</p>
          })
        }
    </div>
  )
}

export default CartPage
