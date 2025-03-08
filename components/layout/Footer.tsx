"use client";
import { subscribeSermon } from "@/app/utils/actions";
import {
  Event,
  get3Events,
  getServiceTimes,
  ServiceTime,
} from "@/app/utils/api-request";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import { Button } from "../ui/button";
import FooterInputButton from "./FooterInputButton";
import MaxWidthContainer from "../MaxWidthContainer";
import { Instagram, Mail } from "lucide-react";
import Image from "next/image";

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
    <div className=" wrapper py-5 md:py-12 bg-black text-white  text-sm  ">
      <MaxWidthContainer className="flex flex-col gap-8 lg:flex-row">
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
              const { monthFormat, rangeFormat } = formatDate(
                startDate,
                endDate
              );
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
        <div className="flex flex-col w-full gap-4">
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
          {/* social link */}
          <div className="flex-col gap-4">
            <p className="bold underline underline-offset-4 decoration-primary decoration-2 mb-4 text-lg">
              Social Links
            </p>
            <div className="social-link flex gap-4 w-full ">
              <a href="mailto:info@rccghge.org">
                <Mail size="24" />
              </a>
              {/* X icon */}
              <a
                target=" _blank "
                rel="noopener noreferrer"
                href="https://twitter.com/hgerccg?s=11">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.8629 22.6669L1.96592 2.22843C1.88213 2.12053 1.8303 1.99128 1.81633 1.85539C1.80236 1.71949 1.8268 1.58241 1.88688 1.45971C1.94695 1.33702 2.04026 1.23365 2.15617 1.16136C2.27209 1.08907 2.40596 1.05076 2.54257 1.05078H5.55968C5.67075 1.05095 5.78032 1.07646 5.88004 1.12537C5.97976 1.17428 6.067 1.2453 6.13512 1.33303L22.0321 21.7715C22.1159 21.8794 22.1677 22.0087 22.1817 22.1445C22.1957 22.2804 22.1712 22.4175 22.1112 22.5402C22.0511 22.6629 21.9578 22.7663 21.8419 22.8386C21.726 22.9109 21.5921 22.9492 21.4555 22.9492H18.4384C18.3273 22.949 18.2177 22.9235 18.118 22.8746C18.0183 22.8257 17.931 22.7546 17.8629 22.6669Z"
                    stroke="#F1FAFE"
                    strokeWidth="0.90625"
                  />
                  <path
                    d="M21.7308 1.05078L2.26562 22.9492"
                    stroke="#F1FAFE"
                    strokeWidth="0.90625"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              {/* instagram icon */}
              <a
                target=" _blank "
                rel="noopener noreferrer"
                href="https://www.instagram.com/rccghge/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0011 0C8.74209 0 8.33309 0.01425 7.05307 0.0725C5.77556 0.131 4.90355 0.33325 4.14054 0.63C3.35129 0.9365 2.68178 1.3465 2.01477 2.01375C1.34726 2.68075 0.93726 3.35025 0.629757 4.13925C0.332253 4.9025 0.129751 5.77475 0.0722508 7.05175C0.0150002 8.33175 0 8.741 0 12C0 15.259 0.0145002 15.6667 0.0725008 16.9467C0.131251 18.2242 0.333503 19.0963 0.630007 19.8593C0.93676 20.6485 1.34676 21.318 2.01402 21.985C2.68078 22.6525 3.35028 23.0635 4.13904 23.37C4.90255 23.6668 5.77481 23.869 7.05207 23.9275C8.33209 23.9858 8.74084 24 11.9996 24C15.2589 24 15.6667 23.9858 16.9467 23.9275C18.2242 23.869 19.0972 23.6668 19.8607 23.37C20.6497 23.0635 21.3182 22.6525 21.985 21.985C22.6525 21.318 23.0625 20.6485 23.37 19.8595C23.665 19.0963 23.8675 18.224 23.9275 16.947C23.985 15.667 24 15.259 24 12C24 8.741 23.985 8.332 23.9275 7.052C23.8675 5.7745 23.665 4.9025 23.37 4.1395C23.0625 3.35025 22.6525 2.68075 21.985 2.01375C21.3175 1.34625 20.65 0.93625 19.86 0.63C19.0949 0.33325 18.2224 0.131 16.9449 0.0725C15.6649 0.01425 15.2574 0 11.9974 0H12.0011ZM10.9246 2.16247C11.2441 2.16197 11.6006 2.16247 12.0011 2.16247C15.2051 2.16247 15.5849 2.17397 16.8501 2.23147C18.0201 2.28497 18.6551 2.48047 19.0781 2.64472C19.6381 2.86222 20.0374 3.12222 20.4572 3.54222C20.8772 3.96222 21.1372 4.36222 21.3552 4.92222C21.5194 5.34472 21.7152 5.97972 21.7684 7.14972C21.8259 8.41472 21.8384 8.79472 21.8384 11.9972C21.8384 15.1997 21.8259 15.5797 21.7684 16.8447C21.7149 18.0147 21.5194 18.6497 21.3552 19.0722C21.1377 19.6322 20.8772 20.031 20.4572 20.4507C20.0372 20.8707 19.6384 21.1307 19.0781 21.3482C18.6556 21.5132 18.0201 21.7082 16.8501 21.7617C15.5851 21.8192 15.2051 21.8317 12.0011 21.8317C8.79679 21.8317 8.41704 21.8192 7.15202 21.7617C5.98201 21.7077 5.347 21.5122 4.92375 21.348C4.36374 21.1305 3.96374 20.8705 3.54374 20.4505C3.12373 20.0305 2.86373 19.6315 2.64573 19.0712C2.48147 18.6487 2.28572 18.0137 2.23247 16.8437C2.17497 15.5787 2.16347 15.1987 2.16347 11.9942C2.16347 8.78972 2.17497 8.41172 2.23247 7.14672C2.28597 5.97672 2.48147 5.34172 2.64573 4.91872C2.86323 4.35872 3.12373 3.95872 3.54374 3.53872C3.96374 3.11872 4.36374 2.85872 4.92375 2.64072C5.34675 2.47572 5.98201 2.28072 7.15202 2.22697C8.25903 2.17697 8.68804 2.16197 10.9246 2.15947V2.16247ZM18.4066 4.15497C17.6116 4.15497 16.9666 4.79922 16.9666 5.59447C16.9666 6.38947 17.6116 7.03447 18.4066 7.03447C19.2017 7.03447 19.8467 6.38947 19.8467 5.59447C19.8467 4.79947 19.2017 4.15497 18.4066 4.15497ZM12.0011 5.83747C8.59786 5.83747 5.83858 8.59672 5.83858 12C5.83858 15.4032 8.59786 18.1612 12.0011 18.1612C15.4044 18.1612 18.1627 15.4032 18.1627 12C18.1627 8.59672 15.4044 5.83747 12.0011 5.83747ZM12.0011 7.99997C14.2101 7.99997 16.0011 9.79072 16.0011 12C16.0011 14.209 14.2101 16 12.0011 16C9.79183 16 8.00106 14.209 8.00106 12C8.00106 9.79072 9.79183 7.99997 12.0011 7.99997Z"
                    fill="#F1FAFE"
                  />
                </svg>
              </a>
              {/* youtube */}
              <a
                href="https://www.youtube.com/channel/UCJlY1wMFzBuFrEXKG4i2A_w/featured"
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  src="/images/youtube.svg"
                  height={24}
                  width={24}
                  alt="youtube"
                  className="filter invert"
                />
              </a>
              {/* vimeo */}
              <a
                href="https://vimeo.com/user22347627"
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  src="/images/vimeo.svg"
                  height={24}
                  width={24}
                  alt="vimeo"
                  className="filter invert"
                />
              </a>
            </div>
          </div>
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
      </MaxWidthContainer>
    </div>
  );
}
