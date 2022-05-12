import { Link } from 'react-router-dom'
import './NavMenu.scss'

function NavMenu () {
  return (
    <div className='containerNav'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/launchpad'>Launchpad</Link>
        </li>
        <li>
            <Link to='/partners'>Partners</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMenu