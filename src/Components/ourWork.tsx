import React, { useState } from "react";

// Image Array Imports
import one from "../images/damhydropowerturbineengine/1.jpeg";
import two from "../images/damhydropowerturbineengine/2.jpeg";

import electone from "../images/electrification of powerline and soil impact test/E1.jpeg";
import electtwo from "../images/electrification of powerline and soil impact test/E2.jpeg";
import electthree from "../images/electrification of powerline and soil impact test/E3.jpeg";
import electfour from "../images/electrification of powerline and soil impact test/E4.jpeg";
import electfive from "../images/electrification of powerline and soil impact test/E5.jpeg";

import waterone from "../images/waterengineering/3.jpeg";
import watertwo from "../images/waterengineering/4.jpeg";
import waterthree from "../images/waterengineering/5.jpeg";

interface CoreService {
  id: string;
  title: string;
  description: string;
  imagePlaceholder: any[];
}

interface OtherServices {
  id: string;
  title: string;
  description: string;
}

// =========================================================
// ISOLATED CAROUSEL CARD COMPONENT
// =========================================================
const ServiceCard = ({ service }: { service: CoreService }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === service.imagePlaceholder.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? service.imagePlaceholder.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-200 overflow-hidden flex flex-col justify-between transition-all duration-300 group w-full">
      <div>
        {/* CAROUSEL IMAGES SCREEN */}
        <div className="w-full h-[260px] sm:h-[350px] md:h-[400px] bg-slate-900 relative overflow-hidden border-b border-slate-100 group">
          <img
            src={service.imagePlaceholder[currentIndex]}
            alt={`${service.title} - View ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out"
          />

          {/* Navigation Overlay Arrows */}
          {service.imagePlaceholder.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white font-bold text-sm h-9 w-9 rounded-full flex items-center justify-center backdrop-blur-xs transition-colors"
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white font-bold text-sm h-9 w-9 rounded-full flex items-center justify-center backdrop-blur-xs transition-colors"
              >
                ❯
              </button>
            </>
          )}

          {/* Carousel Dynamic Dots Layout */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {service.imagePlaceholder.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-emerald-500 w-4"
                    : "bg-white/60 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Area */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight shrink-0 leading-none">
              {service.id}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
              {service.title}
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// =========================================================
// MAIN EXPORT COMPONENT
// =========================================================
const OurWork = () => {
 const coreServices: CoreService[] = [
   {
     id: "01",
     title: "Dam hydro power turbine engine and water irrigation system.",
     description:
       "Advanced engineering for hydraulic dam infrastructure, turbine installation, and large-scale agricultural irrigation layouts. Focused on delivering optimized water resource management and sustainable clean energy generation pipelines.",
     imagePlaceholder: [one, two],
   },
   {
     id: "02",
     title: "Electrification of powerline and soil impact test",
     description:
       "High-voltage electrical grid routing and powerline installations backed by rigorous geotechnical site compatibility assessments. Ensuring structural stability, long-term line safety, and minimal environmental impact across diverse terrain types.",
     imagePlaceholder: [electone, electtwo, electthree, electfour, electfive],
   },
   {
     id: "03",
     title: "Water Engineering",
     description:
       "Precision drafting of high-capacity overhead water tank foundations and extensive municipal supply networks. Specializing in sustainable resource development, treatment facilities, and distribution pipelines for urban and industrial sectors.",
     imagePlaceholder: [waterone, watertwo, waterthree],
   },
 ];

  const otherServices: OtherServices[] = [
    {
      id: "04",
      title: "Building & Structures",
      description:
        "Full-cycle development covering architectural design, robust foundation drafting, structural construction, and modern facility renovations. Built to meet global safety standards and endure heavy-duty industrial or commercial use.",
    },
    {
      id: "05",
      title: "Soil & Foundation Engineering",
      description:
        "Comprehensive geotechnical site investigations, laboratory analysis, specialized deep piling, and land reclamation frameworks. Providing the critical soil stability testing required to safely support massive structural projects.",
    },
    {
      id: "06",
      title: "Highways & Roads",
      description:
        "Professional road design, bulk logistics for heavy-duty asphalt materials, precision paving, and complete infrastructure rehabilitation. Engineered to withstand high-volume commercial transport and extreme environmental stress.",
    },
    {
      id: "07",
      title: "General Contracting",
      description:
        "Direct international procurement and distribution of high-grade structural steel pipes, heavy sheets, and iron angle frames. Delivering robust, supply-chain-assured hardware solutions for complex engineering setups.",
    },
  ];

  const accessControlItems = [
    "Perimeter Fencing Solutions",
    "Erection of Programmable Access Gates and Doors",
    "Surveillance Equipment Supply, Installation & Maintenance",
  ];

  const technicalPersonnelAreas = [
    "Testing",
    "Designs",
    "Planning",
    "Quality Assurance / Quality Control",
    "Safety (HSE)",
    "Installation",
    "Commissioning & Start-Ups",
    "Turn Key Projects",
  ];

  return (
    <main className="bg-slate-50 min-h-screen text-slate-800 font-sans overflow-x-hidden">
      {/* HERO BANNER SECTION */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-800 to-emerald-950 text-white py-12 sm:py-20 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3">
            What We Do
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight">
            Our Engineering & Project Services
          </h1>
          <div className="h-1 w-20 sm:w-24 bg-emerald-500 mx-auto rounded mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto px-2">
            SALSAL AND NIIMA PROJECT SERVICES LIMITED provides its services in
            nearly all sectors of the construction industry and stands as a
            recognized market leader across multiple engineering categories.
          </p>
        </div>
      </section>

      {/* CORE CAROUSEL SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coreServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* SPECIALIZED DATA GRIDS & ACCORDIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* OTHER SERVICES RENDER BLOCK */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherServices.map((other) => (
            <div
              key={other.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-200 overflow-hidden flex flex-col justify-between transition-all duration-300 group p-5 sm:p-6 w-full"
            >
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight shrink-0 leading-none">
                    {other.id}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {other.title}
                  </h2>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {other.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ACCESS CONTROL SERVICES CARD */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-md p-6 sm:p-8 flex flex-col justify-between w-full">
          <div>
            <span className="text-emerald-600 text-2xl sm:text-3xl font-black block mb-2 leading-none">
              06
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              Access Control Services
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
              Securing critical infrastructure checkpoints with heavy commercial
              security deployments, precise structural protection barriers, and
              advanced technological installations.
            </p>

            <ul className="space-y-3">
              {accessControlItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-700 font-medium text-xs sm:text-sm"
                >
                  <span className="text-emerald-600 text-sm sm:text-base mt-0.5 shrink-0">
                    ➔
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PROJECT MANAGEMENT SERVICES CARD */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-md p-6 sm:p-8 flex flex-col justify-between w-full">
          <div>
            <span className="text-emerald-600 text-2xl sm:text-3xl font-black block mb-2 leading-none">
              08
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              Project Management Services
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
              Providing comprehensive supply pipelines of premium technical
              personnel—both high-skilled Nigerian indigenous workers and
              leading international expatriates—across core development tracks:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {technicalPersonnelAreas.map((area, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-slate-700 font-medium text-xs sm:text-sm"
                >
                  <span className="h-5 w-5 rounded bg-emerald-550/10 text-emerald-700 font-bold text-[10px] sm:text-xs flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <span className="truncate">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurWork;
