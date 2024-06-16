import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // console.log(books);
  return (
    <div>
      <div className="mt-24">
        <h2 className="text-4xl text-center font-bold mb-4">Books</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10 pb-20">
        {books.map((book) => (
          <Book book={book} key={book.id}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
