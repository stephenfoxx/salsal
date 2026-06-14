import React, { useState, useEffect } from "react";
import gathering from "../images/gathering.jpeg";
import factory from "../images/factory.jpeg";
import { Link } from "react-router-dom";

import home from "../images/home2.jpeg";
import home2 from "../images/home3.jpeg";

const vas = [
  { number: "01", text: "Talk" },
  { number: "02", text: "Casualty & Surety" },
  { number: "03", text: "Logistics" },
];

const HomePage = () => {
  const heroImages = [home, home2, gathering];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const toggleSection = (sectionName: string) => {
    if (activeSection === sectionName) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionName);
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen text-slate-900 overflow-x-hidden">
      {/* ================= HERO BACKGROUND SLIDER CONTAINER ================= */}
      <div className="relative w-full min-h-[550px] sm:min-h-[600px] bg-slate-900 overflow-hidden flex items-center justify-center text-center px-4 sm:px-6 py-12">
        {/* Dynamic Background Image Layers */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${img})` }}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? "opacity-40" : "opacity-0"
            }`}
          />
        ))}

        {/* Foreground Content Card Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto text-white flex flex-col items-center">
          {/* Responsive Typography Scales */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight drop-shadow-md px-2">
            Welcome to SalSal & Niima Project Limited
          </h1>
          <div className="h-1 w-32 sm:w-48 bg-emerald-500 my-4 sm:my-6 rounded"></div>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl drop-shadow-sm px-2">
            At Salsal and Niima Project Services Limited, we are an indigenous
            Technical Firm providing professional services in the ever growing
            and changing Nigerian Economy. We believe in building mutually
            beneficial partnerships based on trust and corporate integrity.
          </p>

          <div className="mt-8 sm:mt-10">
            <Link
              to="/about"
              className="group flex items-center gap-4 bg-white/10 hover:bg-yellow-400 hover:text-slate-950 backdrop-blur-md border border-white/20 transition-all duration-300 rounded-full pl-5 pr-2 py-2"
            >
              <span className="font-bold text-xs sm:text-sm uppercase tracking-wider">
                More about us
              </span>
              <div className="bg-yellow-400 group-hover:bg-slate-950 group-hover:text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300 text-xs sm:text-base">
                ➔
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation Arrows Over Slider (Hidden on small mobile screens to prevent text overlap) */}
        {heroImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/50 w-10 h-10 rounded-full items-center justify-center transition-colors z-20 font-bold"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/50 w-10 h-10 rounded-full items-center justify-center transition-colors z-20 font-bold"
            >
              ❯
            </button>
          </>
        )}
      </div>

      {/* ================= THE CORPORATE ETHOS SECTION ================= */}
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center mt-12 sm:mt-20 px-4 sm:px-6">
        <h1 className="font-bold text-2xl sm:text-4xl text-center">
          The Corporate Ethos
        </h1>
        <div className="h-1 w-32 sm:w-44 bg-emerald-500 my-4 rounded"></div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start mt-6 sm:mt-10 w-full">
          <div className="flex flex-col gap-4 sm:gap-6 w-full lg:max-w-[600px] shrink-0">
            {/* Core Objectives */}
            <button
              className="flex justify-between items-center text-lg sm:text-2xl w-full min-h-[70px] sm:min-h-[80px] rounded-2xl bg-emerald-600 text-white p-4 sm:p-6 transition-colors hover:bg-emerald-700 text-left"
              onClick={() => toggleSection("objectives")}
            >
              <span>Core Objectives</span>
              <span
                className={`transform transition-transform duration-300 shrink-0 ml-2 ${activeSection === "objectives" ? "rotate-180" : "rotate-0"}`}
              >
                ▼
              </span>
            </button>

            {activeSection === "objectives" && (
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm w-full">
                <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                  To effectively perform and carry out projects of the required
                  objectives. To manage our relationship with our stakeholders.
                  To meet or exceed our clients' expectations.
                  <br />
                  <br />
                  To ensure the safety, health and well-being of everyone
                  involved in our operations. To care for the environment in
                  which we operate. To apply the highest values related to
                  respect, integrity, honesty and ethics in all of our
                  activities.
                </p>
              </div>
            )}

            {/* Value Added Services Accordion */}
            <button
              className="flex justify-between items-center text-lg sm:text-2xl w-full min-h-[70px] sm:min-h-[80px] rounded-2xl bg-emerald-600 text-white p-4 sm:p-6 transition-colors hover:bg-emerald-700 text-left"
              onClick={() => toggleSection("values")}
            >
              <span>Value Added Services</span>
              <span
                className={`transform transition-transform duration-300 shrink-0 ml-2 ${activeSection === "values" ? "rotate-180" : "rotate-0"}`}
              >
                ▼
              </span>
            </button>

            {activeSection === "values" && (
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm w-full">
                <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                  Our strong combination of building expertise packaged with
                  additional services is a key component of the COMPANY’s
                  ability to provide additional value to clients.
                </p>
              </div>
            )}
          </div>

          <div className="w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
            <img
              src={gathering}
              alt="Team Gathering"
              className="w-full max-w-[450px] rounded-2xl shadow-md object-cover h-[250px] sm:h-[320px]"
            />
          </div>
        </div>

        {/* ================= VALUE ADDED EFFORTS ================= */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-16 sm:mt-24 text-center">
          Value Added Services Efforts.
        </h1>
        <div className="h-1 w-32 sm:w-44 bg-emerald-500 my-4 rounded"></div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between w-full max-w-5xl mt-6 sm:mt-12 pb-16 sm:pb-24">
          <div className="grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm w-full lg:max-w-[500px]">
            {vas.map((v, i) => (
              <React.Fragment key={i}>
                <div className="flex items-start justify-center">
                  <div className="text-emerald-700 font-extrabold text-2xl sm:text-4xl">
                    {v.number}
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-slate-700 text-base sm:text-xl font-medium">
                    {v.text}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <img
              src={factory}
              alt="Industrial Facility"
              className="w-full max-w-[500px] h-[220px] sm:h-[320px] rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
