import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Blogs, Contact, Error, Home, Interests, TechStack } from './../../components/';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/tech-stack' component={TechStack}/>
      <Route path='/blogs' component={Blogs}/>
      <Route path='/interests' component={Interests}/>
      <Route path='/contact' component={Contact}/>
      <Route component={Error} />
    </Switch>
  );
};

export default Routes;
