import { useState } from 'react'
import { loginUser, useAuth } from '../../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import FormInput from './LoginFormInput';
import { Link } from 'react-router-dom'
import './Login.scss';

function LoginForm () {

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  const { dispatch, state } = useAuth()

  const inputs = [
    {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "email",
        errorMessage: "It should be a valid email address!",
        required: true,
        icon: 'user',
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
      icon: 'lock',
    }
  ]

  const onChange = (e) => {
    console.log(values)
    setValues({ ...values, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {
      identifier: values.email,
      password: values.password
    }
    await loginUser(user, dispatch)
    navigate('/dashboard')
  }

  return (
    <div className='container-authentification' style={{ display: 'flex', flexDirection: 'column' }}>
      <pre style={{color: 'white', marginBottom: '80px'}}>{JSON.stringify(state, null, 2)}</pre>
      <div className="containerForm">
          <h1>Welcome back !</h1>
          <form className="authentificationForm" onSubmit={handleSubmit}>
            {inputs.map((input) => (
                <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
                />
            ))}
        
            <button type="submit">LOGIN</button>
          </form>
          <div className='containerRegister'>
              <p>Forgot password ? <br/>or
                  <Link to='/register' class="link">
                      <span className='text-underline'> Register</span>
                  </Link>
              </p>
          </div>
      </div>
    </div>
  )
}

export default LoginForm
