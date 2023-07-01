// import { useState } from 'react'
import './App.css'
// import {  Navbar, ProductsPage } from './components';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '*',
    Component: Root
  }
  

])

function Root() {
  return(
    <Routes>
      <Route path='/' element={<Layout/>}/>
    </Routes>
  )
}

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
