import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { id, name, image, author, rating, category, tags } = book;
  return (
    <Link to={`/book/${id}`}>
      <div className="card w-96 bg-base-100 border border-[#f3f3f3]">
        <figure className="px-5 pt-5">
          <img src={image} alt="Book Image" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <div>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-[#23BE0A] bg-[#f4fbf2] mr-3 text-center rounded-3xl"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="card-title my-4">{name}</h2>
          <p>By: {author}</p>
          <hr className="border-t-0 border-dashed border-b-2 border-gray-500 my-4" />
          <div className="">
            <p className="float-start">{category}</p>
            <p className="flex items-center float-end">
              {rating}
              <CiStar className="ml-2 h-6 w-6"></CiStar>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
