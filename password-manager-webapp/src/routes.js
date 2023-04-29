import React, { Children } from "react"
import {useRoutes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

const RouteComponent  = ()=>{
    return (
        useRoutes(
            [
                { path : '/' , 
                  element : <MainLayout/>,
                  children: [
                    { path: '/', element: <Login /> },
                    { path: 'dashboard', element:<Dashboard/>}
                    ]
                }
            ]
        )
      
    )
}

export default RouteComponent