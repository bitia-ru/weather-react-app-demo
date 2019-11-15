import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './v1/screens/Index/Index.jsx';


const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Index} />
  </Switch>
);

export default AppRouter;
