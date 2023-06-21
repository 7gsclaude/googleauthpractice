import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'


const Home = () => {
  return (
    <div>
      <h1>home</h1>

      <Routes>
        <Route path='/login' element={Login}></Route>
      </Routes>
    </div>
  );
}

export default Home