import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite, clearFavorites } from "../../redux/favoritesSlice";

const FavoritosView = ({ setViewMenu, setViewFavoritos }) => {
  const favoritos = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleClose = () => {
    setViewFavoritos(false);
    setViewMenu(true);
  };

  const handleRemoveFavorite = (book) => {
    dispatch(removeFavorite(book.id));
  };

  const handleClearFavorites = () => {
    dispatch(clearFavorites());
  };

  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold text-rose-500">Favoritos</h1>
      </div>
      <div className="mt-4 flex flex-col items-center gap-5">
        {favoritos &&
          favoritos.length > 0 &&
          favoritos.map((book, i) => {
            return (
              <div
                className="w-10/12 h-24 flex justify-between p-6 border shadow-sm
                  rounded-lg ml-3 mr-3 relative"
                key={i}
              >
                <Link to={`/books/${book.id}`}>
                  <img className="h-full" src={book.imageUrl} />
                </Link>
                <Link to={`/books/${book.id}`}>
                  <div>
                    <h2>{book.product_name}</h2>
                    <h2>${book.price}</h2>
                  </div>
                </Link>

                <button
                  onClick={() => handleRemoveFavorite(book)}
                  className="w-6 h-6 text-white border shadow-md absolute -top-4 -right-4 rounded-full bg-rose-500 flex justify-center items-center"
                >
                  x
                </button>
              </div>
            );
          })}
      </div>
      <div className="flex justify-around mt-8">
        <button
          onClick={handleClearFavorites}
          className="text-xl text-white w-24 p-2 bg-rose-500 rounded-lg mr-3"
        >
          Vaciar
        </button>
        <button
          onClick={handleClose}
          className="text-xl text-white w-24 p-2 bg-rose-500 rounded-lg"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default FavoritosView;
