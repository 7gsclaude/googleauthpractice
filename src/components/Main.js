import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Index from '../pages/Index'
import GoogleAuth from './GoogleAuth'


const Main = () => {
  return (
    <div>
     
        <GoogleAuth />

        <Routes>
          <Route path="/" element={Index}></Route>
          <Route path="/login" element={Login}></Route>
        </Routes>
    
    </div>
  );
}

export default Main