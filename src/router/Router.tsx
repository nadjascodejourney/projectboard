import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@/layout/Layout";

import ErrorPage from "@/pages/ErrorPage";
import AboutPage from "@/pages/AboutPage";

import ProjectPage from "@/pages/ProjectPage";
import CVPage from "@/pages/CVPage";
import ContactPage from "@/pages/ContactPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/about",
          element: <AboutPage />,
        },
        { path: "/projects", element: <ProjectPage /> },
        {
          path: "cv",
          element: <CVPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
