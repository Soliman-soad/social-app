import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../context/UserContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(ProfileContext);
    const navigate = useNavigate()
    if(!user){
        return navigate('/login')
    }
    return children
};

export default PrivateRoute;