import LoginForm from 'features/Auth/components/LoginForm';
import React from 'react'
import './SignIn.scss'

SignIn.propTypes = {

}

function SignIn() {
    const initialValue = {
        username: '',
        password: '',
    }

    const handleSubmit = () => {

    }
    //https://stackblitz.com/edit/react-router-redux-toolkit-fetch-api?file=src%2Fstore%2FuserSlice.js
    return (
        <div >
            <h3 className="text-center"> Login Form </h3>
            <div className="text-center"> or Login with social methods</div>

            <div >
                <LoginForm
                    initialValues = { initialValue }
                    onSubmit={ handleSubmit } />
            </div>

        </div>
    )
}

export default SignIn;