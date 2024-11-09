import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Login } from "./application/components/Login/Login.tsx";
import { Home } from "./application/components/Home/Home.tsx";
import "./index.css";
import { Header } from "./application/components/Header/Header.tsx";
import { Footer } from "./application/components/Footer/Footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
