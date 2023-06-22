import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Index from '../pages/Index'
import GoogleLoginButton from './GoogleLoginButton'


const Main = () => {
  return (
    <div>
     
        <GoogleLoginButton />

        <Routes>
          <Route path="/" element={Index}></Route>
          <Route path="/login" element={Login}></Route>
        </Routes>
    
    </div>
  );
}

export default Main