import React from "react";
import Logo from "../Logo";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className=" wrapper py-5 md:py-20 bg-black text-white flex flex-col  lg:flex-row  text-sm gap-8">
      {/* contact address and logo */}
      <div className=" flex flex-col w-full gap-10">
        <div className="contact w-full flex flex-col gap-6">
          <div className=" logo flex items-center justify-center bg-white p-2 w-fit gap-4 rounded-lg">
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
        {/* email input */}
        <div className="hidden flex-col self-start lg:flex gap-2  ">
          <p className="capitalize">receive our sermons in your mail</p>
          <div className="input flex border border-white rounded-lg  ">
            <input
              placeholder="Enter Email Address"
              className="bg-transparent w-[200px] p-2 "
              type="email"
              name="email"
              id="email"
            />
            <Button className=" rounded-l-none ">Send</Button>
          </div>
          <small>Copyright RCCG: Heaven&apos;s Glorious Embassy</small>
        </div>
      </div>
      {/* calendar */}
      <div className="calendar  w-full ">
        <p className="bold underline underline-offset-4 decoration-primary decoration-2 mb-4 text-lg">
          Calendar
        </p>
        <ul className="flex flex-col gap-4 [&_li]:space-y-1 [&_.title]:underline decoration-white ">
          <li className="">
            <p className="date">JAN11</p>
            <p className="time">January 11 @ 7:00 pm - February 29 @ 8:00 pm</p>
            <p className="title">50 DAYS OF FASTING AND PRAYERS</p>
          </li>

          <li>
            <p className="date">JAN11</p>
            <p className="time">January 11 @ 7:00 pm - February 29 @ 8:00 pm</p>
            <p className="title">50 DAYS OF FASTING AND PRAYERS</p>
          </li>
          <li>
            <p className="date">JAN11</p>
            <p className="time">January 11 @ 7:00 pm - February 29 @ 8:00 pm</p>
            <p className="title">50 DAYS OF FASTING AND PRAYERS</p>
          </li>
        </ul>
      </div>
      {/* service times */}
      <div className="service-time  w-full ">
        <p className="bold underline underline-offset-4 decoration-primary decoration-2 mb-4 text-lg">
          Service Times - Online
        </p>
        <ul className="grid grid-cols-2 gap-4   [&_li]:space-y-1 [&_.title]:capitalize ">
          <li className=" ">
            <p className="title">sunday school:</p>
            <p className="time">9:00am-9:45am</p>
          </li>
          <li className=" ">
            <p className="title">sunday school:</p>
            <p className="time">9:00am-9:45am</p>
          </li>
          <li className=" ">
            <p className="title">sunday school:</p>
            <p className="time">9:00am-9:45am</p>
          </li>
          <li className=" ">
            <p className="title">sunday school:</p>
            <p className="time">9:00am-9:45am</p>
          </li>
          <li className=" ">
            <p className="title">sunday school:</p>
            <p className="time">9:00am-9:45am</p>
          </li>
        </ul>
      </div>
      {/* email input */}
      <div className="flex flex-col  w-fit justify-self-start self-start lg:hidden gap-2    ">
        <p className="capitalize">receive our sermons in your mail</p>
        <div className="input flex border p-px border-white rounded-lg  ">
          <input
            placeholder="Enter Email Address"
            className="bg-transparent w-[200px] p-2 "
            type="email"
            name="email"
            id="email"
          />
          <Button className=" rounded-l-none  ">Send</Button>
        </div>
        <small>Copyright RCCG: Heaven&apos;s Glorious Embassy</small>
      </div>
    </div>
  );
}
