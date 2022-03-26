import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shoe.css'

const Shoe = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // const [shoe, setShoe] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        if (newCart.length === 5) {
            alert('alert');
        }
        else {
            setCart(newCart);

        }
    }
    const choseAgain = () => {
        setCart([])
    }

    const choseOneForMe = (product) => {
        const newCart = [...cart, product];
        let selectedProduct = newCart[Math.floor(Math.random() * newCart.length)]
        console.log(selectedProduct)


    }
    return (
        <div className='shoe-container'>
            <div className='products-container'>
                {

                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >

                    </Product>)
                }

            </div>

            <div className='cart-container'>
                <p>Selected Shoes</p>
                <p> Selected Item: {cart.length}</p>
                {/* <p>{products.name}</p> */}
                {cart.map((item) => (
                    <h4>Name: {item.name}</h4>
                ))}

                <button onClick={() => handleAddToCart(products)} className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                </button>
                <button onClick={choseOneForMe} className='btn'>CHOOSE 1 FOR ME</button>
                <button onClick={choseAgain} className='btn'>
                    CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Shoe;