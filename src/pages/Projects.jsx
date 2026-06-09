import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#fff5f7]">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col items-center pt-32 px-6">
        {/* PAGE TITLE */}
        <h1 className="text-6xl text-[#ac3156] font-bold text-center mb-16">
          Projects
        </h1>

        {/* PROJECTS GRID */}
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
          
          {/* PROJECT 1 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300">
            <h2 className="text-2xl font-bold text-[#ac3156] mb-3">
              Personal Portfolio Website
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                React
              </span>

              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                Tailwind CSS
              </span>

              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                Front-End
              </span>
            </div>

            <p className="text-gray-700 mb-4">
              Designed and developed a responsive personal portfolio
              website to showcase my education, skills, experience,
              and projects.
            </p>

            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              <li>Built with React and Tailwind CSS.</li>
              <li>Fully responsive design.</li>
              <li>Modern UI with a custom pink color palette.</li>
              <li>Structured into About, Experience, Projects, and Contact pages.</li>
            </ul>
          </div>

          {/* PROJECT 2 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300">
            <h2 className="text-2xl font-bold text-[#ac3156] mb-3">
              Employment Trends Prediction & GIS Platform
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                Machine Learning
              </span>

              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                GIS
              </span>

              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                Data Visualization
              </span>
            </div>

            <p className="text-gray-700 mb-4">
              Developed a GIS platform and predictive analytics
              solution during my Master's internship at ANEM.
            </p>

            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              <li>Built GIS analyses and maps using QGIS.</li>
              <li>Developed predictive models in Python.</li>
              <li>Created an interactive visualization platform.</li>
              <li>Integrated geospatial and employment data.</li>
            </ul>
          </div>

          {/* PROJECT 3 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300">
            <h2 className="text-2xl font-bold text-[#ac3156] mb-3">
              Arabic Dialect Recognition
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                NLP
              </span>

              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                Machine Learning
              </span>

              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                Python
              </span>
            </div>

            <p className="text-gray-700 mb-4">
              Developed a machine learning solution for Arabic dialect
              recognition using annotated Arabic Twitter comments.
            </p>

            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              <li>Compared SVM and Naive Bayes models.</li>
              <li>Performed text preprocessing and feature engineering.</li>
              <li>Best accuracy achieved: 64%.</li>
            </ul>
          </div>

          {/* PROJECT 4 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300">
            <h2 className="text-2xl font-bold text-[#ac3156] mb-3">
              Arabic Handwritten Character Recognition
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                Deep Learning
              </span>

              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                CNN
              </span>

              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                Computer Vision
              </span>
            </div>

            <p className="text-gray-700 mb-4">
              Built deep learning models capable of recognizing
              handwritten Arabic characters from a custom dataset.
            </p>

            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              <li>Created dataset containing all 28 Arabic letters.</li>
              <li>Implemented AlexNet architecture.</li>
              <li>Developed a CNN-RNN hybrid model.</li>
              <li>Validation accuracy reached 85%.</li>
            </ul>
          </div>

          {/* PROJECT 5 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300 md:col-span-2">
            <h2 className="text-2xl font-bold text-[#ac3156] mb-3">
              Iris Biometric Identification System
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                Biometrics
              </span>

              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                Python
              </span>

              <span className="bg-[#ffc1cc] text-[#ac3156] px-3 py-1 rounded-full text-sm">
                Computer Vision
              </span>
            </div>

            <p className="text-gray-700 mb-4">
              Designed and implemented a biometric identification
              system based on iris recognition.
            </p>

            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              <li>Implemented feature extraction using SIFT.</li>
              <li>Developed enrollment and identification workflows.</li>
              <li>Created an interactive GUI using Tkinter.</li>
            </ul>
          </div>
        </div>

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="mt-12 mb-20 px-6 py-3 rounded-full bg-[#ac3156] text-white hover:scale-105 transition"
        >
          Back
        </button>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Projects;