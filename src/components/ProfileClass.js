import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // create state over here
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Profile Class Component Constructor");
  }

  async componentDidMount() {
    // this method gets called after the component is mounted(rendered)
    // this is the best place to make an API call
    const data = await fetch(" https://api.github.com/users/deep-t4run");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("Profile Class Component Mounted");
  }

  componentDidUpdate() {
    console.log("Profile Class Component Updated");
  }

  render() {
    const { count } = this.state;
    console.log("Profile Class Component Rendered");
    return (
      <div>
        <h2>Profile Class Component</h2>
        <h3>Name: {this.state.userInfo.name}</h3>
        <h3>Location: {this.state.userInfo.location}</h3>
        <img src={this.state.userInfo.avatar_url} alt="" />
        {/* <h3>Count:{this.state.count}</h3> */}
        <h3>Count:{count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count
        </button>
      </div>
    );
  }
}

export default Profile;
