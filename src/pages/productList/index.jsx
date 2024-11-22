import React, { useContext } from 'react';
import { MyContext } from '../../components/context';
import ProductTile from '../productTile';

function ProductList() {
  const { listOfProducts, loading, error } = useContext(MyContext);
  console.log(listOfProducts);
  
  if(loading) return<h4>Loading!!! Please Wait.</h4>

  if(error) return<h4>Something Went Wrong.</h4>

  return (
    <section className='py-12 bg-white sm:py-16 lg:py-20'>
       <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className=' max-w-md mx-auto text-center'>
          <h2 className='text-3xl font-extrabold text-gray-950 sm:text-4xl'>
            Our Featured Products
          </h2>
        </div>
        <div className='grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4'>
          {
            listOfProducts && listOfProducts.length>0 
            ? listOfProducts.map( (singleProduct, indx)=><ProductTile key={indx} singleProductTile={singleProduct} />)
            :<h3>No Products Found</h3>
          }
        </div>
       </div>
    </section>
  );
}

export default ProductList;