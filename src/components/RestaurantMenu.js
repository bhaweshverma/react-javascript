import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  debugger;
  if (resInfo === null) return <Shimmer />;

  const res = resInfo?.cards[0]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      ?.itemCards;

  //console.log(itemCards);

  if (itemCards == undefined)
    return <h1>{"No menu available for " + res.name}</h1>;

  return (
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
