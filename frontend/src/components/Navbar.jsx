import { React, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Breix</span>
            <span className="text-slate-700">.Ai</span>
          </h1>
        </Link>
        <ul className="flex gap-6">
          <Link to="/">
            <li className="sm:inline text-slate-700 hover:text-gray-500">
              Segmentation
            </li>
          </Link>
          <Link to="/">
            <li className="sm:inline text-slate-700 hover:text-gray-500">
              Solutions
            </li>
          </Link>
          <Link to="/">
            <li className="sm:inline text-slate-700 hover:text-gray-500">
              Resources
            </li>
          </Link>
          <ul className="flex gap-6 justify-end">
            <Link to="/sign-in">
              <li className="flex gap-6 justify-end sm:inline text-slate-700 hover:text-gray-500">
                Login
              </li>
            </Link>
            <Button>Demo</Button>
          </ul>
        </ul>
        <ul ></ul>
      </div>
    </header>
  );
};

export default Navbar;
