import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToDb, loadData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ShopItem from '../ShopItem/ShopItem';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [pd, setPd] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => (setProducts(data), setSearchProduct(data)));
  }, []);

  const handleAddToCart = (e) => {
    const existPd = pd.find((searchPd) => searchPd.id === e.id);
    if (existPd) {
      const restPds = pd.filter((restPd) => restPd.id !== e.id);
      existPd.quantity += 1;
      setPd([...restPds, existPd]);
    } else {
      e.quantity = 1;
      setPd([...pd, e]);
    }

    addToDb(e.id);
  };
  useEffect(() => {
    const localdata = loadData();
    let setproduct = [];
    for (const key in localdata) {
      const wantedProduct = products.find(
        (product) => product.id === parseInt(key)
      );
      if (wantedProduct) {
        const quantity = localdata[key];
        wantedProduct.quantity = quantity;
        setproduct.push(wantedProduct);
        setPd(setproduct);
      }
    }
  }, [products]);
  const handleSearch = (e) => {
    const searchText = e.target.value;
    const searchFilter = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchProduct(searchFilter);
  };
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='input-group my-3 w-50 '>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='inputGroup-sizing-default'>
              Search Product
            </span>
          </div>
          <input
            type='text'
            onChange={handleSearch}
            className='form-control'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
          />
        </div>
      </div>

      <div className='shop_container'>
        <div className='product_container'>
          <h2>Products:{searchProduct.length}</h2>
          {searchProduct.map((product) => (
            <ShopItem
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></ShopItem>
          ))}
        </div>
        <Cart pd={pd}>
          <Link to='/review'>
            <Button variant='danger'>Review Order</Button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
