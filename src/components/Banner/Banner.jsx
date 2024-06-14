import "./Banner.css";
import Cover from "../../assets/images/cover.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mt-12">
      <div className="grid md:flex items-center justify-center pb-20 bg-[#f3f3f3] rounded-3xl">
        <div className="w-1/2">
          <h2 className="text-xl md:text-5xl font-bold ">
            Books to freshen up your bookshelf
          </h2>
          <Link to="/listed-books">
            <button className="btn bg-[#23BE0A] hover:bg-[#57b63d] h-16 px-7 text-lg text-white mt-12">
              View The List
            </button>
          </Link>
        </div>
        <div className="mt-12">
          <img className="mx-auto" src={Cover} alt="Img Error" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
