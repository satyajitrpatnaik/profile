import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Blogs, Contact, Error, Experience, Home, Interests, TechStack } from './../../components/';

const Routes = () => {
  return (
    <Switch>
      <Route path='/profile/' component={Home} exact/>
      <Route path='/profile/tech-stack' component={TechStack}/>
      <Route path='/profile/experience' component={Experience}/>
      <Route path='/profile/blogs' component={Blogs}/>
      <Route path='/profile/interests' component={Interests}/>
      <Route path='/profile/contact' component={Contact}/>
      <Route component={Error} />
    </Switch>
  );
};

export default Routes;
