import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-success text-success-content ">
      <div className="navbar w-10/12 mx-auto">
        <div className="flex-1">
          <Link className="text-xl font-bold">Movie App</Link>
        </div>
        <div className="flex gap-4">
          <ul className="flex items-center gap-4 font-semibold">
            <li className="hover:text-warning">
              <Link to="/explore/movies">Movies</Link>
            </li>
            <li className="hover:text-warning">
              <Link to="/explore/tvshows">Tv Shows</Link>
            </li>
          </ul>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input bg-white w-24 md:w-auto input-sm "
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-md dropdown-content bg-[#00a96eaf] rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
