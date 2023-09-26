import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch(MENU_API + resId);

    let json = await response.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
