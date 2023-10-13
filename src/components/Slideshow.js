import React from 'react'
import img1 from '../images/contactUs.jpeg'
import img2 from '../images/contactUs3.jpeg'
import img3 from '../images/contactUs41.jpeg'
import '../css/bootstrap.css'

export default function Slideshow() {
    return (
        <>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="100">
                        <img src={img2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="200">
                        <img src={img1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
