import React from 'react'
import imagenVirgen from '../../img/143997_virgen-guadalupe-portada-removebg-preview.png'
import './container2.css'

function Container2() {
  return (
    <div class="container-fluid container2 p-1 p-md-5"  >
    <div class="cajaAbsoluta" data-aos="flip-up"  data-aos-delay="150"></div>

    <div class="row"  data-aos="flip-up"  data-aos-delay="150">
      <div class="col-0 col-md-2"></div>
      <div class="col-0 col-md-4">
        <img src={imagenVirgen} alt="Virgen guadalupe" class="d-none d-md-block"/>
       </div>
    
      
       <div class="p-5 p-md-2 col-12 col-md-6 ">
        <h1 class="h1 p-1 text-dark ">Blog de María</h1>
        <p class="">Muchos nombres, pues, una única mujer extraordinaria, que cambió para siempre el destino del mundo con un acto de fe revolucionario. Al aceptar convertirse en Madre de Dios, María consintió en ser Madre de todos los hombres, de todas las épocas, sin distinción, sin fronteras, dispuesta a dar alivio a sus hijos afligidos, a interceder por ellos ante Dios Padre, con toda la comprensión y la misericordia de que sólo una madre es capaz.</p>
        
        <p class="text-dark">
            Blog realizado por laicos con el objetivo de difundir las apariciones Marianas y sus mensajes.
        </p>
    </div>
    
  </div>
</div>
  )
}

export default Container2;
