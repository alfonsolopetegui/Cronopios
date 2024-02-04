import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ isNavVisible, setIsNavVisible }) => {
  const [showSubcategories, setShowSubcategories] = useState(false);

  return (
    <nav
      className={`fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm z-30 ${
        isNavVisible ? "" : "hidden"
      }`}
    >
      <ul className="absolute top-0 left-0 bottom-0 text-2xl w-8/12 py-4 bg-white drop-shadow-2xl z-30">
        <li className="border-b border-inherit">
          <Link to={'/userView'} className="block p-4" aria-current="true">
            Mi cuenta
          </Link>
        </li>
        <li
          className="border-b border-inherit block"
          onClick={() => setShowSubcategories(!showSubcategories)}
        >
          <p className="p-4" onClick={() => setShowSubcategories(!showSubcategories)}>Categorías</p>
          {showSubcategories && (
            <ul className="">
              <li>
                <Link
                  to="/category/novela"
                  className="block p-4 border-t border-b ml-3"
                >
                  Novela
                </Link>
              </li>
              <li>
                <Link to="/category/historia" className="block p-4 border-b ml-3">
                  Historia
                </Link>
              </li>
              <li>
                <Link to="/category/ciencia" className="block p-4 border-b ml-3">
                  Ciencia
                </Link>
              </li>
              <li>
                <Link to="/category/arte" className="block p-4 border-b ml-3">
                  Arte
                </Link>
              </li>
              <li>
                <Link to="/category/filosofia" className="block p-4 ml-3">
                  Filosofía
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="border-b border-inherit">
          <Link className="block p-4">Ofertas</Link>
        </li>
        <li className="border-b border-inherit">
          <Link className="block p-4">Contacto</Link>
        </li>
      </ul>

      <button
        onClick={() => setIsNavVisible(false)}
        className="absolute top-0 right-0 bottom-0 left-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 absolute top-2 left-2"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Nav;
