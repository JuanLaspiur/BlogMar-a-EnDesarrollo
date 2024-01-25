import React from 'react'
import logo from '../img/logo.png'
function Header() {
  return (
    <header className="container-fluid border-0" style={{backgroundColor:  "#646b63"}} >
    <nav className="navbar navbar-expand-lg border-0" style={{backgroundColor:  "#646b63"}} >
      <div className="container-fluid">
        <a className="navbar-brand text-warning" href="https://www.linkedin.com/in/laspiurperezjuan/"> MAGNIFICAT <img src={logo}alt="logo" className="pb-2" width="50px"/></a>
        <button className="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        
        <div className="container-fluid collapse navbar-collapse" id="navbarText">
          <ul className="container-fluid navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white disabled" aria-current="page" href="https://www.linkedin.com/in/laspiurperezjuan/"><i className="bi bi-back"></i> Principal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="https://www.linkedin.com/in/laspiurperezjuan/"><i className="bi bi-vignette"></i> María</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="https://www.linkedin.com/in/laspiurperezjuan/"><i className="bi bi-flower1"></i> Apariciones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href='h'><i className="bi bi-postcard-heart"></i> Evangelios</a>
            </li>
          </ul>
        </div>
        <span className="navbar-text text-white">
          Página de la <span className="text-warning"> Virgen</span>
        </span>
      </div>
    </nav>
  </header>
  )
}

export default Header
