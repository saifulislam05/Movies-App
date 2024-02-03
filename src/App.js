import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import TvShows from "./Pages/TvShows";
import Details from "./Pages/Details";
import { store } from "./redux/app/store";
import { Provider as ReduxProvider } from "react-redux";
import Searched from "./Pages/Searched";

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
        {
          path: ":type/:id",
          element: <Details />,
        },
        {
          path: "search/:text",
          element: <Searched />,
        },
      ],
    },
  ]);
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router} />;
    </ReduxProvider>
  );
}

export default App;
