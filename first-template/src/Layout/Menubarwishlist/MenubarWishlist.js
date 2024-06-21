import React from "react";
import './MenubarWishlist.css'
import img1 from './../../photos/coat.jpg';
const MenubarWishlist = ()=>{
    return(
        <div className="wishlist">
                <div className="box-title">WishList</div>
                    <div className="wishlist-item">
                        <img className="wishlist-item-img" src={img1} alt=""/>
                        <div className="item-name">gray coat kosmos kospos kostos</div>
                        <div className="item-price">Price: 500$ </div>
                    </div>
                </div>
    );
}
export default MenubarWishlist