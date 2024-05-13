import { CDN_URL } from "../utils/constants";
const RestrauntCard = (props) => {
  console.log(props);
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    props?.resdata?.info;
  return (
    <div className="res-card">
      <div className="res-logo">
        <img alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
export default RestrauntCard;
