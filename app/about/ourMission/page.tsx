
import EventsBlock from '@/components/EventsBlock';
import ServiceTimes from '@/components/ServiceTimes';
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col gap-5 py-8 ">
      <div className="border-2 rounded-lg p-3  mx-6 lg:mx-12">
        <h1 className="text-xl sm:text-2xl">Our Mission</h1>
        <p className="text-[15px] sm:text-lg">
          To prepare families and individuals, for the second coming of our Lord
          and Savior Jesus Christ.
        </p>
      </div>
      <div className="border-2 rounded-lg p-3  mx-6 lg:mx-12">
        <h1 className="text-xl sm:text-2xl">Our Vision</h1>
        <p className="text-[15px] sm:text-lg">
          To create an atmosphere of true worship, that will bring down the
          glory of God in the midst of His people.
        </p>
      </div>
      {/* service time component */}
      <div className="wrapper mb-14 lg:mb-20">
        <ServiceTimes />
      </div>
      {/* events block */}
      <div className=" mb-14 lg:mb-20">
        <EventsBlock />
      </div>
    </div>
  );
}
