import { useSelector } from "react-redux";
import MediumCard from "./MediumCard";
import { useParams, useNavigate } from "react-router-dom";

const CategoryView = () => {
  const { categoryName } = useParams();

  const books = useSelector((state) => state.books);
  const booksByCategory = books.filter(
    (book) => book.category === categoryName
  );

  function capitalizeFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //Navigation
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center z-1 flex flex-col"
      style={{
        backgroundImage:
          "URL('https://firebasestorage.googleapis.com/v0/b/proyecto-libreria-22941.appspot.com/o/pexels-pixabay-433333.jpg?alt=media&token=076edd07-af5c-4645-b60d-47b6ed2bc416')",
      }}
    >
      {/* NAV */}
      <div className="w-full h-40 flex justify-between p-5 text-2xl font-bold text-white">
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
          <p>{capitalizeFirstLetter(categoryName)}</p>
        </div>
      </div>

      {/* Lista */}
      <div
        className="flex-1 w-full bg-rose-900 z-10 shadow-md flex flex-col gap-3 items-center pt-6 pb-4 overflow-y-auto"
        style={{
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
        }}
      >
        {booksByCategory.map((book, i) => {
          return <MediumCard data={book} key={i} />;
        })}
      </div>

      {/* Fondo con opacity */}
      <div className="absolute bg-red-700 w-full h-screen opacity-50 z-2"></div>
    </div>
  );
};

export default CategoryView;
