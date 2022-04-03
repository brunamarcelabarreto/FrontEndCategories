import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Category from '../components/Category/Category';
import Product from '../components/Product/Product';
import EditCategory from '../components/EditCategory/EditCategory';
import EditProduct from '../components/EditProduct/EditProduct';

const Routes = () => (
  <BrowserRouter>
   <Switch>
      <Route exact path="/" component={Category} />
      <Route path="/product" component={Product} />
      <Route path="/editcategory/:id" component={EditCategory} />
      <Route path="/editproduct/:id" component={EditProduct} />
   </Switch>
  </BrowserRouter>
)


export default Routes;
