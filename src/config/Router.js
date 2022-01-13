import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Auth from '../pages/Auth'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Main from '../pages/Main'
import History from '../pages/Main/History'
import Lama from '../pages/Main/History/Lama'
import Home from '../pages/Main/Home'

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route index element={ <Navigate to="/main"/>}/>
          <Route path="/auth" element={<Auth />} >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register/>} />
            <Route index element={<Navigate to="/auth/login"/>}/>
          </Route>
          <Route path="/main" element={<Main/>}>
            <Route index element={<Home/>}/>
            <Route path="history" element={<History/>}>
              <Route path="lama" element={<Lama/>}/>
            </Route>
          </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Router
