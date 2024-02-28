import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("Error:", error);
  return (
    <div className="error">
      <h1>Something went wrong</h1>
      <p>Please try again later</p>
      <h2>
        {error.status} : {error.statusText}
      </h2>
    </div>
  );
};

export default Error;
