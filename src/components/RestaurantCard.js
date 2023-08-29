import { RESTAURANT_LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ resData } = props) => {
  let {
    name,
    avgRatingString,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    id,
    deliveryTime,
  } = resData;

  return (
    <div className="res-card">
      <img className="res-logo" src={RESTAURANT_LOGO_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
