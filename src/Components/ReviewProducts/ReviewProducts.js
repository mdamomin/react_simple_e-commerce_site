import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ReviewProducts = (props) => {
  const { title, price, quantity, id } = props.ReviewProduct;
  const { handleRemove } = props;
  return (
    <Card className='text-center'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <h4>Price: {price}</h4>
        <h5>Quantity: {quantity}</h5>
        <Button
          variant='danger'
          onClick={() => {
            handleRemove(id);
          }}
        >
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ReviewProducts;
