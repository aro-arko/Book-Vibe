import { useParams } from "react-router-dom";

const BookDetails = () => {
  const id = useParams();
  console.log(id);
  return (
    <div>
      <h3>I am book Details</h3>
    </div>
  );
};

export default BookDetails;
