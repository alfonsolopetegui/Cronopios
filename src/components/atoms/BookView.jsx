import React from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const books = [
  {
    id: 1,
    product_name: "Rayuela - Julio Cortázar",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/proyecto-libreria-22941.appspot.com/o/Libros%2FRayuela.jpg?alt=media&token=254e1c5f-8ed0-47ed-b908-fed605310547",
    price: 6500,
    description:
      "El amor turbulento de Oliveira y La Maga, los amigos del Club de la Serpiente, las caminatas por Paría en busca del cielo y el infierno tienen su reverso en la aventura simétrica de Oliveira, Talita y Traveler en un Buenos Aires teñido por el recuerdo.",
  },
  {
    id: 2,
    product_name: "Paula - Isabel Allende",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/proyecto-libreria-22941.appspot.com/o/Libros%2FPaula-de-Isabel-Allende.jpg?alt=media&token=dbb22a8a-a0d2-4c9e-b4e1-107ed57091b0",
    price: 5000,
    description:
      "Paula es un libro de memorias que deja el alma al descubierto, como una novela de suspenso, que se lee sin respirar. El punto de partida de estas páginas conmovedoras es una trágica experiencia personal.",
  },
  {
    id: 3,
    product_name: "El Flaco - Feinmann, Jose Pablo",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/proyecto-libreria-22941.appspot.com/o/Libros%2Fel-flaco_9789504925491.jpg?alt=media&token=659319af-39a8-46eb-9cc7-0042d24aa56a",
    price: 7900,
    description:
      "El Flaco, que tiene como eje esa relación que se inició en 2003 y terminó en 2006, muestra un perfil hasta ahora totalmente desconocido de Néstor Kirchner.",
  },
];

const BookView = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { id } = useParams();

  const selectedBook = books.find((book) => book.id === parseInt(id, 10));

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
        <img className="h-full shadow-lg" src={selectedBook.imageUrl} alt="" />
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
        >
          Agregar al carrito
        </p>
      </div>
    </div>
  );
};

export default BookView;
