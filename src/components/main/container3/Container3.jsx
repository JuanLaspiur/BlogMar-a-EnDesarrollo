import React from 'react'
import './container3.css'
import img1 from '../../img/2.png'
import img2 from '../../img/1.png'
import img3 from '../../img/3.png'



function Container3() {
  return (
    <div class="container-fluid container3">
    <div class="row"  data-aos="zoom-in" data-aos-delay="250">
      <div class="col-12 col-md-4">
        <img src={img1} className="card tarjetaImagen"/>
      </div>
      <div class="col-12 col-md-4">
        <img src={img2} className="card tarjetaImagen"/>
      </div>
      <div class="cold-12 col-md-4">
      <img src={img3}  className="card tarjetaImagen"/>
      </div>
    </div>
  </div>
  )
}

export default Container3
