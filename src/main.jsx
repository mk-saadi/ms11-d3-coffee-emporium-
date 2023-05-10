import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateCoffee from "./component/UpdateCoffee";
import AddCoffee from "./component/AddCoffee";
import Home from "./component/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3001/coffee"),
    },
    {
        path: "/addCoffee",
        element: <AddCoffee />,
    },
    {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:3001/coffee/${params.id}`),
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
