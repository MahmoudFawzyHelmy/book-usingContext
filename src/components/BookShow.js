import { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

export default function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useContext(BooksContext);
  const handleDelete = () => {
    deleteBookById(book.id);
  };
  const handleEditing = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }
  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200
`}
        alt="books"
      />
      <div> {content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditing}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
