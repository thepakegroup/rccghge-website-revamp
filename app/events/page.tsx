'use client';
import MaxWidthContainer from '@/components/MaxWidthContainer';
import PageSkeleton from '@/components/PageSkeleton';
import SearchBar from '@/components/SearchBar';
import ImageFill from '@/lib/components/ImageFill';
import { formattedDateRange } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Event, getAllEvents } from '../utils/api-request';
// import { getAllEvents } from "../utils/actions";
// export const metadata: Metadata = {
//   title: "Our Upcoming Events",
//   description: "Stay up to date, don’t miss any.",
// };

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchQuery = (searchParams.searchQuery || '') as string;
  const dateQuery = (searchParams.dateQuery || '') as string;

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
    return (
      <MaxWidthContainer>
        <PageSkeleton />
      </MaxWidthContainer>
    );
  }

  return (
    <MaxWidthContainer className="wrapper space-y-10 py-12">
      {/* search bar */}
      <div className="wrapper">
        <SearchBar searchQuery={searchQuery} dateQuery={dateQuery} />
      </div>
      {/* Events */}

      <div className="flex flex-col gap-10  py-10">
        {/* cards sections */}
        {events?.length === 0 ? (
          <p className="flex h-full w-full items-center justify-center text-center text-xl font-semibold  text-gray-500">
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
                className=" flex flex-col items-center justify-center gap-8 lg:flex-row even:lg:flex-row-reverse"
              >
                {/* image */}
                <div className="relative h-80 w-full text-center lg:w-1/2 lg:max-w-[500px]">
                  <div className="date blueGradient absolute left-0 right-0 top-2 z-10 mx-3 break-words  rounded px-2 py-1 md:text-lg ">
                    <p>{event.location}</p>
                    <hr className="mx-auto my-1 w-1/2 border opacity-50" />
                    <p>{`${formattedDateRange(startDate, endDate)}`}</p>
                  </div>

                  <ImageFill
                    // NOTE: change the src to event banner
                    src={`${process.env.NEXT_PUBLIC_API_URL}/event-image/${!!event.banner ? event.banner : ''}`}
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
    </MaxWidthContainer>
  );
}
