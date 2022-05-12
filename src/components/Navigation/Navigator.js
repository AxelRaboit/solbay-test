import { Routes, Route } from 'react-router-dom'
import Auth from '../../pages/Auth'
import Home from '../../pages/Home'
import Projects from '../../pages/Projects'
import Launchpad from '../../pages/Launchpad'
import Partners from '../../pages/Partners'
import Dashboard from '../../pages/Dashboard'
import RegisterForm from '../Form/Registration/RegisterForm'
import LoginForm from '../Form/Login/LoginForm'

function Navigator () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/authentification' element={<LoginForm />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/launchpad' element={<Launchpad />} />
      <Route path='/partners' element={<Partners />} />
      <Route path='/register' element={<RegisterForm />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default Navigator