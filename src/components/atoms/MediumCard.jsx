import React from "react";

const MediumCard = ({data}) => {
  return (
    <div className="w-10/12 p-1 h-72 rounded-md bg-white shadow-md">
      <div className="h-3/4 flex justify-center items-center p-1 pt-4">
        <img className="mb-2 shadow-lg h-full" src={data.imageUrl} alt="" />
      </div>
      <div className="h-1/4 px-4">
        <h3 className="text-xl">{data.product_name}</h3>
        <h2 className="font-semibold text-2xl">${data.price}</h2>
      </div>
    </div>
  );
};

export default MediumCard;
