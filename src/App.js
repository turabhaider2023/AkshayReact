import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";





const resList = [
  {
    id: 1,
    name: "Spice Villa",
    cuisine: "North Indian",
    rating: 4.3,
    deliveryTime: "30-35 mins",
    priceForTwo: 400,
    cloudinaryId: "sample"
  },

  {
    id: 3,
    name: "Pizza Town",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    priceForTwo: 500,
    cloudinaryId: "pizza"
  },
  {
    id: 4,
    name: "Desi Dhaba",
    cuisine: "Punjabi",
    rating: 4.2,
    deliveryTime: "35-40 mins",
    priceForTwo: 450,
    cloudinaryId: "balloons"
  },
 
  {
    id: 6,
    name: "Tandoori Flames",
    cuisine: "BBQ",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    priceForTwo: 600,
    cloudinaryId: "woman"
  },
  {
    id: 7,
    name: "Chinese Wok",
    cuisine: "Chinese",
    rating: 4.1,
    deliveryTime: "25-30 mins",
    priceForTwo: 400,
    cloudinaryId: "pizza"
  },
  {
    id: 8,
    name: "Biryani House",
    cuisine: "Biryani",
    rating: 4.6,
    deliveryTime: "35-40 mins",
    priceForTwo: 550,
    cloudinaryId: "sample"
  },
  {
    id: 9,
    name: "Cafe Mocha",
    cuisine: "Cafe",
    rating: 4.3,
    deliveryTime: "20-25 mins",
    priceForTwo: 300,
    cloudinaryId: "coffee"
  },
  {
    id: 10,
    name: "South Express",
    cuisine: "South Indian",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    priceForTwo: 350,
    cloudinaryId: "mountain"
  },

  {
    id: 13,
    name: "Mexican Treat",
    cuisine: "Mexican",
    rating: 4.0,
    deliveryTime: "30-35 mins",
    priceForTwo: 500,
    cloudinaryId: "pizza"
  },
  {
    id: 14,
    name: "Kebab Corner",
    cuisine: "Mughlai",
    rating: 4.3,
    deliveryTime: "35-40 mins",
    priceForTwo: 600,
    cloudinaryId: "sample"
  },
 
];









const Restaurantcard = (props)=>{
    const {resData}=props;
    const {cloudinaryId,name,cuisine}=resData
    console.log(resData)
    return (
        <div className="res-card">
            <img className="flogo"
            src={"https://res.cloudinary.com/demo/image/upload/w_400,h_300,c_fill/"
            +cloudinaryId+".jpg"}></img>
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>38 minutes</h4>

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