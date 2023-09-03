import RestaurantCard from "./RestaurantCard";
import { data } from "../utils/MockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local state varibale
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.995899019833582&lng=77.70249947905542&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    // console.log(
    //   json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants[0]
    //     .info
    // );
    //Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter(
                (res) => parseFloat(res.info.avgRatingString) > 4.3
              )
            );
            console.log(listOfRestaurants); //12
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
