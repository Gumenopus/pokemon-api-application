import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeLayout from '../pages/home/Layout';
import DetailsLayout from '../pages/details/Layout';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomeLayout} />
      <Route path="/details" exact component={DetailsLayout} />
    </Switch>
  );
};

export default Routes;
