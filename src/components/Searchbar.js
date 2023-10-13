import React from 'react'
import logo1 from '../images/logo1.png'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Searchbar() {
    return (
        <>
            <div className='logo12 col-md-1'>
                <img className='logo1' src={logo1} />

            </div>
            <div className='SearchBar1 col-md-9' >
                <input type='text' width={80} placeholder='search for Products,' />
            </div>
            <div className='SearchBar1 col-md-1'>
                <div className='jstcart'>
                    <Link to='Forms'><i class="fa-solid fa-cart-shopping"></i><span>Cart</span></Link>
                </div>

            </div>
            <div className='col-md-1'>

            </div>

        </>
    )
}
