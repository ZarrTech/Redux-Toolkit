import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import { useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
import { openModal } from "../features/modal/modalSlice"
function CartContainer() {

    const { amount, total, cartItems } = useSelector((store) => store.cart)
    const dispatch = useDispatch()

    if (amount < 1) {
        return <section className="cart">
            <header> 
                <h2>your bag</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </header>
        </section>
    }

  return (
      <section className="cart">
          <header>
              <h2>your bag</h2>
              <div>
                  {cartItems.map((item) => {
                      return <CartItem key={item.id} {...item} dispatch={dispatch } />
                  })}
              </div>
          </header>
          <footer>
              <hr />
              <div className="cart-total">
                  <h4>total <span>${total.toFixed(2)}</span></h4>
              </div>
              <button className="btn clear-btn" onClick={()=>dispatch(openModal())} >clear cart</button>
          </footer>
   </section>
  )
}
export default CartContainer