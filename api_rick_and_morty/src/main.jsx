import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain='dev-kgt5vb8fp662jhjf.us.auth0.com'
  clientId='Jug1P7M6nqIPXHaA3plLhEJqUrfDM1XT'
  redirectUri={window.location.origin}>

  <React.StrictMode>
    <App />
  </React.StrictMode>,

</Auth0Provider>
)
