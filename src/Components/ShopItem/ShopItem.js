import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory} from 'react-router';
import './ShopItem.css';

const ShopItem = (props) => {
    // console.log(props.product)
    const {product,handleAddToCart} = props;
    const {id,title,price,image,category,rating} = product;
    const history = useHistory();
    
    const handleReadMore = () =>{
        history.push(`/shop/${id}`)
    }
    return (
        <Card className='p-4 m-2'>
          <h6>Product ID: {id}</h6>
          <h5>Item Name: {title}</h5>
          <div className='d-flex justify-content-around'>
          <Card.Img className='card_img' variant="top" src={image} />
          <div>
          <h5>Price: {price}</h5>
          <h5>Category: {category}</h5>
          <Rating
            emptySymbol="far fa-star star-color"
            fullSymbol="fas fa-star star-color"
            initialRating={rating.rate}
            readonly
            /> <>({rating.count})</>
          <p className='pointer' onClick={handleReadMore}>Read More..</p><br /><br />
          <Button onClick={()=>handleAddToCart(product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</Button>
          </div>
          </div>
        </Card> 
    );
};

export default ShopItem;