import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

const Auth = () => {
    const auth = localStorage.getItem('token')
    if (auth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/main" />;
      }
    return (
        <div className='min-h-screen flex bg-gray-100'>
            <div className='bg-auth-left w-1/2'>
                    <h1 className='text-white text-2xl'>Zwallet</h1>
            </div>
            <div className='w-1/2'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Auth
