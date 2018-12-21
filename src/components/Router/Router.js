import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Fun, About, Work } from '../';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={About} />
      <Route path='/fun' component={Fun} />
      <Route path='/work' component={Work} />
      {/* <Route path='/store/:storeId' component={App} />
      <Route component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;
