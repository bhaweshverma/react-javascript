import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    console.log(json?.data?.cards[0]?.card?.card?.info.name);

    setResInfo(json.data);
  };

  // const {
  //   name = "",
  //   avgRatingString = "",
  //   cuisines = [],
  //   costForTwoMessage = "",
  // } = {
  //   name: "The Punjabi Rasoi",
  //   city: "Bangalore",
  //   slugs: {
  //     restaurant: "the-punjabi-rasoi-hsr-hsr",
  //     city: "bangalore",
  //   },
  //   uniqueId: "a9a650fc-395e-433e-a3d8-54536e683317",
  //   cloudinaryImageId: "ps7fixum6gnpn8rfrdkz",
  //   locality: "3rd Sector",
  //   areaName: "HSR Layout",
  //   costForTwo: "80000",
  //   costForTwoMessage: "₹800 for two",
  //   cuisines: ["North Indian"],
  //   avgRatingString: "4.2",
  // };

  const res = resInfo?.cards[0]?.card?.card?.info;

  //console.log(res);

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      ?.itemCards;

  console.log(itemCards);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{res.name}</h1>
      <h4>
        {res.avgRatingString} rating and {res.costForTwoMessage}
      </h4>
      <h4>{res.cuisines.join(", ")}</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, i) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs{" "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
