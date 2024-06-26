import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Register from "./components/Register.jsx";
import Todo from "./components/Todo.jsx";
import { Toaster } from "react-hot-toast";

const baseURL = "/todos";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
  ],
  { basename: baseURL }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
      toastOptions={{
        success: {
          style: {
            background: "#20b00af8",
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "#e54110",
            color: "#fff",
          },
        },
      }}
    />
  </React.StrictMode>
);
