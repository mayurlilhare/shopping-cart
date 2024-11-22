import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/productList'
import { useEffect, useState } from 'react'
import ResourceNotFound from './pages/ResourceNotFound'
import ProductDetails from './pages/productDetails'
import CartList from './pages/cartList'

function App() {
  const [myAuth, setmyauth] = useState('')
  useEffect(()=>{
    console.log('refresh!!!');
  },[myAuth]);



  return (
      <Routes>
        <Route path="" element={<ProductList />} />
        <Route exact path='/product-list' element={<ProductList />} />
        <Route exact path='/product-Details/:id' element={<ProductDetails />} />
        <Route exact path='/cart' element={<CartList />} />
        <Route exact path='*' element={<ResourceNotFound />} />
      </Routes>
  )
}

export default App;
