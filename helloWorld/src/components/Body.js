import RestrauntCard from "./Restraunt";
import resObj from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((res) => {
          return <RestrauntCard resdata={res} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
