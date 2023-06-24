import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import fondo3 from '../assets/img/imagen_6.png'
import fondo5 from '../assets/img/imagen_5.png'


export default function Login() {
    const { loginWithRedirect } = useAuth0();

    return (        
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-7 text-white text-center fondos w-50 h-50 cardss'>
                    <h3>Bienvenidos a nuestra Pagina Web</h3>
                    <img className='w-25 feature' src={fondo5} />
                    <p>Rick y Morty es una serie bastante buena y entretenida. Con personajes memorables, animación decente y una historia original da de ser una d las mejores series animadas actualmente. Pese a sus fallos, esto es una serie animada que solo los mayores pueden entretenerse. Y de eso yo me incluyo.</p>
                </div>
            <div className='login text-center col-md-5 min'>
                <div className='form'>
                    <img className='img-logo' src={fondo3} />
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <button className='btn btn-outline-warning mt-3 ' onClick={ () => loginWithRedirect()}>Login</button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

