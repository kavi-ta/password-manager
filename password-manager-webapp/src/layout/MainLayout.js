import React from "react";
import Header from "../component/Header"
// import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import { Outlet } from "react-router-dom";

const MainLayout = ()=>{
    return(
        <>
            <Header/>
            <Outlet/>

        </>
        
    )
}

export default MainLayout
