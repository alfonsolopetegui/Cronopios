import { Link, useNavigate } from "react-router-dom";

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

const Cart = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

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
      <div className="w-full h-1/5 flex justify-between items-start p-5 text-2xl font-bold text-white">
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
          <p>Mis compras</p>
        </div>
        <div className="z-10">
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      </div>

      {/* Div Fucsia */}
      <div
        className="w-full h-4/5 bg-rose-900 relative z-10 shadow-md"
        style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px" }}
      >
        {/* Items carrito */}
        <div className="w-full h-4/5 flex flex-col items-center mt-5 gap-2">
          {books.map((book, i) => {
            return (
              <div
                className="flex w-10/12 bg-white rounded-lg p-2 h-20 shadow-md"
                key={i}
              >
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
          })}
        </div>
        {/* Totales */}
        <div className="w-full h-1/5 flex justify-between items-center p-5">
          <p className="flex items-center justify-center text-white text-3xl">
            $19.690
          </p>
          <button className="bg-white text-2xl px-10 py-6 h-8 rounded-full shadow-md flex justify-center items-center">
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
