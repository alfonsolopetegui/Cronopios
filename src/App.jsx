import "./App.css";
import BookFinder from "./components/molecules/BookFinder";
import Home from "./components/molecules/Home";
import Cart from "./components/molecules/Cart";
import { Route, Routes } from "react-router-dom";
import BookView from "./components/atoms/BookView";
import CategoryView from "./components/atoms/CategoryView";
import UserView from "./components/molecules/UserView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bookFinder" element={<BookFinder />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/books/:id" element={<BookView />}></Route>
        <Route
          path="/category/:categoryName"
          element={<CategoryView />}
        ></Route>
        <Route path="/userView" element={<UserView />}></Route>
      </Routes>
    </>
  );
}

export default App;
