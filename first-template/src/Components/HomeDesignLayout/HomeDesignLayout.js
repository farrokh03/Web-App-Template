import React from "react";
import ImageAlbum from "../ImageAlbum/ImageAlbum";
import './HomeDesignLayout.css';

import img1 from './../../photos/coat.jpg';
import img2 from './../../photos/portrait-young-adult-wearing-hoodie-mockup_23-2149296253.jpg';
import img3 from './../../photos/soft-blurred-blue-painting-abstract-background_120819-132.jpg';
import img4 from './../../photos/white_hoodie_mockup.jpg';

const imageSet2 =[img4,img3,img2,img1];

const HomeDesignLayout = () =>{

    return(
     <div className="partitionhomedesign">
       
        <div className="rightsideboxhomedesign"> 
            <div className="textboxhomedesign">
                my name is faraz 
                and this is my first react template 
                and this a onlineshop website
                welcome to my site!
            </div>   
            <ImageAlbum images={imageSet2} />
            <div className="textboxhomedesign">
                my name is faraz 
                and this is my first react template 
                and this a onlineshop website
                welcome to my site!
            </div>
        </div>
        <div className="leftsideboxhomedesign">
            <div className="tboxhomedesign">
                hello!
                my name is faraz 
                and this is my first react template 
                and this a onlineshop website
                welcome to my site!
            </div>
            <div className="tboxhomedesign">
            hello!
                my name is faraz 
                and this is my first react template 
                and this a onlineshop website
                welcome to my site!
            </div>
        </div>
    </div>

);};
export default HomeDesignLayout;