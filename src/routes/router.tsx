import { createBrowserRouter } from "react-router";
import { NotFoundPage } from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter(
  [
    {
      // Root route that wraps the entire application
      path: "/",
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <HomePage /> },
        
        // Catch-all route for 404s
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  {
    // Enable v7 future flags
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
