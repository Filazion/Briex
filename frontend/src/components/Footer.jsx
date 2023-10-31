import React from "react";
import { FaMailBulk } from "react-icons/fa";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  return (
    <footer className="bg-blue-400 shadow-md">
      <div className="flex items-center max-w-6xl mx-auto p-3 justify-between">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-gray-900">Briex</span>
          <span className="text-slate-600">Sentinel</span>
        </h1>
        <div className="my-auto">
          <h2 className="font-bold text-sm sm:text-xl ">Products</h2>
          <h2 className="font-bold text-sm sm:text-xl ">Features</h2>
          
        </div>
        <div className="my-auto">
          <h2 className="font-bold text-sm sm:text-xl ">Support</h2>
          <h2 className="font-bold text-sm sm:text-xl ">Docs</h2>
          <h2 className="font-bold text-sm sm:text-xl ">Platform</h2>
          <h2 className="font-bold text-sm sm:text-xl ">Github</h2>
        </div>
        <div className="my-auto justify-between">
        <h2 className="font-bold text-sm sm:text-xl p-2">
          Subscribe To Our Newsletter
        </h2>
        <form
          action=""
          className="bg-slate-100 p-2 rounded-lg flex items-center "
        >
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-transparent focus:outline-none max-w-lg"
          />
          <FaMailBulk className="text-slate-600" />
        </form>
        </div>
      </div>
      <div className=" flex mx-auto p-2 bg-blue-200 gap-4">
       <span className="text-grey-800">@2023 Briex Sentinel. All Rights Reserved</span>
       <span className=" flex text-grey-800">Terms </span>
       <span className="text-grey-800">Privacy </span>
       <SocialMediaIcons />
      </div>
    </footer>
  );
}
