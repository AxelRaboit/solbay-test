import React, { useState } from 'react'
import './Register.scss';
import FormInput from './RegistrationFormInput';
import { useAuth, registerUser } from '../../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function RegisterForm() {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword:''
    })

    const navigate = useNavigate()
    const { dispatch, state } = useAuth()

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "username",
            errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
            icon: 'user'
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "email",
            errorMessage: "It should be a valid email address!",
            required: true,
            icon: 'envelope',
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
            icon: 'lock',
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "confirm password",
            errorMessage: "Passwords don't match!",
            pattern: values.password,
            required: true,
            icon: 'lock',
        }
    ]

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            username: values.email,
            email: values.email,
            password: values.password
        }
        console.log(user)
        await registerUser(user, dispatch)
        /* navigate('/authentification') */
    }

    return (
        <div className='container-register'>
            <div className="containerForm">
                <h1>Welcome 👋</h1>
                <p className='registrationInformation'>
                    ⚠️ Before starting your registration make sure to <br/> submit our <span className="text-underline">application form</span> <br/>
                    Once registred, our team will review your <br/> application and activate your account.
                </p>
                <form className="registrationForm" onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                        />
                    ))}
                
                    <button type="submit">SIGN UP</button>
                </form>
                <div className='containerSignIn'>
                    <p>Already have an account ? 
                        <Link to='/authentification' class="link">
                            <span className='text-underline'>Sign In</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm