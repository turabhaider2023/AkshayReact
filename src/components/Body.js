import Restaurantcard from "./RestaurantCard.js";

import resList from "../utils/mockData.js";

import { useState,useEffect } from "react";








const Body = ()=>{

    const [ListofRestro,setListofRestro]=useState(resList)

    useEffect(()=>{
        fetchData();

    },[])

    const fetchData =async()=>{
       const data= await fetch
        ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = data.json()
        console.log(json)

    };

    




    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{ 
                    const filteredList=ListofRestro.filter((res)=>res.rating>4.3);
                    setListofRestro(filteredList)
                
                }}
                
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
               { ListofRestro.map((restaurant) =>(<Restaurantcard key={restaurant.id} 
               resData={restaurant}/>))}
                
                
              
                



            </div>
        </div>
    )
}
export default Body;