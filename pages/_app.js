import '../styles/globals.css'
import { AuthContextProvider } from '../stores/authContext'
import Header from '../components/site/header/Header'
function MyApp({ Component, pageProps }) {
  return (
  <AuthContextProvider>
    <Header />
    <Component {...pageProps} />
  </AuthContextProvider>
  )
}

export default MyApp
