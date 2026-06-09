import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/SZ.png";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] bg-[#fff5f7]/80 backdrop-blur-md border border-[#ffc1cc] rounded-full px-8 py-4 flex items-center justify-between shadow-md z-50">

        {/* LOGO */}
        <motion.button
          onClick={() => navigate("/")}
          className="hover:scale-105 transition"
        >
          <motion.img
            layoutId="main-logo"
            src={logo}
            alt="logo"
            className="w-14"
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
          />
        </motion.button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-[#ac3156] font-medium">

          <button
            onClick={() => navigate("/home")}
            className="hover:text-black transition"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/about")}
            className="hover:text-black transition"
          >
            About
          </button>

          <button
            onClick={() => navigate("/experience")}
            className="hover:text-black transition"
          >
            Experience
          </button>

          <button
            onClick={() => navigate("/projects")}
            className="hover:text-black transition"
          >
            Projects
          </button>

        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-[#ac3156] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] md:hidden bg-[#fff5f7] border border-[#ffc1cc] rounded-3xl shadow-lg z-40">

          <div className="flex flex-col items-center py-4 text-[#ac3156] font-medium">

            <button
              onClick={() => {
                navigate("/home");
                setMenuOpen(false);
              }}
              className="py-3 hover:text-black transition"
            >
              Home
            </button>

            <button
              onClick={() => {
                navigate("/about");
                setMenuOpen(false);
              }}
              className="py-3 hover:text-black transition"
            >
              About
            </button>

            <button
              onClick={() => {
                navigate("/experience");
                setMenuOpen(false);
              }}
              className="py-3 hover:text-black transition"
            >
              Experience
            </button>

            <button
              onClick={() => {
                navigate("/projects");
                setMenuOpen(false);
              }}
              className="py-3 hover:text-black transition"
            >
              Projects
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default Navbar;