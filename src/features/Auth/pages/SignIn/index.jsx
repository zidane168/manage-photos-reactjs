import LoginForm from 'features/Auth/components/LoginForm';
import React from 'react'
import './SignIn.scss'

import { useDispatch, useSelector } from 'react-redux' 
import { login } from 'features/Auth/userSlice';

import { useNavigate } from 'react-router-dom'

SignIn.propTypes = {

}

function SignIn() {
    const initialValue = {
        username: '',
        password: '',
    }

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const isLoading     = useSelector(state => state.user.isLoading)
    const errorMessage  = useSelector(state => state.user.errorMessage)
    const currentUser   = useSelector(state => state.user.currentUser)

    const handleLogin =  (values) => {
       
        console.log(`Form submit: `, values);
        dispatch(login( {values} ))
    }

    if (currentUser.status == 200) {
        // redirect to photoList
        navigate('/Photos');
    }

    console['info']('isLoading: ', isLoading)
    console['info']('currentUser: ', currentUser)

    //https://stackblitz.com/edit/react-router-redux-toolkit-fetch-api?file=src%2Fstore%2FuserSlice.js
    return (
        <div >
            <h3 className="text-center"> Login Form </h3>
            <div className="text-center"> or Login with social methods</div>

            <div >
                <LoginForm
                    initialValues = { initialValue }
                    onSubmit={ handleLogin } />
            </div>

        </div>
    )
}

export default SignIn;