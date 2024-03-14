import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";

const BodyShimmer = () => {
  return (
    <div>
      <ShimmerPostList
        postStyle="STYLE_THREE"
        col={4}
        row={2}
        gap={20}
        className="mt-10"
      />
    </div>
  );
};

export default BodyShimmer;
