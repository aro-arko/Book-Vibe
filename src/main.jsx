import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import Read from "./components/Read/Read.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import PagesRead from "./components/PagesRead/PagesRead.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/pages-read",
        element: <PagesRead></PagesRead>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
