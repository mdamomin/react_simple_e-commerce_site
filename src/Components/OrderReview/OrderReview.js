import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { removeData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import UseCart from '../Hooks/UseCart';
import UseProducts from '../Hooks/UseProducts';
import ReviewProducts from '../ReviewProducts/ReviewProducts';

const OrderReview = () => {
  const [products] = UseProducts();
  const [pd, setPd] = UseCart(products);
  const history = useHistory();
  const handleRemove = (id) => {
    const remainingProducts = pd.filter(
      (remainingProduct) => remainingProduct.id !== parseInt(id)
    );
    setPd(remainingProducts);
    removeData(id);
  };

  const handlePlaceOrder = () => {
    history.push('/placeOrder');
    setPd([]);
    localStorage.clear();
  };
  return (
    <div className='shop_container'>
      <div className='product_container'>
        {pd.map((ReviewProduct) => (
          <ReviewProducts
            key={ReviewProduct.id}
            ReviewProduct={ReviewProduct}
            handleRemove={handleRemove}
          ></ReviewProducts>
        ))}
      </div>
      <Cart pd={pd}>
        <Button onClick={handlePlaceOrder} variant='danger'>
          Place Order
        </Button>
      </Cart>
    </div>
  );
};

export default OrderReview;
