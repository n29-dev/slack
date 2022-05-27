import React from 'react';
import Login from './components/Login';

export default function PrivateRoute({component: Component, user}) {
  return (
    <React.Fragment>
        {(user.uid && Component) || (<Login/>)}
    </React.Fragment>
  )
}
