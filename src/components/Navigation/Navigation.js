import React from "react";
import './Navigation.css'

export default function Navigation() {
    let logo = "React | ";
    let customer = "Customer Management";
    let item = "Item Management";
    let calculate = 10 + 20;
    let array = [12, 23, 34, 45, 56];
    let studentObj = {"name": "Thushal", "age": "23", "address": "Galle"};      //Error
    let bool = 10 < 20;
    let log = console.log("Hello");

    return (
        <div>
            <div id="navBar">
                <h2 id="navText">{logo + customer}</h2>
            </div>
        </div>
    );
}