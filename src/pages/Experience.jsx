import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Experience() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#fff5f7]">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col items-center pt-32 px-6">
        {/* TITLE */}
        <h1 className="text-6xl text-[#ac3156] font-bold text-center mb-16">
          Experience
        </h1>

        {/* TIMELINE */}
        <div className="w-full max-w-5xl relative">

          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-[#ffc1cc]" />
          {/* Experience 0 */}
          <div className="relative pl-16 mb-12">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-[#ac3156]" />

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-[#ac3156] font-semibold">
                November 2025 – today
              </p>

              <h2 className="text-2xl font-bold mt-2">
                BI Engineer
              </h2>

              <p className="text-gray-500 mb-4">
                National Employment Agency (ANEM)
              </p>

              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>
                   Developed and maintained ETL processes using SSIS to integrate data from multiple sources into a Data Warehouse.
                </li>

                <li>
                  Created dashboards and reports using Power BI Desktop and Power BI Server.
                </li>

                <li>
                  Ensured data quality, integrity, and consistency across systems.
                </li>
                 <li>
                  Conducted data matching and similarity analysis to support data synchronization across multiple sources.
                </li>
                 <li>
                  Managed user roles and access permissions.
                </li>
                 <li>
                  Participated in data warehouse and OLAP cube design, including dimensions and measures.
                </li>
                 <li>
                  Managed SMS notification campaigns for application deadlines and appointment reminders.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 1 */}
          <div className="relative pl-16 mb-12">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-[#ac3156]" />

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-[#ac3156] font-semibold">
                January 2025 – June 2025
              </p>

              <h2 className="text-2xl font-bold mt-2">
                Data Science & GIS Intern
              </h2>

              <p className="text-gray-500 mb-4">
                National Employment Agency (ANEM)
              </p>

              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>
                  Developed a Geographic Information System (GIS)
                  using QGIS to analyze and map agency activities.
                </li>

                <li>
                  Built Machine Learning models in Python to
                  predict employment trends.
                </li>

                <li>
                  Designed and implemented an interactive
                  visualization platform using Node.js.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="relative pl-16 mb-12">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-[#ac3156]" />

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-[#ac3156] font-semibold">
                November 2024 – June 2025
              </p>

              <h2 className="text-2xl font-bold mt-2">
                English Teacher
              </h2>

              <p className="text-gray-500 mb-4">
                ISN School
              </p>

              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>
                  Simplified complex concepts for diverse audiences.
                </li>

                <li>
                  Analyzed student performance and implemented
                  personalized learning plans.
                </li>

                <li>
                  Used digital tools to create engaging and
                  interactive learning environments.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="relative pl-16 mb-12">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-[#ac3156]" />

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-[#ac3156] font-semibold">
                October 2023 – June 2024
              </p>

              <h2 className="text-2xl font-bold mt-2">
                English Teacher
              </h2>

              <p className="text-gray-500 mb-4">
                Academy Du Savoir
              </p>

              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>
                  Communicated complex concepts clearly to students.
                </li>

                <li>
                  Monitored student progress and adapted teaching
                  strategies accordingly.
                </li>

                <li>
                  Created interactive lessons using digital tools.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 4 */}
          <div className="relative pl-16 mb-12">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-[#ac3156]" />

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-[#ac3156] font-semibold">
                2023
              </p>

              <h2 className="text-2xl font-bold mt-2">
                Data Analysis Intern
              </h2>

              <p className="text-gray-500 mb-4">
                Department of Applied Mathematics
                – University of Algiers 1
              </p>

              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>
                  Worked on nonlinear regression modeling.
                </li>

                <li>
                  Explored and analyzed datasets to support
                  research objectives.
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="mt-10 mb-20 px-6 py-3 rounded-full bg-[#ac3156] text-white hover:scale-105 transition"
        >
          Back
        </button>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Experience;