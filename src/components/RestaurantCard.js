import {CDN_URL} from "../utils/constants.js"

const Restaurantcard = (props)=>{
    const {resData}=props;
    const {cloudinaryId,name,cuisine,rating}=resData
    console.log(resData)
    return (
        <div className="res-card">
            <img className="flogo"
            src={CDN_URL
            +cloudinaryId+".jpg"}></img>
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>Sandeep Rating {rating}</h4>
            <h4>Nearst</h4>

        </div>
    )
}

export default Restaurantcard;
