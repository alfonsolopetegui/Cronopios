import "./App.css";
import BookFinder from "./components/molecules/BookFinder";
import Home from "./components/molecules/Home";
import Cart from "./components/molecules/Cart";
import { Route, Routes } from "react-router-dom";
import BookView from "./components/atoms/BookView";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bookFinder" element={<BookFinder />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/books/:id" element={<BookView/>}></Route>
      </Routes>
    </>
  );
}

export default App;
