import React from 'react'
import { Outlet } from 'react-router-dom'

const History = () => {
    return (
        <div>
            <h1>halmaan history</h1>
            <Outlet/>
        </div>
    )
}

export default History
