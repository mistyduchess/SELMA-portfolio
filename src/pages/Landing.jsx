import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../assets/SZ.png";

function Landing() {

  const navigate = useNavigate();

  return (
    <motion.div
      className="h-screen bg-[#fff5f7] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
    >

      <button
        onClick={() => navigate("/home")}
      >

        <motion.img
          layoutId="main-logo"
          src={logo}
          alt="logo"
          className="w-60"
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 18
          }}
        />

      </button>

      <p className="mt-6 text-[#ac3156] tracking-[0.3em] text-sm">
        CLICK TO ENTER
      </p>

    </motion.div>
  );
}

export default Landing;