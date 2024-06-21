import React from "react";
import './Fashion.css';

const Fashion = ({children}) =>{
    return(
        <div id="section2" className="fashioninformationbox">
                {children}
        </div>
    );
}
export default Fashion