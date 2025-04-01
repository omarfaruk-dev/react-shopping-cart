import React, { useState } from 'react';

const Product = ({ product, displayProducts }) => {
    const { title, price, category, image } = product;
    const [addCart, setAddCart] = useState([true]);
    const handleAddCart =()=>{
        setAddCart(false);

        displayProducts(product)
    }
    return (
        <div className='border-2 border-orange-400 rounded-xl p-5'>
            <div className='relative'>
                <img className='mx-auto w-[250px] h-[300px]' src={image} alt="" />
                <h3 className='absolute top-0 right-0 bg-orange-400 px-2 rounded-lg text-white'>{category}</h3>
            </div>
            <h2 className='font-semibold'>{title}</h2>
            <h3>Price: ${price}</h3>
            <button onClick={handleAddCart} className='bg-orange-400'>{addCart? 'Add to Cart': 'Added 🛒'}</button>
        </div>
    );
};

export default Product;