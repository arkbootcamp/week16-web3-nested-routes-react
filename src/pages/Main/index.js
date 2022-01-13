import React from 'react'
import Footer from '../../components/module/Footer'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import {Outlet} from 'react-router-dom'
import {Navigate} from 'react-router-dom'

const Main = () => {
    const auth = localStorage.getItem('token')
    if (!auth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/auth/login" />;
      }

    return (
        <div className='min-h-screen bg-gray-200'>
            <Navbar/>
            <div className='flex px-20 mt-5'>
                <Sidebar/>
                <div className='bg-white rounded-2xl w-full ml-6'>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        
        </div>
    )
}

export default Main
