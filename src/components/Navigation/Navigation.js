import React from "react";
import './Navigation.css'

export default function Navigation() {
    let string1 = "React App";
    let string2 = "NavBar";
    let string3 = "WEB";
    return (
        <div>
            <div id="navBar">
                <h2 id="navText">{string1}</h2>
            </div>
        </div>
    );
}