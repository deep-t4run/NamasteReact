import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h1",
//   },
//   "Namaste Everyone! from Parcel"
// );

const heading = (
  <h1 id="title1" className="h1" key="h1">
    Namaste React! Welcome from heading element
  </h1>
);

const Title = () => {
  return (
    <h1 id="title" className="heading" key="heading">
      Welcome from Title component
    </h1>
  );
};

// React Components
// functional component
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      {/* {Title()} */}
      <Title />
      <h1>Namaste React : Functional Component</h1>
      <h2>Welcome from HeaderComponent</h2>
      {console.log("Write any JS code")}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeaderComponent />);
