const SmallCard = ({ data }) => {
  return (
    <div className="w-40 p-1 h-72 rounded-md bg-white shadow-md">
      <div className="h-3/4 flex justify-center items-center p-1">
        <img className="mb-2 shadow-lg w-4/5" src={data.imageUrl} alt="" />
      </div>
      <div className="h-1/4">
        <h3 className="text-sm">{data.product_name}</h3>
        <h2 className="font-semibold">${data.price}</h2>
      </div>
    </div>
  );
};

export default SmallCard;
