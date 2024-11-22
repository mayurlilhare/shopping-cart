import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../components/context';

function ProductDetails() {
    const { id } = useParams();
    const { loading, setLoading, error, setError, productDetails, setProductDetails , handleAddToCart, cartItems} = useContext(MyContext);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(async (resp) => {
                setLoading(true);
                let productData = await resp.json();
                setProductDetails(productData)
                setLoading(false)
            })
            .catch((err) => {
                // console.log("err ", err);
                setProductDetails(null)
                setError(err)
            })
    }, [id]);

    

    if (loading) return <h4>Loading!!! Please Wait.</h4>

    if (error) return <h4>Something Went Wrong.</h4>
    return (
        <div className='p-6 lg:max-w-7xl max-w-4xl mx-auto'>
            <div className='grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6'>
                <div className='lg:col-span-3 w-full lg:sticky top-0 text-center'>
                    <div className='px-4 py-10 rounded-xl shadow-lg relative'>
                        <img
                            className='w-4/5 rounded object-cover'
                            src={productDetails?.thumbnail}
                            alt={productDetails?.title}
                        />
                    </div>
                    <div className='mt-6 flex flex-wrap justify-center gap-6 mx-auto'>
                        {
                            productDetails?.images?.length ?
                            productDetails?.images.map(imgItem=>
                                <div key={imgItem} className='rounded-xl p-4 shadow-md'>
                                    <img
                                    src={imgItem}
                                    className='w-24 cursor-pointer'
                                    alt='img'
                                    />
                                </div>
                            )
                            : null
                        }
                    </div>
                    
                </div>
                <div  className='lg:col-span-2'>
                        <h2 className='text-2xl font-extrabold text-[#333333]'>
                            {productDetails?.title}
                        </h2>
                        <div className=' flex flex-wrap gap-4 mt-4'>
                            <p className='ml-16 font-bold text-xl'>{productDetails?.price}</p>
                        </div>
                        <div >
                            <button
                                disabled={cartItems.findIndex(item => item.id === productDetails.id) > -1 }
                                onClick={()=>handleAddToCart(productDetails)}
                            className='disabled:opacity-65 mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded' >Add to Cart</button>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default ProductDetails