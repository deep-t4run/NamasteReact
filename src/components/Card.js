import React from "react";
// import { restaurantList } from "../config";

const RestaurantCard = (props) => {
  const { name, cuisines, rating, image } = props.restaurantData; // de-structuring the props
  return (
    <div className="card">
      <img src={image} alt={name} srcSet="" />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
