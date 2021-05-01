import React from "react"
import banner from "../newsbanner.png"
import logo from "../logo.jpg"

const Header = () => {
    return (
        <div className="header">
            <img src={banner} style={{ width: 927, height: 300 }}></img>
            <div className="logo">
                <img src={logo}
                    style={{ width: 250, height: 200 }}
                    alt="logo" />
            </div>
        </div>
    )
}
export default Header