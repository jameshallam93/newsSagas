import React from "react"

import logo from "../logo.jpg"

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <h1>Custom News</h1>
                <h2>News your way</h2>
                <div className="logo">
                    <img src={logo}
                        style={{ width: 250, height: 180 }}
                        alt="logo" />
                </div>
            </div>
        </div>
    )
}
export default Header