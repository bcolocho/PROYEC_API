import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import fondo3 from '../assets/img/imagen_6.png'
import fondo5 from '../assets/img/imagen_5.png'
import logo from '../assets/img/logo.png'


export default function Login() {
    const { loginWithRedirect } = useAuth0();

    return (        
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-7 text-white text-center fondos w-50 h-50 cardss'>
                    <img src={logo} className='w-75'/>
                    <img className='w-25 feature' src={fondo5} />
                    <h2 className='pt-3 text'>¡¡ALISTA LAS MALETAS!!..</h2>
                    <p className='text1'><i>Ingresa a las realidades pararelas, por que no se visitaran solas....</i></p>
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

