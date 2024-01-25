import React from 'react'
import imagenTilmaVirgen from '../../img/2512024.2.jpg';
import './container4.css'

function Container4() {
  return (
    <div className="container-fluid conteinerSNombre ">
  <div className="row mx-5">
    <div className="col-12 col-md-4">  <h1 className="h1 text-dark ">Hola</h1>
     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nulla at magnam molestias fuga quo culpa debitis voluptas dignissimos distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati soluta veniam inventore consequatur esse? Aliquid, itaque eaque vero libero laboriosam perspiciatis distinctio sequi. Accusantium sunt soluta blanditiis laborum reiciendis sint.</p></div>
    <div className="col-12 col-md-4 "> 
      <img src={imagenTilmaVirgen} className="pt-2" alt="tilma virgen guadalupe" width="100%"/>
    </div>
    <div className="col-0 col-md-4">
      <div className="flechaAdorno"> </div>
      <div className="flechaAdorno2"> </div> 
      <div className="flechaAdorno3"> </div>    
    </div>   
  
</div>
     
</div>
  )
}

export default Container4
