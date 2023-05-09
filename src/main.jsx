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
    },
    {
        path: "/addCoffee",
        element: <AddCoffee />,
    },
    {
        path: "updateCoffee",
        element: <UpdateCoffee />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
