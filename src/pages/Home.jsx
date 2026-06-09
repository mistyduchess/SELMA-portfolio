import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#fff5f7]">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col md:flex-row relative">
        {/* DESKTOP GRADIENT */}
<div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-40 bg-gradient-to-r from-[#ffc1cc] via-[#ffe0e6] to-[#fff5f7] pointer-events-none z-10" />

        {/* TEXT SECTION */}
        <div className="order-1 md:order-1 w-full md:w-1/2 bg-[#ffc1cc] flex flex-col justify-center px-8 md:px-20 py-12 md:py-0">

          <h1 className="text-5xl md:text-7xl font-bold text-[#ac3156] mb-4 md:mb-6">
            Hi,
          </h1>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#ac3156] mb-6">
            I'm Selma.
          </h2>

          <p className="text-lg md:text-xl text-[#ac3156] max-w-md leading-relaxed">
            I am a data scientist and analyst with a strong interest in turning
            data into meaningful insights and intelligent solutions.
          </p>

        </div>

        {/* AVATAR SECTION */}
        <div className="order-2 md:order-2 w-full md:w-1/2 relative flex items-center justify-center pt-10 md:pt-32 bg-[#fff5f7]">
        <div className="absolute top-0 left-0 w-full h-20 md:hidden bg-gradient-to-b from-[#ffc1cc] to-[#fff5f7]" />

          <img
            src={avatar}
            alt="avatar"
            className="w-64 md:w-80 object-contain"
          />

        </div>

      </main>



      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default Home;