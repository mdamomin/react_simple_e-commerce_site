import React, { useEffect, useState } from 'react';
import { loadData } from '../../utilities/fakedb';

const UseCart = (products) => {
  const [pd, setPd] = useState([]);
  useEffect(() => {
    const localData = loadData();
    let setproduct = [];
    for (const key in localData) {
      const wantedProduct = products.find(
        (product) => product.id === parseInt(key)
      );
      if (wantedProduct) {
        const quantity = localData[key];
        wantedProduct.quantity = quantity;
        setproduct.push(wantedProduct);
        setPd(setproduct);
      }
    }
  }, [products]);

  return [pd, setPd];
};

export default UseCart;
