import React, { useContext } from 'react'
import './Place_order.css';
import { StoreContext } from '../../Context/StoreContext';

const Place_order = () => {

  const {getTotalCartAmount}=useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fileds">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="text" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fileds">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fileds">
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
        <div className='cart-total'>
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>{2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>{getTotalCartAmount()+2}</b>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
      </div>
      </div>
    </form>
  )
}

export default Place_order