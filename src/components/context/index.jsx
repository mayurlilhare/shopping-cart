import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MyContext = createContext();

function GlobalState({children}) {
    const [listOfProducts, setListOfProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [productDetails, setProductDetails] = useState(null);
    const [cartItems, setCartItems]= useState([]);
    const navigate = useNavigate()

    async function fetchProductList() {
        await fetch('https://dummyjson.com/products')
        .then( async resp=>{
            const data = await resp.json();
            setListOfProducts(data.products);
            setLoading(false);
        }).catch(err=>{
            setLoading(false);
            setError(true);
        })
    }

    function handleAddToCart(currentProduct) {
        let cpyOfCartList = [...cartItems];
        let currIndex = cpyOfCartList.findIndex((cartItem)=> cartItem.id === currentProduct.id)
        
        console.log('here!!!!!!',currIndex);
          
        if(currIndex === -1){
            cpyOfCartList.push({
                ...currentProduct,
                quantity:1,
                totalPrice: currentProduct?.price
            })
        }
        else{
            cpyOfCartList[currIndex] = {
                ...cpyOfCartList[currIndex],
                quantity: cpyOfCartList[currIndex].quantity + 1,
                totalPrice: (cpyOfCartList[currIndex].quantity + 1)
                * cpyOfCartList[currIndex].price,
            }
        }
        setCartItems(cpyOfCartList);
        console.log(cpyOfCartList);
        
        localStorage.setItem('cartItems', JSON.stringify(cpyOfCartList));
        navigate('/cart')
    }

    function handleRemoveFromCart(currentProduct, isFullyRemove) {
        let cpyOfCartList = [...cartItems];
        let currIndex = cpyOfCartList.findIndex((cartItem)=> cartItem.id === currentProduct.id)

        if(isFullyRemove){
            cpyOfCartList.splice(currIndex, 1);
        }
        else{
            console.log('here!!!!!!',currIndex);
            
            cpyOfCartList[currIndex] = {
                ...cpyOfCartList[currIndex],
                quantity: cpyOfCartList[currIndex].quantity
                -1,
                totalPrice: (cpyOfCartList[currIndex].quantity -1) *
                cpyOfCartList[currIndex].price ,
            }
        }

        localStorage.setItem('cartItems', JSON.stringify(cpyOfCartList));
        setCartItems(cpyOfCartList);
    }

    useEffect(()=>{
        fetchProductList();
        setCartItems(JSON.parse(localStorage.getItem('cartItems')) || [])
    },[]);

    return (
        <MyContext.Provider value={{listOfProducts, loading, setLoading, error, setError,
            productDetails, setProductDetails, handleAddToCart, cartItems,
            handleRemoveFromCart
        }}>
            {children}
        </MyContext.Provider>
    );
}

export default GlobalState;

