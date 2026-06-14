import React from "react";

const ContactUs = () => {
  return (
    <main className="bg-slate-50 min-h-screen text-slate-800 font-sans flex flex-col justify-between overflow-x-hidden">
      <div>
        {/* =========================================================
            HERO HEADER SECTION
           ========================================================= */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-800 to-emerald-950 text-white py-12 sm:py-16 px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3">
              Get In Touch
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Connect With Our Experts
            </h1>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded mb-4"></div>
            <p className="text-sm sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed px-2">
              Have an upcoming construction, water engineering, or project
              management scope? Let's discuss how we can partner together.
            </p>
          </div>
        </section>

        {/* =========================================================
            CENTERED CARD CONTAINER
           ========================================================= */}
        <section className="w-full mx-auto px-4 sm:px-6 py-12 lg:py-24">
          <div className="max-w-xl mx-auto space-y-6 sm:space-y-8 bg-slate-900 text-white p-5 sm:p-10 rounded-3xl shadow-xl border border-slate-800 w-full">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                Our Contact Details
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                Feel free to visit our corporate head office or reach out
                directly through phone and email lines.
              </p>
            </div>

            <hr className="border-slate-800" />

            {/* Address Block */}
            <div className="flex gap-3 sm:gap-4 items-start">
              <div className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-xl bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm sm:text-base font-bold">
                📍
              </div>
              <div>
                <h3 className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
                  Corporate Head Office
                </h3>
                <p className="text-slate-200 text-sm sm:text-base font-medium leading-relaxed">
                  Suite 204, NAWA Complex,
                  <br />
                  Plot 106/107 Ahmadu Bello Way,
                  <br />
                  Kado, FCT-Abuja, Nigeria.
                </p>
              </div>
            </div>

            {/* Phone Block */}
            <div className="flex gap-3 sm:gap-4 items-start">
              <div className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-xl bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm sm:text-base font-bold">
                📞
              </div>
              <div>
                <h3 className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
                  Phone Number
                </h3>
                <p className="text-slate-200 font-semibold text-base sm:text-lg hover:text-emerald-400 transition-colors">
                  <a href="tel:08032889585">08032889585</a>
                </p>
              </div>
            </div>

            {/* Email Block */}
            <div className="flex gap-3 sm:gap-4 items-start">
              <div className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-xl bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm sm:text-base font-bold">
                ✉️
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
                  Email Address
                </h3>
                <p className="text-slate-200 text-sm sm:text-base font-medium break-all sm:break-normal hover:text-emerald-400 transition-colors">
                  <a href="mailto:sardaunasalihu111@gmail.com">
                    sardaunasalihu111@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <hr className="border-slate-800" />

            {/* Quick Operational Hours Tag */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/60 text-[11px] sm:text-xs text-slate-400 flex items-center gap-3 w-full">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span>Available Monday – Friday, 8:00 AM – 5:00 PM</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactUs;
