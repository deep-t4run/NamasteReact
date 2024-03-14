import { CDN_URL } from "../config.js";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="w-64 h-auto p-4 m-4 shadow-lg bg-white flex flex-col rounded-ld hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        className="object-cover w-full rounded-t-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <h3 className="font-bold text-2xl mb-2">{name}</h3>
        <h4 className="text-gray-700">{cuisines.join(", ")}</h4>
        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 text-yellow-500 mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a.5.5 0 0 1 .5.5v7h7a.5.5 0 0 1 0 1h-7v7a.5.5 0 0 1-1 0v-7h-7a.5.5 0 0 1 0-1h7v-7A.5.5 0 0 1 8 0z" />
          </svg>
          <h4>{avgRating} stars</h4>
        </div>
        <h4 className="mt-2">{costForTwo}</h4>
        <h4 className="mt-2">{sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
