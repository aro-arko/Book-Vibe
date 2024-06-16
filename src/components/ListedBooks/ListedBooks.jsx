import { FaChevronDown } from "react-icons/fa";
import "./ListedBooks.css";
import { getReadingList, getWishlist } from "../../utility/localStorage";
import Read from "../Read/Read";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import WishList from "../WishList/WishList";
const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [displayReadBooks, setDisplayReadBooks] = useState([]);

  useEffect(() => {
    const storedReadBooks = getReadingList();
    if (allBooks.length > 0) {
      const alreadyReadBooks = [];
      for (const id of storedReadBooks) {
        const book = allBooks.find((book) => book.id === id);
        if (book) {
          alreadyReadBooks.push(book);
        }
      }
      setReadBooks(alreadyReadBooks);
      setDisplayReadBooks(alreadyReadBooks);
    }
  }, [allBooks]);

  console.log(displayReadBooks);

  const [displayWishlist, setDisplayWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = getWishlist();
    if (allBooks.length > 0) {
      const alreadyWishlist = [];
      for (const id of storedWishlist) {
        const book = allBooks.find((book) => book.id === id);
        if (book) {
          alreadyWishlist.push(book);
        }
      }
      setDisplayWishlist(alreadyWishlist);
    }
  }, [allBooks]);

  return (
    <div className="mt-9">
      <div className="h-24 bg-[#f3f3f3] flex items-center justify-center rounded-2xl">
        <h3 className="text-3xl font-bold text-center">Book</h3>
      </div>
      <div className="text-center mt-8">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white">
            Sort By <FaChevronDown></FaChevronDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-lg whitespace-nowrap"
          aria-label="Read Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {displayReadBooks.map((book) => (
            <Read key={book.id} book={book} />
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-lg whitespace-nowrap"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {displayWishlist.map((book) => (
            <WishList key={book.id} book={book}></WishList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
