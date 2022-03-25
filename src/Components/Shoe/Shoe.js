import React from 'react';
import './Shoe.css'

const Shoe = () => {
    return (
        <div className='shoe-container'>
            <div className='products-container'>
                <p>this is for products</p>
            </div>

            <div className='cart-container'>
                <p>Selected Shoes</p>
            </div>
        </div>
    );
};

export default Shoe;