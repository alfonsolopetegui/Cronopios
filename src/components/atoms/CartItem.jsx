import React from "react";

const CartItem = ({ book }) => {
  return (
    <div className="flex w-10/12 bg-white rounded-lg p-2 h-20 shadow-md">
      <div className="w-1/4 flex">
        <img className="" src={book.imageUrl} />
      </div>
      <div className="flex flex-col">
        <p className="w-3/4 flex justify-center items-center text-sm">
          {book.product_name}
        </p>
        <p>${book.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
