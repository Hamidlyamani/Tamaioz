import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const user = useSelector((state) => state.auth.user);

        if (!user) {
            return <Navigate to="/" />;
        }
        return <WrappedComponent {...props} />;
    };
    return AuthComponent;
};

export default withAuth;