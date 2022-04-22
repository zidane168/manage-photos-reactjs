import { useDispatch } from 'react-redux' 
import { logout } from 'features/Auth/userSlice';

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

SignOut.propTypes = {

}

function SignOut() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logout());
        navigate('/SignIn');
        console.log('sign out')
    });
}

export default SignOut;