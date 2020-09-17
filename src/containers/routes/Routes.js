import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Blogs, Contact, Error, Experience, Home, Interests, TechStack } from './../../components/';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Home} exact/>
      <Redirect from='/profile' to='/'/>
      <Route path='/tech-stack' component={TechStack}/>
      <Route path='/experience' component={Experience}/>
      <Route path='/blogs' component={Blogs}/>
      <Route path='/interests' component={Interests}/>
      <Route path='/contact' component={Contact}/>
      <Route component={Error} />
    </Switch>
  );
};

export default Routes;
