import React, { useState } from "react";
import "./Header.scss";
import basketIcon from "./../../img/icons/icon.svg";
import Basket from "../Basket/Basket";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="header">
            <div className="container">
                <h1>kupyRaba.com</h1>
                <div onClick={()=>setOpen(!open)} className="header__basket">
                    <img src={basketIcon} alt="кошик" />
                    <span>{"0грн."}</span>
                     <div className={open?"header__basket_container open":"header__basket_container"}>
                        <Basket />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
