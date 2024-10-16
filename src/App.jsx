import React, { lazy, Suspense } from "react";
const Home = lazy(() => import("./components/Home/home"))
const Events = lazy(() => import("./components/Events/Events"))
import Member from "./components/People/People";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Library from "./components/Library/Library";
import OpenProjects from "./components/OpenProjects/OpenProjects";
import Layout from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Suspense fallback={"Loading..."}><Home /></Suspense> },
        { path: "/events", element: <Suspense fallback={"Loading..."}><Events /></Suspense> },
        { path: "/people", element: <Member /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "/contact-us", element: <Contact /> },
        { path: "/library", element: <Library /> },
        { path: "/open-projects", element: <OpenProjects /> },
      ],
    },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
