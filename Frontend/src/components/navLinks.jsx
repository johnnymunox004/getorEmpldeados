import { FaHome } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import React from "react";

const NavLinks = () => {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md space-y-4">
      <Link
        to={"/"}
        className="text-white hover:text-yellow-300 transition-colors duration-300"
      >
        <IoLogIn className="text-2xl" />
      </Link>
      <Link
        to={"/dashboard/list-empleados"}
        className="text-white hover:text-yellow-300 transition-colors duration-300"
      >
        <FaHome className="text-2xl" />
      </Link>
      <Link
        to={"/dashboard/list-aspirant"}
        className="text-white hover:text-yellow-300 transition-colors duration-300"
      >
        <BsFillPersonLinesFill className="text-2xl" />
      </Link>

      <Link
        to={"/notificaciones"}
        className="text-white hover:text-yellow-300 transition-colors duration-300"
      >
        <FaBell className="text-2xl" />
      </Link>

      <Link
        to={"/creaaenotificaciones"}
        className="text-white hover:text-yellow-300 transition-colors duration-300"
      >
        <FaBell className="text-2xl" />
      </Link>
    </div>
  );
};

export default NavLinks;
