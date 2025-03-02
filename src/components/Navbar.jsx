import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/loginSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  const handleLogout = () => {
    dispatch(logoutUser());
    // dispatch(clearNewsData())
  };

  return (
    <div className="w-full flex justify-between items-center p-4">
      <div>
        <Link>
          <p className="text-2xl font-bold tracking-wide text-red-700">
            Global News
          </p>
        </Link>
      </div>
      <div>
        <div className="md:hidden text-red-700 text-4xl font-bold">
          <MdMenu />
        </div>
        {user.email && user.password ? (
          <div>
            {" "}
            <p
              onClick={handleLogout}
              className="hidden md:block text-xl font-bold uppercase text-red-700 cursor-pointer"
            >
              Logout
            </p>{" "}
          </div>
        ) : (
          <div>
            {" "}
            <Link className="hidden md:block text-xl font-bold uppercase text-red-700">
              Login
            </Link>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
