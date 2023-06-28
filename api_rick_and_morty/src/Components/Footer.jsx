import React from 'react'
import '../assets/css/style_isabel.css'
import rickymorty from '../assets/img/RickandMorty.png'


function Footer() {

  return (
    <>

      {/* */}
      <div className="Footer container-fluid text-bg-dark mt-5 ">

        <div className="row">
          <div className="col-md-4 col-lg-4 ft-1">
            <a href="/"><img src={rickymorty} className="tituloFooter py-3" alt="" /></a>
          </div>

          <div className="col-md-4 col-sm-12 col-lg-4 ft-2">
            <h5 className='titulo3 text-white'>Creadores</h5>
            <p> <i class="fa-solid fa-envelope"></i>Boris: boriscolocho2021@gmail.com</p>
            <p> <i class="fa-solid fa-envelope"></i>Erick: topsi_1@hotmail.com</p>
            <p> <i class="fa-solid fa-envelope"></i>Hector: alejan03lina@outlook.es</p>
            <p> <i class="fa-solid fa-envelope"></i>Betzabe: alejan03lina@outlook.es</p>
            <p> <i class="fa-solid fa-envelope"></i>Isabel: indaisabelrm@gmail.com</p>
          </div>

          <div className="col-md-4 col-sm-12 col-lg-4 ft-3 emal-icons">
            <h5 className='titulo2 text-white'>Sección</h5>
            <ul>
              <li>
                <a className='nav-lin' href="/">Home</a>
              </li>
              <li>
                <a className='nav-lin' href="personajes">Personajes</a>
              </li>
              <li>
                <a className='nav-lin' href="buscar">Buscar por Personajes</a>
              </li>
              <li>
                <a className='nav-lin' href="creadores">Creadores</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='row'>
          <div className='text-white my-5 text-center '>
            <h6> &copy; 2023 Designed By Team 5.</h6>
          </div>
        </div>

      </div>

    </>
  )
}

export default Footer
