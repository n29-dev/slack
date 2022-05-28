import React from 'react';
import Login from './Login';
import { useAuth } from '../Contexts/AuthContext';
import Loader from './Loader';

export default function PrivateRoute({component: Component}) {

  const {user, loading} = useAuth();
  
  return (
    <React.Fragment>
        {loading ? <Loader/> : (user?.uid && Component) || (<Login/>) }
    </React.Fragment>
  )
}
