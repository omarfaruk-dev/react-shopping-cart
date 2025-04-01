
import { Suspense } from 'react';
import './App.css'
import Products from './utilities/products/Products';

const promiseProducts = async()=>{
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
}

function App() {

  const resolveProducts = promiseProducts();


  return (
    <>
      <h1 className='text-xl text-red-500'>Shopping Cart Functionality</h1>

      <Suspense fallback={<h2 className='text-center'><span class="loading loading-spinner text-error loading-xl"></span></h2>}>
        <Products resolveProducts={resolveProducts}></Products>
      </Suspense>
    </>
  )
}

export default App
