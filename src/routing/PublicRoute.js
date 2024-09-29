import React from 'react'
import useAuthentication from '../services/useAuthentication';
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ component }) => {
    const { isAuthenticated } = useAuthentication();
    if (!isAuthenticated) {
        return <>{component}</>;
    }

    return <Navigate to='/dashboard' />

}

export default PublicRoute