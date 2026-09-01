import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { food_list } from '../../assets/assets'

const Cart = () => {
  const { cartItems, food_item, removeFromeCart, getTotalCartAmount } = useContext(StoreContext)
  return (
    <div className='cart'>
      <div className='cart-container'>
        <div className="cart-itme-Title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-item-Title cart-items-itme">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <button onClick={() => removeFromeCart(item._id)}>Remove</button>
              </div>
            );
          }
        }
        )}
      </div>
      <div className="cart-button">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-detailes'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-detailes'>
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className='cart-total-detailes'>
              <p>Total</p>
              <p>${getTotalCartAmount()+2}</p>
            </div>
            <hr />
          </div>
          <button className='cart-total-checkout'>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If You have a promo code, enter it here!</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Enter your promo code' />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
