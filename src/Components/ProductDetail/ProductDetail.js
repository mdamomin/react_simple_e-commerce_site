import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const ProductDetail = () => {
    const {productID} = useParams();
    const[productDetail,setProductDetail] = useState({});
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productID}`)
        .then(res=>res.json())
        .then(data=>setProductDetail(data))
    },[]);
    const {title,price,image,category,description} = productDetail;
    console.log(productDetail)
    return (
        <Card className="text-center">
  <Card.Header>{category}</Card.Header>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <h4>Price: {price}</h4>
    <img width='200px' src={image} alt="" />
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary">Add to Cart</Button>
  </Card.Body>
</Card>
    );
};

export default ProductDetail;