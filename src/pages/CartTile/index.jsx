import React, { Fragment, useContext } from 'react';
import { MyContext } from '../../components/context';

function CartTile({singleCartItem}) {

    const {handleRemoveFromCart, handleAddToCart} = useContext(MyContext);
    return (
        <Fragment>
            <div className='grid grid-cols-3 items-start gap-5 shadow-md rounded-xl px-3'>
            <div className='col-span-2 flex items-start gap-4'>
                <div className='w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm'>
                    <img 
                    src={singleCartItem?.thumbnail}
                    className='w-full h-full object-contain '
                    />    
                </div>
                <div>
                    <h3 className='text-base font-bold text-gray-900'>
                        {singleCartItem?.title}
                    </h3>
                    <button className='rounded-lg float-start text-sm p-4 py-3 mt-3 bg-black text-white font-extrabold'
                    onClick={()=>handleRemoveFromCart(singleCartItem, true)}>Remove</button>
                </div>
            </div>
            <div className='ml-auto'>
                <h3 className='text-lg font-bold text-gray-900'>
                    {singleCartItem?.totalPrice.toFixed(2)}
                </h3>
                <p className='mt-2 mb-3 font-bold text-[16px]'>
                    Quantity: {singleCartItem?.quantity}
                </p>
                <div className='mt-3'>
                    <button onClick={()=>handleRemoveFromCart(singleCartItem, false)} 
                        className='w-10 mr-3 rounded-lg hover:bg-black hover:text-white disabled:opacity-65 disabled:bg-gray-400 border border-[#000]'
                        disabled={singleCartItem?.quantity === 1}>
                            -
                    </button>
                    <button onClick={()=>handleAddToCart(singleCartItem)} 
                        className='border border-[#000] w-10 rounded-lg hover:bg-black hover:text-white'>
                        +
                    </button>
                </div>
            </div>
        </div>
        <hr className='border-gray-500' />
        </Fragment>
    );
}

export default CartTile;