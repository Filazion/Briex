import { React, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [detectionDropdownIsOpen, setDetectionDropdownIsOpen] = useState(false);

  const toggleDetectionDropdwon = () => {
    setDetectionDropdownIsOpen(!detectionDropdownIsOpen);
  };
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Breix</span>
            <span className="text-slate-700">.Ai</span>
          </h1>
        </Link>
        <ul className="menu-list hidden sm:flex flex-row gap-6">
          <li className="sm:inline text-slate-700 hover:text-gray-500">
            <Link to="/">Segmentation</Link>
          </li>
          <li className="sm:inline text-slate-700 hover:text-gray-500">
            <Link to="/">
              Detection
              <i className="fa fa-angle-down" />
            </Link>
            <ul className={"dropdown-menu absolute hidden" + (detectionDropdownIsOpen ? "block" : "")}>
              <li className="sm:inline text-slate-700 hover:text-gray-500">
                <Link to="/">
                Crack
                </Link>
              </li>
              <li className="sm:inline text-slate-700 hover:text-gray-500">
                <Link to="/">
                Corrosion
                </Link>
              </li>
              <li className="sm:inline text-slate-700 hover:text-gray-500">
                <Link to="/">
                Spalling
                </Link>
              </li>
              <li className="sm:inline text-slate-700 hover:text-gray-500">
                <Link to="/">
                Efflorescence
                </Link>
              </li>
            </ul>
          </li>
          <li className="sm:inline text-slate-700 hover:text-gray-500">
            <Link to="/solutions">Solutions</Link>
          </li>
          <Link to="/">
            <li className="sm:inline text-slate-700 hover:text-gray-500">
              Resources
            </li>
          </Link>
          <ul className="flex gap-6 justify-end">
            <Link to="/signin">
              <li className="flex gap-6 justify-end sm:inline text-slate-700 hover:text-gray-500">
                Login
              </li>
            </Link>
            <Link to="/signup">
              <li className="flex gap-6 justify-end sm:inline text-slate-700 hover:text-gray-500">
                Sign Up
              </li>
            </Link>
            <Button>Demo</Button>
          </ul>
        </ul>
        <ul></ul>
      </div>
    </header>
  );
};

export default Navbar;
