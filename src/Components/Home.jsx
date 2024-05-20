import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { add } from '../Redux/Cartslice';
import { useDispatch } from 'react-redux';

function Home() {

    const[products,setProduct]=useState([])
    const dispatch=useDispatch()

async function fetchdata(){
  try {
        let res = await axios.get('https://fakestoreapi.com/products');
        let data = res.data;
        console.log(data);
        setProduct(data)
        console.log(products)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const handleAdd=(product)=>{
dispatch(add(product));
}

    useEffect(()=>{
      fetchdata()
    },[])

  return (
    <div className='h-28 flex flex-wrap w-full'>
            {products.map((item) => (
                <div className='border-2 w-1/5 p-2' key={item.id}>
                    <h2>{item.id}</h2>
                    <img className='w-full h-30 object-cover' src={item.image} alt="img" />
                    <h4>{item.title}</h4>
                    <h5>${item.price}</h5>
                    <button className='bg-orange-900 rounded-md text-white p-2 mt-2' onClick={handleAdd(item)}>Add to cart</button>
                </div>
            ))}
        </div>
  )
}

export default Home


