import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";


const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" 
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/25539c29532269.55f7d6a0a8c71.jpg"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Restaurantcard = ()=>{
    return (
        <div className="res-card">
            <h3>Meghna Foods</h3>

        </div>
    )
}

const Body = ()=>{
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                <Restaurantcard/>


            </div>
        </div>
    )
}

const Applayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
}

const root = createRoot(document.getElementById("root"))
root.render(<Applayout/>)