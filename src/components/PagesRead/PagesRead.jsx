import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getReadingList } from "../../utility/localStorage";

const PagesRead = () => {
  const allBooks = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);

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
    }
  }, [allBooks]);

  // Transform readBooks data to the format required by the chart
  const data = readBooks.map((book) => ({
    name: book.name,
    pages: book.totalPages,
  }));

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="max-w-7xl bg-[#f8f8f8] mt-12">
      <ResponsiveContainer width="100%" height={700} className="p-14">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="pages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesRead;
