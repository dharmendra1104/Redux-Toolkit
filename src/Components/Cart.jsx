import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Redux/Cartslice';


function Cart() {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart)
  console.log(cartitems)
  const handleremove = (id) => {
    dispatch(remove(id))
  }
  return (
    <div>
      <div>
        {
          cartitems.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="#" />
              <h5>{item.title}</h5>
              <h5>{item.price}</h5>
              <button onClick={() => handleremove(item.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
