import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuthentication from '../services/useAuthentication'

const PrivateRoute = ({ component }) => {
    const { isAuthenticated } = useAuthentication();
    if (isAuthenticated) {
        return <>{component}</>
    }
    return <Navigate to='/' />;

}

export default PrivateRoute