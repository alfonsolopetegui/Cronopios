import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import MisDatosView from "../atoms/MisDatosView";
import FavoritosView from "../atoms/FavoritosView";

const UserView = () => {
  const user = useSelector((state) => state.user);

  //Manejar las vistas de cada opcion del menu
  const [viewMenu, setViewMenu] = useState(true);
  const [viewMisDatos, setViewMisDatos] = useState(false);
  const [viewFavoritos, setViewFavoritos] = useState(false);

  //Navigation
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleMenu = (e) => {
    // console.log('handle menu')
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === "mis-datos") {
      setViewMenu(false);
      setViewMisDatos(true);
    }

    if (e.currentTarget.id === "favoritos") {
      setViewMenu(false);
      setViewFavoritos(true);
    }
  };

  const handleCloseMenu = () => {};

  return (
    <>
      <div className="w-full h-screen flex flex-col relative">
        {/* Nav */}
        <nav className="w-full h-48 bg-rose-600 flex justify-center items-center shadow-md">
          <button onClick={goBack} className="absolute top-4 left-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                fillRule="evenodd"
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h1 className="text-white text-2xl font-semibold">{user.name}</h1>
          <div
            className="absolute top-48 left-1/2 w-32 h-32 rounded-full shadow-xl bg-cover bg-center border-4"
            style={{
              backgroundImage: `URL(${user.imageUrl})`,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </nav>

        {/* Menu */}
        {viewMenu && (
          <div className="w-full h-auto mt-28">
            <ul>
              <li
                onClick={(e) => handleMenu(e)}
                id="mis-datos"
                className="text-2xl p-5 border-b border-t flex"
              >
                <Link className="flex items-center gap-5">
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <p>Mis datos</p>
                </Link>
              </li>
              <li className="text-2xl p-5 border-b">
                <Link className="flex items-center gap-5">
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
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>

                  <p>Mis compras</p>
                </Link>
              </li>
              <li
                onClick={(e) => handleMenu(e)}
                id="favoritos"
                className="text-2xl p-5 border-b"
              >
                <Link className="flex items-center gap-5">
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

                  <p>Favoritos</p>
                </Link>
              </li>
              <li className="text-2xl p-5 border-b">
                <Link className="flex items-center gap-5">
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
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                  <p>Cerrar sesión</p>
                </Link>
              </li>
            </ul>
          </div>
        )}

        {viewMisDatos && (
          <MisDatosView
            setViewMenu={setViewMenu}
            setViewMisDatos={setViewMisDatos}
          />
        )}
        {viewFavoritos && (
          <FavoritosView
            setViewMenu={setViewMenu}
            setViewFavoritos={setViewFavoritos}
          />
        )}
      </div>
    </>
  );
};

export default UserView;
