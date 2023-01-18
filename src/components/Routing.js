import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import About from "./About";
import Book from "./Book";
import BookList from "./BookList";
import BooksLayout from "./BooksLayout";
import Contact from "./Contact";
import Home from "./Home";
import NewBook from "./NewBook";
import NotFound from "./NotFound";
import OtherLayout from "./OtherLayout";

function Routing() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/books"}>Books</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksLayout />}>
          <Route index element={<BookList />} />
          <Route path="new" element={<NewBook />} />
          <Route path=":id" element={<Book />} />
        </Route>
        <Route element={<OtherLayout />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
