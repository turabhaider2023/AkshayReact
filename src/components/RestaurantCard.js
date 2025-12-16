import { CDN_URL } from "../utils/constants.js";

const Restaurantcard = ({ resData }) => {

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    areaName,
  } = resData.info;

  return (
    <div className="res-card">
      <img
        className="flogo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default Restaurantcard;
