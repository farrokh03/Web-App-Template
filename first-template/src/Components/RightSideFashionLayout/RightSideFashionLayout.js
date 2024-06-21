import React from "react";
import './RightSideFashionLayout.css';
import ImageAlbum from "../ImageAlbum/ImageAlbum";
import img1 from './../../photos/coat.jpg';
import img2 from './../../photos/portrait-young-adult-wearing-hoodie-mockup_23-2149296253.jpg';
import img3 from './../../photos/soft-blurred-blue-painting-abstract-background_120819-132.jpg';
import img4 from './../../photos/white_hoodie_mockup.jpg';
const imageSet1 = [img1, img2, img3, img4];

const RightSideFashionLayout = () =>{
    return(
        <div className="rightsidebox">   
        <ImageAlbum images={imageSet1} />
        <div className="rightsidetbox"></div>

            <div className="textbox1">

            </div>
            <div className="textbox2">

            </div>
            <div className="textbox3">

            </div>
    </div>
    );
}
export default RightSideFashionLayout