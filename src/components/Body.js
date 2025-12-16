import Restaurantcard from "./RestaurantCard.js";

import resList from "../utils/mockData.js";

import { useState,useEffect } from "react";








const Body = ()=>{

    const [ListofRestro,setListofRestro]=useState([])

    useEffect(()=>{
        fetchData();

    },[])

    const fetchData =async()=>{
       const data= await fetch
        ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()

        console.log(json)

        setListofRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    };

    




    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{ 
                    const filteredList=ListofRestro.filter((res)=>res.info.avgRating > 4.3);
                    setListofRestro(filteredList)
                
                }}
                
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
               { ListofRestro.map((restaurant) =>(<Restaurantcard key={restaurant.info.id} 
               resData={restaurant}/>))}
                
                
              
                



            </div>
        </div>
    )
}
export default Body;