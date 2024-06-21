import React from "react";
import './Home.css';
import Fashion from "../../Components/Fashion/Fashion";
import HomeDesign from "../../Components/HomeDesign/HomeDesign";
import LinkButton from "../../Components/LinkButton/LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import FashionLayout from "../../Components/FashionLayout/FashionLayout";
import Backgroundvideo from "../../Components/Backgroundvideo/Backgroundvideo";
import HomeDesignLayout from "../../Components/HomeDesignLayout/HomeDesignLayout";

import { Link } from "react-router-dom";

const video1 = "/fashionvideo.mp4";
const video2 = "/HomeDesign.mp4";

const Homepage = () => {
    return (
        <div className="HomePage">
            
            <div className="background">
                    <Backgroundvideo>{video1}</Backgroundvideo>
                    <container id="section1" className="container">
                        <div className="leftcontainer">
                            <div className="text">
                                <main>
                                    <h1>Have The Best With US</h1>
                                    <h2>Create your best style here</h2>
                                </main>
                            </div>
                        </div>
                        <div className="rightcontainer">
                            <Link className="btn" to="shop"> <LinkButton>here is the best styles for you!<FontAwesomeIcon icon={faAngleDoubleRight} size="20px"/></LinkButton> </Link> 
                        </div>  
                    </container>
                    
            </div>
            <Fashion>
               <FashionLayout/>
            </Fashion>
            <div id="section3" className="background">
                    <Backgroundvideo>{video2}</Backgroundvideo>
                    <container className="container">
                        <div className="rightcontainer">

                        <Link className="btn" to="shop"><LinkButton>Lets Design Your Place<FontAwesomeIcon icon={faAngleDoubleRight} size="20px"/></LinkButton></Link>

                        </div>

                        <div className="leftcontainer">
                            <div className="text">
                                <main>
                                    <h1>Design Your Place With US</h1>
                                    <h2>All Of Your peace Is Here</h2>     
                                </main>
                            </div>
                        </div>
                    </container>
            </div>
            <HomeDesign>
                <HomeDesignLayout/>
            </HomeDesign>

                           
                          
        </div>
    )
}
export default Homepage