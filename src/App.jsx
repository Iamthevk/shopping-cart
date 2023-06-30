// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Products from './components/Products';
import useFetch from './utils/hooks/useFetch';

function App() {
useFetch();
  return (
    <div>
      <Navbar/>
      <h1 className='text-red-500 '>Shopping Cart App</h1>
      <Products/>
    </div>
  )
}

export default App
