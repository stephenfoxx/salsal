import React from "react";

import logo from "../images/logo.jpeg";
import footerlogo from "../images/footerlogo.jpeg";

const Footer = () => {

    return (
      <main className=" mt-10">
        <div className=" flex gap-[40rem] w-[700px] p-10 ml-[200px]">
          <img src={logo} alt="" className="w-[100px] h-[100px]" />
          <img src={footerlogo} alt="" className="w-[400px] h-[350px]" />
        </div>
      </main>
    );
}

export default Footer;