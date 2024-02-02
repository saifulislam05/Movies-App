import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import TvShows from "./Pages/TvShows";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "explore/movies",
          element: <Movies />,
        },
        {
          path: "explore/tvshows",
          element: <TvShows />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
