import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
export default function Navbar() {
  return (
    <header className="bg-blue-400 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-gray-900">Briex</span>
            <span className="text-slate-600">Sentinel</span>
          </h1>
        </Link>
        <form
          action=""
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
          <Link to="/sign-in">
            <li className="hover:underline">Sign In</li>
          </Link>
          <Link to="/sign-up">
            <li className="hover:underline">Sign Up</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
