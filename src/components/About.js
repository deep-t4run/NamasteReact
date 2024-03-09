// import React from "react";
// // import { Outlet } from "react-router-dom";
// import Profile from "./Profile";
// import ProfileClass from "./ProfileClass";
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>
//         Welcome to the about us page. We are a team of developers working to
//         make the world a better place.
//       </p>
//       {/* <Outlet /> */}
//       <Profile name={"Parth"} />
//       <ProfileClass name={"Tarun"} />
//     </div>
//   );
// };

// export default About;

import React from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("About Component Mounted");
  }

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>
          Welcome to the about us page. We are a team of developers working to
          make the world a better place.
        </p>
        {/* <Profile name={"Parth"} /> */}
        <ProfileClass name={"Tarun"} />
      </div>
    );
  }
}

export default About;
