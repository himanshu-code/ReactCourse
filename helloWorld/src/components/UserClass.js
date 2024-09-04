import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: { name: "Himanshu", location: "Gurgaon" },
    };
    console.log(props);
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/himanshu-code");
    console.log(response);
    const json = await response.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, company, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="Avatar Logo"></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Company: {company}</h4>
      </div>
    );
  }
}

export default UserClass;
