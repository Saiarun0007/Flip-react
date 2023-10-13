import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../css/bootstrap.css';

export default function Product() {
    const [products, setProducts] = useState([{}])
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(res => setProducts(res.data.products))
    }, 0)
    console.log(products);
    return (
        <>
            <div className='row'>
                {products.map((e, i) => {
                    return (
                        <div className='col-md-4'>
                            <div className='flash-cards row'>
                                <img src={e.thumbnail} height="315px" />
                                <p>{e.title}</p>
                                <p>$.{e.price}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}