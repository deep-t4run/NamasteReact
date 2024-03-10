import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <img src={CDN_URL + restaurant.cloudinaryImageId} alt="" />
        <h1>{restaurant?.name}</h1>
        <h3>{restaurant.avgRatingString} stars</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
        <h3>
          {restaurant.locality}, {restaurant.city}
        </h3>
      </div>
      <div></div>
    </div>
  );
};

export default RestaurantMenu;
