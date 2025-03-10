"use client";
import SearchBar from "@/components/SearchBar";
import ImageFill from "@/lib/components/ImageFill";
import { formattedDateRange } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Event, getAllEvents } from "../utils/api-request";
// import { getAllEvents } from "../utils/actions";
// export const metadata: Metadata = {
//   title: "Our Upcoming Events",
//   description: "Stay up to date, don’t miss any.",
// };

export default  function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchQuery = (searchParams.searchQuery || "") as string;
  const dateQuery = (searchParams.dateQuery || "") as string;

   const [events, setEvents] = useState<Event[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     async function fetchEvents() {
       const eventsData = await getAllEvents(searchQuery, dateQuery);
       setEvents(eventsData || []);
       setLoading(false);
     }
     fetchEvents();
   }, [searchQuery, dateQuery]);

   if (loading) {
     return <p>Loading...</p>;
   }

  return (
    <div className="py-12 wrapper space-y-10">
      {/* search bar */}
      <div className="wrapper">
        <SearchBar searchQuery={searchQuery} dateQuery={dateQuery} />
      </div>
      {/* Events */}

      <div className="flex flex-col py-10  gap-10">
        {/* cards sections */}
        {events?.length === 0 ? (
          <p className="text-center w-full h-full flex items-center font-semibold justify-center text-gray-500  text-xl">
            No upcoming events at the moment
          </p>
        ) : (
          events?.map((event, i) => {
            // getting formatted date
            const startDate = new Date(event.start_date);
            const endDate = new Date(event.end_date);

            return (
              <div
                key={i}
                className=" even:lg:flex-row-reverse flex items-center justify-center gap-8 flex-col lg:flex-row">
                {/* image */}
                <div className="relative w-full lg:w-1/2 lg:max-w-[500px] h-80 text-center">
                  <div className="date absolute blueGradient rounded px-2 py-1 z-10 top-2 mx-3  md:text-lg right-0 left-0 break-words ">
                    <p>{event.location}</p>
                    <hr className="w-1/2 mx-auto opacity-50 my-1 border" />
                    <p>{`${formattedDateRange(startDate, endDate)}`}</p>
                  </div>

                  <ImageFill
                    // NOTE: change the src to event banner
                    src={`${process.env.NEXT_PUBLIC_API_URL}/event-image/${!!event.banner ? event.banner : ""}`}
                    className="rounded-lg"
                  />
                </div>
                {/* text */}
                <div className="text space-y-4 lg:w-1/2">
                  <h1 className="text-xl md:text-2xl">{event.title}</h1>
                  <p className="md:text-lg">{event.short_description}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
