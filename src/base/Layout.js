
import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../externalPages/Login"
import Dashboard from "../InternalPages/Dashboard"
import PrivateRoute from "../routing/PrivateRoute"
import PublicRoute from "../routing/PublicRoute"


const Layout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<PublicRoute component={<Login />} />} />
                <Route path='/dashboard' element={<PrivateRoute component={<Dashboard />} />} />
            </Routes>
        </>
    )
}

export default Layout