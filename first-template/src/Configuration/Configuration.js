import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import Websitefooter from "./../Layout/Footer/Footer";
import Menubar from "../Layout/Menubar/Menubar";
import NextviewportMenu from "../Layout/NextviewportMenu/NextviewportMenu";
import './Configuration.css';

const Configuration = ({children}) =>{
    return (
        <div className="configuration">

            <Navbar/>
            <Menubar/>
            <NextviewportMenu/>
            <main>
                {children}
            </main>

            <Websitefooter/>

        </div>
    );

};

export default Configuration