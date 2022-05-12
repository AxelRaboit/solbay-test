import './DashboardButton.scss'
import { Link } from 'react-router-dom'
import './DashboardButton.scss'

function DashboardButton () {
    return (
      /* <button className="signUpButton">Sign Up</button> */
      <li className="containerListSignUp">
        <Link className="signUpButton" to='/dashboard'>Dashboard</Link>
      </li>
    )
  }
  
  export default DashboardButton