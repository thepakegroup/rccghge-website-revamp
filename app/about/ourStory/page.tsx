import EventsBlock from "@/components/EventsBlock";
import ServiceTimes from "@/components/ServiceTimes";
import TitleBorderTop from "@/components/TitleBorderTop";
import React from "react";

export default function page() {
  return (
    <div className="py-10 sm:py-20 space-y-10 sm:space-y-20">
      <div className="wrapper space-y-5 ">
        <TitleBorderTop title="A special welcome to you!" />
        <div className="text-[15px] sm:text-base space-y-4 tracking-wide leading-relaxed">
          <p>
            We’re thrilled that you’ve decided to get to know us! Before you
            tour our site, we’d like to share a few things from our heart to
            yours. You see, Heaven’s Glorious Embassy has a vision to create an
            atmosphere of true worship that will bring down the Glory of God in
            the midst of His people.
          </p>
          <p>
            Our mission is to prepare families and individuals for the second
            coming of our Lord and Savior- Jesus Christ. The commandment that
            Jesus gave us in Mathew 22:36-40, that we should love our neighbors
            as ourselves, is in our every effort to reach neighbors in our
            immediate community, and around the world.
          </p>
          <p>
            Come and visit one of our Worship Services and/or Bible Fellowship
            small groups! Meet people just like you, and grow in your
            relationship with the Lord! Heaven’s Glorious Embassy is not just
            another Church.  It is much more than that! We are a family Church,
            a praying Church, a learning Church, a loving Church and a listening
            Church.
          </p>
          <p>
            As you step inside our auditorium, you will quickly recognize our
            camaraderie in an environment where exuberance and passion for God
            and His word, intertwine marvelously. We are a happy and buoyant
            people. Come and experience the spirit of true friendship and
            togetherness. We look forward to welcoming you.
          </p>
        </div>
      </div>
      <ServiceTimes />
      <EventsBlock />
    </div>
  );
}
