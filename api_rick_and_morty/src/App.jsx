import Header from './components/Header'
import './assets/css/style_alejan.css'
import './assets/css/style_boris.css'
import './assets/css/style_isabel.css'
import Login from './components/Login'
import Footer from './Components/Footer'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  console.log(window.location.origin);

  const { isAuthenticated } = useAuth0();
  return (
    <>
      {
        isAuthenticated ? (
          <>
            <Header />
            <Footer />
          </>
        ) : (
          <Login />
        )
      }
    </>
  )
}

export default App