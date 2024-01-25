import React from 'react';
import imagenVirgen from '../../img/d6c79e8a27592bb2466851d4137f17d4.jpg'
import imagenLogo from '../../img/logo2.png'
import './container1.css';

function Container1() {
  return (
    <div class="container-fluid container1">
    <div class="row">
      <div class="row">
        <div class="col-0 col-md-6 caja1-texto">
          <h1 class="text-warning h1">MAGNIFICAT <img src={imagenLogo} alt="logo" width="190px"/></h1>
        </div>
        <div class="col-md-6 caja1-imagen" data-aos="fade-up" data-aos-delay="50">
          <img src={imagenVirgen} alt="img"/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Container1;
