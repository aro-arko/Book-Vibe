import PropTypes from "prop-types";
import { IoLocationOutline, IoDocumentTextOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const WishList = ({ book }) => {
  const {
    id,
    image,
    name,
    author,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="mt-6 md:flex border rounded-2xl">
      <div className="w-1/4 py-6 pl-6 max-h-full overflow-hidden">
        <img
          src={image}
          alt="Book Image"
          className="rounded-xl h-full w-full"
        />
      </div>
      <div className="w-3/4 p-6">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="font-medium my-4">By: {author}</p>
        <div className="flex my-8">
          <p>
            <strong className="mr-4">Tag </strong>{" "}
            {tags.map((tag, index) => (
              <span
                className="text-[#23BE0A] font-medium bg-[#f4fbf2] px-4 py-2 rounded-3xl mr-3"
                key={index}
              >
                #{tag}
              </span>
            ))}
          </p>
          <p className="flex items-center ml-2">
            <IoLocationOutline className="h-6 w-6 mr-2"></IoLocationOutline>{" "}
            <span>Year of Publishing: {yearOfPublishing}</span>
          </p>
        </div>

        <div className="flex">
          <p className="flex items-center">
            <RiGroupLine className="h-6 w-6 mr-2" />
            <span>Publisher: {publisher}</span>
          </p>
          <p className="flex items-center ml-4">
            <IoDocumentTextOutline className="h-6 w-6 mr-2" />
            <span>Page {totalPages}</span>
          </p>
        </div>

        <hr className="my-4" />

        <div>
          <span className="text-[#328EFF] font-medium bg-[#e0eeff] px-4 py-2 rounded-3xl mr-3">
            Catergory: {category}
          </span>
          <span className="text-[#FFAC33] font-medium bg-[#fff3e1] px-4 py-2 rounded-3xl mr-3">
            Rating: {rating}
          </span>
          <Link to={`/book/${id}`}>
            <button className="text-white font-medium bg-[#23BE0A] px-4 py-2 rounded-3xl mr-3">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

WishList.propTypes = {
  book: PropTypes.object.isRequired,
};

export default WishList;
