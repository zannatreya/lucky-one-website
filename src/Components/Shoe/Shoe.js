import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shoe.css'

const Shoe = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shoe-container'>
            <div className='products-container'>
                {

                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}>

                    </Product>)
                }

            </div>

            <div className='cart-container'>
                <p>Selected Shoes</p>
                <p> Selected Item: {cart.length}</p>
                {cart.map((item) => (
                    <h4>Name: {item.name}</h4>
                ))}
                <button>CHOOSE 1 FOR ME</button>
                <button>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Shoe;