import './AuthButton.scss'
import { useAuth, logoutUser } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function AuthButton ({ isLoggedIn, handleClick }) {
    const { state, dispatch } = useAuth()
    const navigate = useNavigate()

    const logout = () => {
        logoutUser(dispatch)
        navigate('/authentification')
    }

    if (state.user && state.token) {
        return <button className="authButton" onClick={logout}>Disconnect</button>
    } else {
        return (
            <Link to='/authentification'>
                <button className="authButton" onClick={handleClick}>{isLoggedIn ? 'Disconnect' : 'Connect'}</button>
            </Link>
        )
        
    }


}
  
  export default AuthButton