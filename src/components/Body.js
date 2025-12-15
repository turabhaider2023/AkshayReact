import Restaurantcard from "./RestaurantCard.js";

import resList from "../utils/mockData.js";

import { useState } from "react";








const Body = ()=>{

    const [ListofRestro,setListofRestro]=useState(resList)



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