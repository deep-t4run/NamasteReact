import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import useRestaurant from "../utils/useRestaurant";
const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <RestaurantMenuShimmer />
  ) : (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-12">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full md:w-48 md:h-full md:object-cover "
            src={CDN_URL + restaurant.cloudinaryImageId}
            alt=""
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Restaurant id: {resId}
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
            {restaurant?.name}
          </h1>
          <p className="mt-2 text-gray-500">
            {restaurant.avgRatingString} stars
          </p>
          <p className="mt-2 text-gray-500">{restaurant.costForTwoMessage}</p>
          <p className="mt-2 text-gray-500">
            {restaurant.locality}, {restaurant.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
