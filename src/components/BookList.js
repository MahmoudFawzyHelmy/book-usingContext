import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-book-context";

export default function BookList() {
  const { books } = useBooksContext();
  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookShow key={book.id} book={book} />;
      })}
    </div>
  );
}
