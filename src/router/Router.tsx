import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@/layout/Layout";

import ErrorPage from "@/pages/ErrorPage";
import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import WebdevProjectPage from "@/pages/WebdevProjectPage";
import ContactPage from "@/pages/ContactPage";
import Imprint from "@/pages/Imprint.tsx";
import WebdesignProjectsPage from "@/pages/WebdesignProjectsPage";
import OtherProjectsPage from "@/pages/OtherProjectsPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/webdevprojects",
          element: <WebdevProjectPage />,
        },
        {
          path: "/webdesignprojects",
          element: <WebdesignProjectsPage />,
        },
        {
          path: "/otherprojects",
          element: <OtherProjectsPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "imprint",
          element: <Imprint />,
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
