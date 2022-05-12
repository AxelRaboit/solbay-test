import './SignUpButton.scss'
import { Link } from 'react-router-dom'

function SignUpButton () {
    return (
      /* <button className="signUpButton">Sign Up</button> */
      <li className="containerListSignUp">
        <Link className="signUpButton" to='/register'>Sign Up</Link>
      </li>
    )
  }
  
  export default SignUpButton