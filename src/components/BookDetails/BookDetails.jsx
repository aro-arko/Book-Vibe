import { useLoaderData, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./BookDetails.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import {
  getReadingList,
  getWishlist,
  saveReadingList,
  saveWishlist,
} from "../../utility/localStorage";

const BookDetails = () => {
  const { bookId } = useParams();

  const books = useLoaderData();

  const idInt = parseInt(bookId);

  const book = books.find((book) => book.id === idInt);
  console.log(book);

  const {
    id,
    image,
    name,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  // Read Book Section
  const [isRead, setIsRead] = useState(false);
  const allBookId = getReadingList();
  const handleRead = (id) => {
    let found = false;
    for (const readBookId of allBookId) {
      if (readBookId === id) {
        found = true;
        break;
      }
    }
    if (!found) {
      setIsRead(true);
      toast.success("Added to Readings List");
      saveReadingList(id);
    } else {
      toast.warning("Already in the Readings List!");
    }
  };
  // Wishlist section
  const [isWishlist, setIsWishlist] = useState(false);
  const allWishlistId = getWishlist();
  const handleWishlist = (id) => {
    if (isRead === false) {
      let found = false;
      for (const readWishlistId of allWishlistId) {
        if (readWishlistId === id) {
          found = true;
          break;
        }
      }
      if (!found) {
        setIsWishlist(true);
        toast.success("Added to Wishlist");
        saveWishlist(id);
      } else {
        toast.warning("Already in the Wishlist");
      }
    } else {
      toast.error("You've already read this book'");
    }
  };
  return (
    <div className="grid md:grid-cols-2 gap-12 mt-14">
      <div className="max-h-full overflow-hidden">
        <img className="h-full w-full" src={image} alt="" />
      </div>
      <div>
        <h2 className="text-4xl book-title font-semibold">{name}</h2>
        <p className="font-medium my-4">By: {author}</p>
        <hr className="mt-2 mb-4" />
        <p className="font-medium mb-4">{category}</p>
        <hr className="mb-6" />
        <p>
          <strong>Review </strong>
          {review}
        </p>
        <p className="my-6">
          <strong className="mr-4">Tag </strong>
          {tags.map((tag, index) => (
            <span
              className="text-[#23BE0A] font-medium bg-[#f4fbf2] px-4 py-2 rounded-3xl mr-3"
              key={index}
            >
              #{tag}
            </span>
          ))}
        </p>
        <hr />

        <table className="my-6">
          <tbody>
            <tr>
              <td>Number of Pages:</td>
              <td className="pl-10">
                <strong>{totalPages}</strong>
              </td>
            </tr>

            <tr>
              <td>Publisher:</td>
              <td className="pl-10">
                <strong>{publisher}</strong>
              </td>
            </tr>
            <tr>
              <td>Year of Publishing:</td>
              <td className="pl-10">
                <strong>{yearOfPublishing}</strong>
              </td>
            </tr>
            <tr>
              <td>Rating:</td>
              <td className="pl-10">
                <strong>{rating}</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => handleRead(id)}
          className="btn border-[#b9b9b9] bg-[#ffffff] px-6 rounded-lg mr-4"
        >
          Read
        </button>
        <button
          onClick={() => handleWishlist(id)}
          className="btn bg-[#50B1C9] px-6 rounded-lg text-white"
        >
          Wishlist
        </button>

        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default BookDetails;
