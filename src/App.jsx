import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import ProductList from './pages/productList'
import { Fragment, useEffect, useState } from 'react'
import ResourceNotFound from './pages/ResourceNotFound'
import ProductDetails from './pages/productDetails'
import CartList from './pages/cartList'

function App() {
  const [myAuth, setmyauth] = useState('')
  useEffect(()=>{
    console.log('refresh!!!');
  },[myAuth]);

  const navigate = useNavigate()
  const currLocation = useLocation()


  return (
    <Fragment>
      {
        currLocation.pathname !== '/cart' ?
        <div className='float-end'>
          <button onClick={()=>navigate('/cart')}
            className='border px-2 bg-white text-black hover:bg-black hover:text-white '>Cart</button>
        </div> : null
      }
      {
        currLocation.pathname !== '/product-list' ?
        <div className='float-end'>
          <button onClick={()=>navigate('/product-list')}
            className='mr-5 border px-2 bg-white text-black hover:bg-black hover:text-white '>Product List</button>
        </div> : null
      }
      <Routes>
        <Route path="/product-list/" element={<ProductList />} />
        <Route exact path='/product-list/product-list' element={<ProductList />} />
        <Route exact path='/product-list/product-Details/:id' element={<ProductDetails />} />
        <Route exact path='/product-list/cart' element={<CartList />} />
        <Route exact path='*' element={<ResourceNotFound />} />
      </Routes>
    </Fragment>
      
  )
}

export default App;
