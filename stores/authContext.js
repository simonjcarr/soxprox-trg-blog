import { useEffect, useState } from "react/cjs/react.production.min";
import { netlifyIdentity } from "netlify-identity-widget";

export const AuthContext = createContext(
  {
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
  }
);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [authReady, setAuthReady] = useState(false)

  useEffect(() => {
    netlifyIdentity.on('login', (user) => {
      setUser(user)
      netlifyIdentity.close()
    })

    netlifyIdentity.on('logout', () => {
      setUser(null)
      netlifyIdentity.close()
    })

    netlifyIdentity.on('init', () => (user) => {
      setUser(user)
      setAuthReady(true)
    })

    netlifyIdentity.init()

    return () => {
      netlifyIdentity.off('login')
      netlifyIdentity.off('logout')
      netlifyIdentity.off('init')
    }
  }, [])
}