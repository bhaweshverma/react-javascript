import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.995899019833582&lng=77.70249947905542&restaurantId=17166&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);

    setResInfo(json);
  };

  const { name, avgRatingString, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card?.itemCards;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h4>
        {avgRatingString} rating and {costForTwoMessage}
      </h4>
      <h4>{cuisines.join(", ")}</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((card) => {
          <li>{card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
