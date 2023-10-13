import React from 'react'
import per from '../images/percent.jpg'
import pho from '../images/phoneTabl.jpg'
import pho1 from '../images/electronics.jpg'
import pho2 from '../images/Tvs.png'
import pho3 from '../images/fashion.jpeg'
import pho4 from '../images/chocolateandButy.jpg'
import '../css/bootstrap.css'

import '../App.css'

export default function Offerpage() {
    return (
        <>
            <div className='col-md-10 d-flex justify-content-center shadow p-3 mb-5 bg-body-tertiary rounded' style={{ backgroundColor: "white" }}>
                <div class="p-2">
                    <img className="imgOffer " src={per} />
                    <p><b>Top Offers</b></p>
                </div>

                <div class="p-2">
                    <img className='imgOffer ' src={pho} />
                    <p><b>Phones and Tables</b></p>
                </div>
                <div class="p-2">
                    <img className='imgOffer' src={pho1} />
                    <p><b>Electronics</b></p>
                </div>
                <div class="p-2">
                    <img className='imgOffer' src={pho2} />
                    <p><b>TVs & Applications</b></p>
                </div>
                <div class="p-2">
                    <img className='imgOffer' src={pho3} />
                    <p><b>Fashion</b></p>
                </div>
                <div class="p-2">
                    <img className='imgOffer' src={pho4} />
                    <p><b>Beauty</b></p>
                </div>
            </div>
        </>
    )
}
