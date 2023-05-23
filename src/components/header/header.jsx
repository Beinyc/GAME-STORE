import React from "react";
import './header.css'
import { Link } from "react-router-dom";
import { CartBlock } from "../cartBlocl/CartBlocl";

export const Header = () => {
    return (
        <div className="header">
          <div className="wrapper">
            <Link to="/" className="header__store-title">
              GameStore
            </Link>
          </div>
          <div className="wrapper header_cart-btn-wrapper">
            <CartBlock/>
          </div>
        </div>
    );
  }