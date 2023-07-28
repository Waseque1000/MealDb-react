import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-red-400 to-yellow-400 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link to={"/"}>My Restaurant</Link>
          </div>
          <nav className="space-x-4">
            <Link className=" hover:bg-blue-600 p-3 rounded" to={"/"}>
              Home
            </Link>
            <Link className=" hover:bg-blue-600 p-3 rounded" to={"/menu"}>
              Show Menu
            </Link>
            <Link className=" hover:bg-blue-600 p-3 rounded" to={"/about"}>
              {" "}
              About{" "}
            </Link>
            <Link className=" hover:bg-blue-600 p-3 rounded" to={"/contact"}>
              Contact
            </Link>
          </nav>
        </div>
      </div>{" "}
      <div className="">
        {/* <hr /> <hr />
        <hr />
        <hr />
        <hr /> */}
      </div>
    </header>
  );
};

export default Header;
