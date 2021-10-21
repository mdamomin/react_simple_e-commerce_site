const addToDb = (id) => {
  let cart = localStorage.getItem('shopping-cart');
  if (cart === null) {
    let localData = {};
    localData[id] = 1;
    const localDataStringify = JSON.stringify(localData);
    localStorage.setItem('shopping-cart', localDataStringify);
  } else {
    let localDataParse = JSON.parse(localStorage.getItem('shopping-cart'));
    if (localDataParse[id]) {
      localDataParse[id] += 1;
      const localDataStringify = JSON.stringify(localDataParse);
      localStorage.setItem('shopping-cart', localDataStringify);
    } else {
      localDataParse[id] = 1;
      const localDataStringify = JSON.stringify(localDataParse);
      localStorage.setItem('shopping-cart', localDataStringify);
    }
  }
};

const loadData = () => {
  const data = JSON.parse(localStorage.getItem('shopping-cart'));
  return data;
};

const removeData = (id) => {
  const exist = loadData();
  if (exist) {
    delete exist[id];
    const existStringify = JSON.stringify(exist);
    localStorage.setItem('shopping-cart', existStringify);
  }
};

export { addToDb, loadData, removeData };
