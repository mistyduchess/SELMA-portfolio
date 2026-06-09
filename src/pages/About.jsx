import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import avatar from "../assets/avatar33.png";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#fff5f7]">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col items-center pt-32 px-6">
        {/* PAGE TITLE */}
        <h1 className="text-6xl text-[#ac3156] font-bold text-center">
          About Me
        </h1>

       <section className="w-full max-w-5xl mt-12">
  <div className="flex flex-col md:flex-row items-center gap-12">

    {/* Avatar */}
    <div className="flex-shrink-0">
      <img
        src={avatar}
        alt="Selma Zanoun"
        className="w-64 h-64 object-cover rounded-full border-4 border-[#ffc1cc] shadow-lg"
      />
    </div>

    {/* Introduction */}
    <div>
      <p className="text-lg text-gray-700 leading-8">
        I am a Data Analyst and aspiring Data Scientist with a
        Master's degree in Data Analysis and Data Science from the
        University of Algiers 1. My academic background in Applied
        Mathematics and Data Science has provided me with strong
        analytical, statistical, and problem-solving skills.
      </p>

      <p className="text-lg text-gray-700 leading-8 mt-4">
        I enjoy working with data throughout its entire lifecycle,
        from data collection and cleaning to analysis,
        visualization, and predictive modeling. My goal is to
        transform complex datasets into meaningful insights that
        support decision-making.
      </p>
    </div>

  </div>
</section>

        {/* EDUCATION */}
        <section className="mt-16 w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-[#ac3156] mb-8 text-center">
            Education
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold">
                Master in Data Analysis & Data Science
              </h3>

              <p className="text-[#ac3156]">
                University of Algiers 1
              </p>

              <p className="text-gray-500">
                2023 - 2025
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold">
                Bachelor in Applied Mathematics
              </h3>

              <p className="text-[#ac3156]">
                University of Algiers 1
              </p>

              <p className="text-gray-500">
                2019 - 2023
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-16 w-full max-w-4xl pb-20">
          <h2 className="text-3xl font-bold text-[#ac3156] mb-8 text-center">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Programming */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">
                Programming
              </h3>

              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "MATLAB"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#ffc1cc] text-[#ac3156] px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Science */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">
                Data Science & Analytics
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Deep Learning",
                  "Statistics",
                  "Data Analysis",
                  "Data Cleaning",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#ffc1cc] text-[#ac3156] px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">
                Databases
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "SQL Server",
                  "MongoDB",
                  "Data Warehouse",
                  "OLAP",
                  "SSMS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#ffc1cc] text-[#ac3156] px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">
                Tools
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "Power BI",
                  "QGIS",
                  "Google Workspace",
                  "Microsoft Office",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#ffc1cc] text-[#ac3156] px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* BACK BUTTON */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-full bg-[#ac3156] text-white hover:scale-105 transition"
            >
              Back
            </button>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default About;