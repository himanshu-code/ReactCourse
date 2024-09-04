import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <UserContext.Consumer>
        {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
      </UserContext.Consumer>
      <h2>lorem ipsum</h2>
      <UserClass name={"Himanshu"} location={"Gurgaon"} />
    </div>
  );
};

export default About;
