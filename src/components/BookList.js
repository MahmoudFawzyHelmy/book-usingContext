import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";

export default function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);
  return (
    <div className="book-list">
      {count}
      <button className="btn btn-info" onClick={incrementCount}>
        Click
      </button>
      {books.map((book) => {
        return (
          <BookShow
            key={book.id}
            book={book}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
}
