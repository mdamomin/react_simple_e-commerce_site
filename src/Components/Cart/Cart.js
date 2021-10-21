import React from 'react';
import './Card.css';

const Cart = (props) => {
  const items = props.pd;
  const { children } = props;
  let sum = 0;
  let totalQuantity = 0;
  for (const item of items) {
    if (!item.quantity) {
      sum = sum + item.price;
      totalQuantity = totalQuantity + 1;
    } else {
      sum = sum + item.price * item.quantity;
      totalQuantity = totalQuantity + item.quantity;
    }
  }
  const shipping = sum > 0 ? 15 : 0;
  const tax = sum * 0.1;
  const grandTotal = sum + shipping + tax;

  return (
    <div className='order_container mt-4'>
      <div className='card text-dark bg-light mb-3 maxWidth'>
        <div className='card-header'>
          <h2>Order Summary</h2>
        </div>
        <div className='card-body'>
          <h4 className='card-title'>Items Ordered:{totalQuantity}</h4>
          <h5>Sum: {sum.toFixed(2)}</h5>
          <h5>Shipping cost: {shipping}</h5>
          <h5>Tax: {tax.toFixed(2)}</h5>
        </div>
        <div className='card-footer text-muted'>
          <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
        </div>
      </div>
      <div className='ms-5 ps-4'>{children}</div>
    </div>
  );
};

export default Cart;
