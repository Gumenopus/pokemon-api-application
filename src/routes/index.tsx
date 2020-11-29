import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../pages/home/Layout';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Layout} />
    </Switch>
  );
}
