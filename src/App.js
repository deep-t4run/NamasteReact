import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

{
  /**
      Header
        -logo
        -List items
        - Cart
      Body
        -search bar
        -restaurant list
          -Restaurant card
            -Iamge
            -Name
            -Rating
            -Cusines
      Footer
        -links
        -copywright
      
  */
}

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
