import { CDN_URL } from "../utils/constants";
const RestrauntCard = (props) => {
  console.log(props);
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    props?.resdata?.info;
  return (
    <div className="m-4 p-4 w-[200px] bg-slate-200 rounded hover:bg-green-100 hover:shadow-teal hover:shadow">
      <div className="res-logo">
        <img
          alt="res-logo"
          className="rounded"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <h3 className="font-bold py-1">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
export const withPromotedLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black m-2 p-2 rounded-r-full">
          Open
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};
export default RestrauntCard;
