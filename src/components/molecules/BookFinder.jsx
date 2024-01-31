import { Link } from "react-router-dom";
import SmallCard from "../atoms/SmallCard";
import { useState } from "react";

const books = [
  {
    id: 1,
    product_name: "Rayuela - Julio Cortázar",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/proyecto-libreria-22941.appspot.com/o/Libros%2FRayuela.jpg?alt=media&token=254e1c5f-8ed0-47ed-b908-fed605310547",
    price: 6500,
  },
  {
    id: 2,
    product_name: "Paula - Isabel Allende",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/proyecto-libreria-22941.appspot.com/o/Libros%2FPaula-de-Isabel-Allende.jpg?alt=media&token=dbb22a8a-a0d2-4c9e-b4e1-107ed57091b0",
    price: 5000,
  },
  {
    id: 3,
    product_name: "El Flaco - Feinmann, Jose Pablo",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/proyecto-libreria-22941.appspot.com/o/Libros%2Fel-flaco_9789504925491.jpg?alt=media&token=659319af-39a8-46eb-9cc7-0042d24aa56a",
    price: 7900,
  },
];

const BookFinder = () => {
  const [search, setSearch] = useState("");

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative z-1 flex flex-col overflow-hidden"
      style={{
        backgroundImage:
          "URL('https://firebasestorage.googleapis.com/v0/b/proyecto-libreria-22941.appspot.com/o/pexels-pixabay-433333.jpg?alt=media&token=076edd07-af5c-4645-b60d-47b6ed2bc416')",
      }}
    >
      {/* Fondo con opacity */}
      <div className="absolute bg-red-700 w-full h-full opacity-50 z-2"></div>

      {/* NAV */}
      <div className="w-full h-1/4 flex justify-between items-start p-5 text-2xl font-bold text-white">
        <div className="z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="z-10">
          <p>
            Crono<span>pios</span>
          </p>
        </div>
        <div className="z-10">
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
      </div>

      {/* Div Fucsia */}
      <div
        className="w-full h-3/4 bg-rose-900 relative z-10 shadow-md"
        style={{ borderTopLeftRadius: "120px", borderTopRightRadius: "120px" }}
      >
        {/* Search */}
        <input
          className="w-9/12 shadow-md absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 rounded-full p-4 outline-none focus:ring-4 focus:ring-red-900"
          placeholder="Rayuela..."
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        {/* Autocomplete */}
        {search && (
          <div className="w-10/12 h-auto left-1/2 top-10 transform -translate-x-1/2 absolute bg-white flex flex-col z-50">
            {books
              .filter((book) =>
                book.product_name.toLowerCase().includes(search.toLowerCase())
              )
              .map((result, i) => {
                return (
                  <Link
                    to={`/books/${result.id}`}
                    // className="flex w-full h-20"
                    key={i}
                  >
                    <div className="flex w-full h-20">
                      <div className="w-1/4 flex">
                        <img className="" src={result.imageUrl} />
                      </div>
                      <p className="w-3/4 flex justify-center items-center">
                        {result.product_name}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
        <div className="carousel w-full mt-14">
          <p className="w-full relative text-center text-2xl text-white mb-2 font-semibold">
            Recomendados
          </p>
          {/* Carousel Recomendados */}
          <div className="flex gap-2 overflow-scroll scrollbar-hide p-2">
            {books.map((book, i) => {
              return (
                <Link to={`/books/${book.id}`} key={i}>
                  <SmallCard data={book} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFinder;
