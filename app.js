import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Images/Food Villa Logo.jpeg";

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

const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={logo} alt="Logo" />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    id: 1,
    name: "Burger King",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cuisines: ["Burger", "American"],
    rating: "4.3",
  },
  {
    id: 2,
    name: "Pizza Hut",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7",
    cuisines: ["Pizza", "Italian"],
    rating: "4.1",
  },
  {
    id: 3,
    name: "Subway",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/63178e3e64d503a479f2a2048a474552",
    cuisines: ["Sandwich", "Salad"],
    rating: "4.2",
  },
  {
    id: 4,
    name: "KFC",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/56c9ab92bd79745fd152a30fa2525426",
    cuisines: ["Chicken", "Fast Food"],
    rating: "4.0",
  },
  {
    id: 5,
    name: "Domino's",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/hsb5yt3qhechxockrbut",
    cuisines: ["Pizza", "Beverages"],
    rating: "4.4",
  },
  {
    id: 6,
    name: "McDonald's",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/ecd32b841549ce6bfd993260a2086c1f",
    cuisines: ["Burger", "Fries", "Shakes"],
    rating: "3.9",
  },
  {
    id: 7,
    name: "Starbucks",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/182191ab163770437b62861a6f987709",
    cuisines: ["Coffee", "Tea", "Snacks"],
    rating: "4.5",
  },
  {
    id: 8,
    name: "Sushi Express",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/yjjsqjfuke3vkl5y1fsb",
    cuisines: ["Sushi", "Japanese"],
    rating: "4.2",
  },
  {
    id: 9,
    name: "Taco Bell",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/d3b3db238b6448c3f297c851e9d0b96b",
    cuisines: ["Taco", "Mexican"],
    rating: "4.0",
  },
  {
    id: 10,
    name: "Haldiram's",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/bczz5ti3gpe2hfnvsgg4",
    cuisines: ["Indian", "Sweets", "Snacks"],
    rating: "4.3",
  },
];

const RestaurantCard = (props) => {
  const { name, cuisines, rating, image } = props.restaurantData;
  return (
    <div className="card">
      <img src={image} alt="Burger King" srcSet="" />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restraunt-list">
      {restaurantList.map((restaurant) => {
        return (
          <RestaurantCard restaurantData={restaurant} key={restaurant.id} />
        );
      })}
      {/* <RestaurantCard restaurantData={restaurantList[0]} />
      <RestaurantCard restaurantData={restaurantList[1]} />
      <RestaurantCard restaurantData={restaurantList[2]} />
      <RestaurantCard restaurantData={restaurantList[3]} />
      <RestaurantCard restaurantData={restaurantList[4]} />
      <RestaurantCard restaurantData={restaurantList[5]} />
      <RestaurantCard restaurantData={restaurantList[6]} />
      <RestaurantCard restaurantData={restaurantList[7]} />
      <RestaurantCard restaurantData={restaurantList[8]} />
      <RestaurantCard restaurantData={restaurantList[9]} /> */}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

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
