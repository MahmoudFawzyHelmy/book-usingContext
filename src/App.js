import { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

export default function App() {
  const { fetchData } = useContext(BooksContext);
  useEffect(() => {
    fetchData();
  });

  return (
    <div className="app my-5">
      <h2 className="text-center lead">Reading List</h2>
      <BookList />
      <BookCreate />
    </div>
  );
}
