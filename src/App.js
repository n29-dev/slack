import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthProvider, {useAuth} from './components/AuthContext';
import Home from './components/Home';
import PrivateRoute from './PrivateRoute'


function App() {
  
  const {user} = useAuth()

  return (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute component={<Home/>} user={user}/>}/>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  
  );
}

export default App;
