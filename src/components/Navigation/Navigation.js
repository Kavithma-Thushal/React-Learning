import React from "react";
import './Navigation.css'

export default function Navigation() {
    let string1 = "Customer Management";
    let string2 = "Item Management";
    let string3 = "Order Management";

    return (
        <div>
            <div id="navBar">
                <h2 id="navText">{string1}</h2>
            </div>
        </div>
    );
}