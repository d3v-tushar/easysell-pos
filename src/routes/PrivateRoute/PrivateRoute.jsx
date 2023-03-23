import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authcontext/AuthProvider';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return (
        <div className='min-h-screen grid justify-center mt-5'>
            <h2 className='text-xl font-semibold'>Loading Data...</h2>
        </div>
        )
    }
    if(user && user.uid){
       return children
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;