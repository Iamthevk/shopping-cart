// import { useState } from 'react'
import './App.css'
import {Navbar, ProductsPage}  from './components';
// import {ProductCard} from './components';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <h1 className='text-red-500 '>Shopping Cart App</h1> */}
      <ProductsPage/>
      {/* <ProductCard/> */}
    </div>
  )
}

export default App
