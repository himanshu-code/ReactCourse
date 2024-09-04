import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log("response->" + JSON.stringify(json));
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestrauntMenu;
