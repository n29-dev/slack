import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthProvider from './components/Contexts/AuthContext';
import Main from './components/Main';
import PrivateRoute from './components/Login/PrivateRoute'


function App() {
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<PrivateRoute component={<Main/>}/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>  
  );
}

export default App;
