import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { addItem } from "../../redux/cartSlice";
import { addFavorite } from "../../redux/favoritesSlice";

const BookView = () => {
  const books = useSelector((state) => state.books);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);

  //dinamic routes
  const { id } = useParams();
  const selectedBook = books.find((book) => book.id === parseInt(id, 10));

  //agregar al carrito
  const handleAddItem = (book) => {
    dispatch(addItem(book));
  };

  //agregar favorito
  const handleAddFavorite = (book) => {
   
    dispatch(addFavorite(book));
  };

  //Navigation
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  

  useEffect(() => {
    setIsFavorite(favorites.some((el) => el.id === Number(id)));
  }, [favorites, id]);

  return (
    <div className="w-full h-screen bg-white">
      {/* nav */}
      <div
        className="w-full h-1/6 flex justify-between bg-rose-900 items-start p-5 text-2xl font-bold text-white"
        style={{
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
        }}
      >
        <div className="z-10">
          <button onClick={goBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="z-10">
          <p>Cronopios</p>
        </div>
        <Link to={"/cart"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </Link>
      </div>

      <div className="h-3/6 p-5 flex justify-center">
        <div className="shadow-lg relative">
          <img className="h-full" src={selectedBook.imageUrl} alt="" />
          <div
            className="absolute bottom-4 right-4 bg-white w-8 h-8
          rounded-full flex justify-center items-center shadow-lg"
            onClick={() => handleAddFavorite(selectedBook)}
          >
            {isFavorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#F8333C"
                className="w-6 h-6"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div
        className="h-2/6 w-full bg-rose-900 relative p-5"
        style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px" }}
      >
        <p className="text-2xl text-white">{selectedBook.product_name}</p>
        <p className="text-white text-lg">{selectedBook.description}</p>
        <p className="text-3xl text-white">${selectedBook.price}</p>
        <p
          className="bg-black text-white absolute right-0 bottom-0 shadow-lg p-4"
          style={{ borderTopLeftRadius: "40px" }}
          onClick={() => handleAddItem(selectedBook)}
        >
          Agregar al carrito
        </p>
      </div>
    </div>
  );
};

export default BookView;
