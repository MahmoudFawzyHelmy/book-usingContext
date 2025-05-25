import { useContext, useState } from "react";
import BooksContext from "../context/books";

export default function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="input"
          value={title}
          onChange={handleChange}
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}
