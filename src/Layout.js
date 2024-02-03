import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { fetchGenres } from "./redux/features/generes/genresSlice";
const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres("movie"))
  }, []);

  return (
    <>
      <Navbar />
        <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
