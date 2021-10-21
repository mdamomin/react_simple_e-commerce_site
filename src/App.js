import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import OrderReview from './Components/OrderReview/OrderReview';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className='text-center'>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/shop'>
            <Shop></Shop>
          </Route>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route exact path='/shop/:productID'>
            <ProductDetail></ProductDetail>
          </Route>
          <Route exact path='/review'>
            <OrderReview></OrderReview>
          </Route>
          <Route exact path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route path='/placeOrder'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
