import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shoe.css'

const Shoe = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        if (newCart.length === 5) {
            alert("you cant't add more than 4");
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
        let selectedProduct = newCart[Math.floor(Math.random(3) * (3 - 0 + 0) + 0)];
        console.log(selectedProduct.name);
        document.getElementById("selectedName").innerHTML = `
        <span>${selectedProduct.name}</span>
        `;
        // const random = newCart[Math.floor(Math.random() * cart.length)];
        // setCart([random]);
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
                {cart.map((item) => (
                    <h4>Name: {item.name}</h4>
                ))}
                <p id="selectedName"></p>

                <button onClick={choseOneForMe} className='btn'>CHOOSE 1 FOR ME</button>

                <button onClick={choseAgain} className='btn'>
                    CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Shoe;