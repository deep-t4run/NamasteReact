import React, { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./Card";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for Restaurants"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, restaurantList);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard restaurantData={restaurant} key={restaurant.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
