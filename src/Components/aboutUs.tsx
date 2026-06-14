import React, { useState } from "react";

// TypeScript interface for our team members
interface StaffMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  specialization?: string;
  contact?: {
    email: string;
    phone: string;
  };
}

const AboutUs = () => {
  // State for controlling the corporate profile accordions and team view
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (sectionName: string) => {
    if (sectionName === activeSection) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionName);
    }
  };

  // Structured data for staff members 2 through 9
  const teamMembers: StaffMember[] = [
    {
      id: 2,
      name: "ENGR. ASIAZOBOR PATRICK YOUNG (MNSE, COREN)",
      title: "Senior Technical Consultant",
      bio: "Worked and retired from NNPC as an experienced engineer. Served in various sections of the maintenance department and rose to a deputy manager position in his career. An achiever, hardworking, and ready to deliver on time any assignments placed under his authority.",
      specialization:
        "Pumps, Compressors, Turbines, Cooling Fans, Static Equipment, etc.",
    },
    {
      id: 3,
      name: "MRS. FATIMA FRANCA SALIHU",
      title: "Chief Financial Control & Human Resources Officer",
      bio: "With over twenty-five years of service in the banking industry before retiring into self-employment as a farmer and agro-culture farming innovation. With her wealth of experience in accounting and audit departments, she stands as the Chief Financial Control and Human Resources Officer. She is a Director in SALSAL AND NIIMA PROJECT LIMITED.",
    },
    {
      id: 4,
      name: "MR. STEPHEN OKOH",
      title: "Administrative & Operations Director",
      bio: "An astute administrator in an insurance company where he rose to the position of General Manager before his retirement from the insurance industry. He worked in several arms of the industry locally and internationally.",
    },
    {
      id: 5,
      name: "MR. ABUBAKAR MOHAMMED AFEGBUA",
      title: "Procurement & Property Management Specialist",
      bio: "A graduate in agricultural technology, he has gained experience in many fields of endeavors in Agriculture, Media and Publicity services, construction, property management, procurement, and supplies, etc.",
    },
    {
      id: 6,
      name: "ENGR. PATRICK I. AHUNU",
      title: "ICT System Developer Adviser & Visiting Engineer",
      bio: "Retired from NNPC Kaduna refinery, he is a computer analyst well experienced in ICT development. He served as the deputy manager of ICT planning technologist with highly experienced mechanical technological engineering field work of 35 years before his retirement.",
    },
    {
      id: 7,
      name: "MR. ABIODUN TAYO",
      title: "Deputy Manager / Certified Estate Valuer",
      bio: "A certified member of the Nigeria Institute of Estate Valuers and Surveyors and an Associate Member of the Estate Surveyors and Registration Board of Nigeria. He has put in over fifteen years in the estate business.",
    },
    {
      id: 8,
      name: "MR. AGIDIGBE SUNDAY",
      title: "Field Operation Director",
      bio: "A highly experienced Mechanical Technologist. He is well-grounded and with over thirty-five years on the field of mechanical engineering. He is the Field Operation Director of SALSAL AND NIIMA PROJECT SERVICES LIMITED.",
    },
    {
      id: 9,
      name: "ENGR. SALIHU SARDAUNA SALIHU",
      title: "Administrative Officer, Logistics & Protocol Manager",
      bio: "An Electrical Electronic Engineer and serves as a computer analyst with SALSAL AND NIIMA PROJECT SERVICES LIMITED. He is a co-director and also the administrative officer in charge of logistics and protocol.",
    },
  ];

  return (
    <main className="flex flex-col bg-slate-50 min-h-screen py-12 sm:py-16 px-4 sm:px-6 overflow-x-hidden">
      {/* =========================================================
          PAGE TITLE
         ========================================================= */}
      <div className="flex flex-col justify-center items-center text-center mt-4 w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          About Our Company
        </h1>
        <div className="h-1 w-24 bg-emerald-500 my-4 rounded"></div>
      </div>

      {/* =========================================================
          CORPORATE PROFILE ACCORDIONS AT THE TOP
         ========================================================= */}
      <div className="flex flex-col mt-6 sm:mt-8 gap-4 w-full max-w-2xl mx-auto">
        {/* 1. ABOUT US ACCORDION */}
        <div className="w-full flex flex-col">
          <button
            className="flex justify-between items-center text-lg sm:text-2xl w-full min-h-[70px] sm:min-h-[80px] rounded-2xl bg-emerald-600 text-white p-5 sm:p-6 transition-colors hover:bg-emerald-700 text-left"
            onClick={() => toggleSection("corporate-about")}
          >
            <span>About Us</span>
            <span
              className={`transform transition-transform duration-300 ml-2 shrink-0 ${activeSection === "corporate-about" ? "rotate-180" : "rotate-0"}`}
            >
              ▼
            </span>
          </button>

          {activeSection === "corporate-about" && (
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm w-full mt-2">
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                At Salsal and Niima Project Services Limited, we are an
                indigenous Technical Firm providing professional services in the
                ever growing and changing Nigerian Economy. We believe in the
                reputation of a Trustworthy company that engages in lasting,
                mutually beneficial partnership. We are recognized for our
                commitment and integrity at high ethical standards of corporate
                governance business principles and professionalism in all
                aspects.
              </p>
            </div>
          )}
        </div>

        {/* 2. VISION ACCORDION */}
        <div className="w-full flex flex-col">
          <button
            className="flex justify-between items-center text-lg sm:text-2xl w-full min-h-[70px] sm:min-h-[80px] rounded-2xl bg-emerald-600 text-white p-5 sm:p-6 transition-colors hover:bg-emerald-700 text-left"
            onClick={() => toggleSection("corporate-vision")}
          >
            <span>Vision</span>
            <span
              className={`transform transition-transform duration-300 ml-2 shrink-0 ${activeSection === "corporate-vision" ? "rotate-180" : "rotate-0"}`}
            >
              ▼
            </span>
          </button>

          {activeSection === "corporate-vision" && (
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm w-full mt-2">
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                Our vision as an integrated company is to achieve steady growth
                in our operations and can better its performance from year to
                year. We shall know that we are achieving this, when the bottom
                line to our shareholders shows assets and equity appreciation at
                a steady and regular pace, if we did not have to compromise on
                the quality of service we deliver to our clients.
              </p>
            </div>
          )}
        </div>

        {/* 3. CORPORATE GOALS ACCORDION */}
        <div className="w-full flex flex-col">
          <button
            className="flex justify-between items-center text-lg sm:text-2xl w-full min-h-[70px] sm:min-h-[80px] rounded-2xl bg-emerald-600 text-white p-5 sm:p-6 transition-colors hover:bg-emerald-700 text-left"
            onClick={() => toggleSection("corporate-goals")}
          >
            <span>Corporate Goals</span>
            <span
              className={`transform transition-transform duration-300 ml-2 shrink-0 ${activeSection === "corporate-goals" ? "rotate-180" : "rotate-0"}`}
            >
              ▼
            </span>
          </button>

          {activeSection === "corporate-goals" && (
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm w-full mt-2">
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                It is our primary goal to develop and represent the Nigerian
                local factor in the Federal, State, Local Government as well as
                Oil and Gas sector at the International Level through her links.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* =========================================================
          STAFF PERSONNEL HEADER
         ========================================================= */}
      <div className="mt-16 sm:mt-20 flex flex-col justify-center items-center text-center max-w-3xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Staff Personnel
        </h1>
        <div className="h-1 w-24 bg-emerald-500 my-4 rounded"></div>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Our resource personnel include engineers, technologists, technicians,
          and other skilled workers drawn from various fields of endeavors. The
          management team comprises tested,{" "}
          <strong className="text-slate-900 font-bold">
            COREN-certified Engineers
          </strong>{" "}
          and various professional fields of endeavor.
        </p>
      </div>

      {/* =========================================================
          PERSONNEL ROSTER SECTION
         ========================================================= */}
      <div className="w-full max-w-5xl mx-auto mt-10 sm:mt-12 space-y-6 sm:space-y-8">
        {/* 1. Feature Profile: Principal Managing Engineer */}
        <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-6 sm:p-8 relative overflow-hidden w-full">
          <div className="absolute top-0 left-0 right-0 h-2 bg-emerald-600"></div>
          <span className="inline-block bg-emerald-550/10 text-emerald-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Principal Leadership
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
            1. ENGR. SARDAUNA SALIHU, MNSE, COREN
          </h2>
          <p className="text-emerald-600 text-sm sm:text-base font-semibold mt-1">
            Managing Director & Lead Rotary Maintenance Engineer
          </p>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Holds a Post Graduate Diploma (PGD), Higher National Diploma (HND)
            of Federal University of Technology, Minna, Niger State and Higher
            National Diploma, Kaduna Polytechnic College of Engineering,
            Tudun-Wada, Kaduna, Kaduna State respectively in Mechanical
            Engineering Plant.
          </p>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A Member of the Kaduna refinery petrochemical company, attached to
            the maintenance department as engineer with rotary sections, I have
            served in various units and held many positions till my retirement
            from service in the year 2019 after 35 years of meritorious service.
            My records are available for further verification with the
            multi-national Oil & Gas Sector, Nigeria National Petroleum
            Corporation (NNPC), Kaduna Refining and Petrochemical Company,
            Kaduna.
          </p>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed italic">
            An achiever, hardworking and ready to deliver on time any
            assignments placed under his authority. We shall be obliged to serve
            whenever duty calls.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100 bg-slate-50 p-4 rounded-xl">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                Area of Specialization
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-700">
                Pumps, Compressors, Turbines, Cooling Fans, Static Equipment
                etc.
              </p>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                Contact Info
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                📧 sardaunasalihu111@gmail.com <br />
                📞 08032889585
              </p>
            </div>
          </div>
        </div>

        {/* Core Team Grid (Members 2 to 9) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-6 flex flex-col justify-between hover:shadow-md transition-shadow w-full"
            >
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    {member.id}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {member.name}
                  </h3>
                </div>
                <p className="text-emerald-600 text-xs font-bold mb-3 pl-1">
                  {member.title}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {member.specialization && (
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-0.5">
                    Area of Specialization
                  </span>
                  <p className="text-xs font-semibold text-slate-700">
                    {member.specialization}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
