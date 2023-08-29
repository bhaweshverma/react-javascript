import RestaurantCard from "./RestaurantCard";
import { data } from "../utils/MockData";
import { useState } from "react";

const Body = () => {
  const [resData, setResData] = useState(data);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setResData(
              resData.filter((res) => parseFloat(res.avgRatingString) < 4.0)
            );
            console.log(resData); //12
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resData.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
