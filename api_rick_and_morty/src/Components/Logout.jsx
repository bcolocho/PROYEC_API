import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Logout() {
    const { logout } = useAuth0();

    return (
        <button className='btn btn-outline-danger m-2' onClick={ () => logout({ logoutParams: {returnTo: window.location.origin}})}>Logout</button>
    )
}
