import { RESTAURANT_LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ resData } = props) => {
  // let { name, avgRatingString, cloudinaryImageId, cuisines, costForTwo, id } =
  //   resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={RESTAURANT_LOGO_URL + resData?.cloudinaryImageId}
      />
      <h3>{resData?.name}</h3>
      <h4>{resData?.cuisines.join(", ")}</h4>
      <h4>{resData?.avgRatingString}</h4>
      <h4>{resData?.costForTwo}</h4>
      <h4>{resData?.locality}</h4>
    </div>
  );
};

export default RestaurantCard;
