import { AuthContext } from "../../stores/authContext";
import { useContext } from 'react'

export default function AuthMenu() {
  const { user, login, logout, authReady } = useContext(AuthContext)
  return (
    <div className="auth-menu">
      { authReady &&
        <ul>
          { !user && <li onClick={login}>Register / Login</li> }
          { user && <li className="auth-email">{user.email}</li> }
          { user && <li onClick={logout}>Logout</li> }
        </ul>
      }
    </div>
  )
}
