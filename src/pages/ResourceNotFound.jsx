import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResourceNotFound() {
    const navigate = useNavigate();

    return (
        <div className='group mx-auto my-auto block border border-black 
                transition-all duration-300 px-5 py-5'>
            <h1>Resource Not Found!!!</h1>
            <button className='bg-gray-600 text-white hover:bg-black
                                border-black hover:border-yellow-100
                                group-hover:scale-105'
                    onClick={()=>navigate('/product-list')}>Go To Product List page</button>
        </div>
    );
}

export default ResourceNotFound