import React from "react";
import Logo from "../Logo";

export default function Footer() {
  return (
    <div className="wrapper py-2 bg-black text-white flex flex-col justify-center  lg:flex-row items-center">
      {/* contact address and logo */}
      <div className="contact flex flex-col gap-6">
        <div className=" logo flex items-center justify-center bg-white p-2 gap-4 rounded-lg">
          <Logo className="w-[40%] " />
          <h2 className="text-xl font-bold text-black">RCCGHGE</h2>
        </div>
        <div className="text flex flex-col ">
          <p className="uppercase">{`HEAVEN'S GLORIOUS EMBASSY 3800`}</p>
          <p className="">{` E. Parker Road`}</p>
          <p className="">{`Plano TX 75074`}</p>
          <p className="phonNo">{`972-509-5300`}</p>
          <p className="email">{`info@rccghge.org events@rccghge.org`}</p>
        </div>
      </div>
      {/* calendar */}
      <div className="calendar">
        <p className="bold underline underline-offset-2 decoration-primary decoration-2">
          Calendar
        </p>
        <ul className="flex flex-col">
          <li>
            <p className="date">JAN11</p>
            <p className="time">January 11 @ 7:00 pm - February 29 @ 8:00 pm</p>
            <p className="title">50 DAYS OF FASTING AND PRAYERS</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
