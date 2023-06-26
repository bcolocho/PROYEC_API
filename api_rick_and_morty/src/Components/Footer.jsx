import React from 'react'
import '../assets/css/style_isabel.css'
import rickymorty from '../assets/img/RickandMorty.png'
import rickymorty2 from '../assets/img/rm2.png'

function Footer() {
  
  return (
   <>
   <nav className="navbar navbar-expended-lg navbar-light bg-light">
   </nav>
   {/* */}
   <div className="Footer">
    <div className=" text-bg-dark">
      <div className="row">
        <div className="col-md-6 col-lg-5 col-12 ft-1">
        <a className='navbar-brand' href="/"><img src={rickymorty} className='tituloFooter' alt="" /></a>
    
          <p className='p1'> <b> Rick, un cientifico alcohólico, secuestra a su influenciable nieto, Morty para vivir peligrosas aventuras a traves de nuestro cosmos y universos paralelos.</b></p>
          <p> <em> <b>Protagonizada por:</b> Justin Roiland, Chris Parnell, Spencer Grammer. </em> </p>
          <p> <em> <b>Creada por:</b> Dan Harmon, Justin Roildan</em> </p>
         <div className="footer-icons">
         <i class="fa-brands fa-square-github"></i>
         <i class="fa-brands fa-linkedin"></i>
         <i class="fa-brands fa-square-instagram"></i>
         <i class="fa-solid fa-user"></i>
         </div>
        </div>
          
        <div className="col-md-6 col-lg-3 col-12 ft-2">
        <h3 className='titulo3'>Group information</h3>
        <p> <i class="fa-solid fa-envelope"></i>Boris: boriscolocho2021@gmail.com</p>
        <p> <i class="fa-solid fa-envelope"></i>Erick: topsi_1@hotmail.com</p>
        <p> <i class="fa-solid fa-envelope"></i>Hector: alejan03lina@outlook.es</p>
        <p> <i class="fa-solid fa-envelope"></i>Betzabe: alejan03lina@outlook.es</p>
        <p> <i class="fa-solid fa-envelope"></i>Isabel: indaisabelrm@gmail.com</p>
        
        




        
        </div>

        <div className="col-md-6 col-lg-4 col-12 ft-3 emal-icons">
        <h3 className='titulo2'>Option</h3>
        
        <ul>
          <li>
            <a className='nav-lin' href="#">Home</a>
          </li>
          <li>
            <a className='nav-lin' href="#">Personajes</a>
          </li>
          <li>
            <a className='nav-lin' href="#">Buscador de Personajes</a>
          </li>
          <li>
            <a className='nav-lin' href="#">Characters</a>
          </li>
      
        </ul>
        <img  src={rickymorty2} className='rickmorty2' alt="" />

        </div>

        

      </div>

    </div>

   </div>
   <div className='Last-footer'>
    <h2>Designed By Team #5</h2>
   </div>
   </>
  )
}

export default Footer
