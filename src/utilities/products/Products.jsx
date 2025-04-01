import React, { use, useState } from 'react';
import Product from '../product/Product';

const Products = ({ resolveProducts }) => {
    const products = use(resolveProducts);

    const [displayCartProduct, setDisplayCartProduct] = useState([])
    const displayProducts = (product) => {
        const newDisplayProduct = [...displayCartProduct, product];
        setDisplayCartProduct(newDisplayProduct)
    }

    return (
        <div>
            <h2>Total Products: {products.length}</h2>
            <h3>Cart Item: {displayCartProduct.length}</h3>
            {/* display cart product */}
            <div grid md:grid-cols-3 gap-4 pb-4>
            {
                displayCartProduct.map(cartProduct => <div flex column-gap-5 items-center>
                    <img className='w-10' src={cartProduct.image} alt="" />
                    <div>
                        <h3>{cartProduct.title}</h3>
                        <h3>{cartProduct.price}</h3>
                    </div>
                </div>)
            }
            </div>
           

            <div className='grid grid-cols-3 gap-5'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        displayProducts={displayProducts}></Product>)

                }
            </div>
        </div>
    );
};

export default Products;