import { createBrowserRouter } from "react-router-dom"; // Import from 'react-router-dom'
import { NotFoundPage } from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AgencePage from "./pages/AgencePage";
import ContactPage from "./pages/ContactPage";
import BloguePage from "./pages/BloguePage";

export const router = createBrowserRouter(
  [
    {
      // Root route
      path: "/",
      errorElement: <NotFoundPage />,
      children: [
        // HomePage is the default component for "/"
        { index: true, element: <HomePage /> }, 
        
        // Other pages get their own specific paths
        { path: "projects", element: <ProjectPage /> },
        { path: "agence", element: <AgencePage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "blogue", element: <BloguePage /> },

        // Catch-all route for 404s
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  {
    // Your future flags are fine
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);