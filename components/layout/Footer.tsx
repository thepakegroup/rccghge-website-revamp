"use client";
import { subscribeSermon } from "@/app/utils/actions";
import { Event, get3Events, getServiceTimes, ServiceTime } from "@/app/utils/api-request";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import { Button } from "../ui/button";
import FooterInputButton from "./FooterInputButton";

export default function Footer() {
  const [events, setEvents] = useState<Event[] | undefined>();
  const [serviceTimes, setServiceTimes] = useState<ServiceTime[] | undefined>();

  useEffect(() => {
    async function fetchData() {
      const eventsData = await get3Events();
      const serviceTimesData = await getServiceTimes();
      setEvents(eventsData);
      setServiceTimes(serviceTimesData);
    }
    fetchData();
  }, []);

  function formatDate(startDate: Date, endDate: Date) {
    // Get month abbreviation (e.g., JAN)
    const monthAbbreviation = startDate
      .toLocaleString("default", { month: "short" })
      .toUpperCase();

    // Get day of the month
    const dayOfMonth = startDate.getDate();

    // Get month name (e.g., January)
    const startMonth = startDate.toLocaleString("default", { month: "long" });
    const endMonth = endDate.toLocaleString("default", { month: "long" });

    // Get hour (12-hour format)
    const startHour = startDate.getHours() % 12 || 12;
    const endHour = endDate.getHours() % 12 || 12;

    // Get minutes
    const startMin = startDate.getMinutes().toString().padStart(2, "0");
    const endMin = endDate.getMinutes().toString().padStart(2, "0");

    // Get AM/PM
    const ampm = startDate.getHours() >= 12 ? "pm" : "am";

    // Construct the formatted date string
    const monthFormat = `${monthAbbreviation} ${dayOfMonth}`;
    const rangeFormat = `${startMonth} ${dayOfMonth} @ ${startHour}:${startMin} ${ampm} - ${endMonth} ${endHour}:${endMin} ${ampm}`;

    return { monthFormat, rangeFormat };
  }

  return (
    <div className=" wrapper py-5 md:py-12 bg-black text-white flex flex-col  lg:flex-row  text-sm gap-8">
      {/* contact address and logo */}
      <div className=" flex flex-col w-full gap-10">
        <div className="contact w-full flex flex-col gap-6">
          <Link
            href="/"
            className=" logo flex items-center justify-center bg-white p-2 w-fit gap-4 rounded-lg">
            <Logo className="w-[40%] " />
            <h2 className="text-xl font-bold text-black">RCCGHGE</h2>
          </Link>
          <div className="text flex flex-col ">
            <p className="uppercase">{`HEAVEN'S GLORIOUS EMBASSY `}</p>
            <p className="">{`3800 E. Parker Road`}</p>
            <p className="">{`Plano TX 75074`}</p>
            <p className="phonNo">{`972-509-5300`}</p>
            <p className="email">{`info@rccghge.org`}</p>
          </div>
        </div>
        {/* email input */}
        <div className="hidden flex-col self-start lg:flex gap-2  ">
          <p className="capitalize">receive our sermons in your mail</p>
          <form
            action={subscribeSermon}
            className="input flex border border-white rounded-lg  ">
            <input
              required
              placeholder="Enter Email Address"
              className="bg-transparent w-[200px] p-2 "
              type="email"
              name="email"
              id="email"
            />
            <FooterInputButton />
          </form>
          <small>Copyright RCCG: Heaven&apos;s Glorious Embassy</small>
        </div>
      </div>
      {/* calendar */}
      <div className="calendar  w-full ">
        <p className="bold underline underline-offset-4 decoration-primary decoration-2 mb-4 text-lg">
          Calendar
        </p>
        <ul className="flex flex-col gap-4 [&_li]:space-y-1 [&_.title]:underline decoration-white ">
          {events?.map((event, i) => {
            const startDate = new Date(event.start_date);
            const endDate = new Date(event.end_date);
            const { monthFormat, rangeFormat } = formatDate(startDate, endDate);
            return (
              <li key={i}>
                <p className="date">{monthFormat}</p>
                <p className="time">{rangeFormat}</p>
                <p className="title">{event?.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
      {/* service times */}
      <div className="service-time  w-full ">
        <p className="bold underline underline-offset-4 decoration-primary decoration-2 mb-4 text-lg">
          Service Times
        </p>
        <ul className="grid grid-cols-2 gap-4   [&_li]:space-y-1 [&_.title]:capitalize ">
          {serviceTimes?.map((service, i) => {
            const [startTime, startAmPm, endTime, endAmPm] =
              service.service_period.split(" ");
            return (
              <li key={i} className=" ">
                <p className="title">{service.service_name}:</p>
                <p className="time">
                  {`${startTime} ${startAmPm} - ${endTime} ${endAmPm}`}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      {/* email input */}
      <div className="flex flex-col  w-fit justify-self-start self-start lg:hidden gap-2    ">
        <p className="capitalize">receive our sermons in your mail</p>
        <form
          id="footer-input"
          action={subscribeSermon}
          className="input flex border p-px border-white rounded-lg  ">
          <input
            required
            placeholder="Enter Email Address"
            className="bg-transparent w-[200px] p-2 "
            type="email"
            name="email"
            id="email"
          />
          <FooterInputButton />
        </form>
        <small>Copyright RCCG: Heaven&apos;s Glorious Embassy</small>
      </div>
    </div>
  );
}
