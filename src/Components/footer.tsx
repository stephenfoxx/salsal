import React from "react";

import logo from "../images/logo.jpeg";
import footerlogo from "../images/footerlogo.jpeg";

const Footer = () => {

    return (
      <main className=" mt-10">
        <div className=" flex gap-[40rem] w-full max-w-[700px] p-10 ml-[200px]">
          <img src={logo} alt="" className="w-full max-w-[100px] min-h-[100px] " />
          <img src={footerlogo} alt="" className="max-w-[400px] min-h-[350px]" />
        </div>
      </main>
    );
}

export default Footer;