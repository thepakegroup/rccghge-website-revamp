import { onThisDay } from "@/lib/constants";

// EVENTS
export type Event = {
  id: number;
  title: string;
  short_description: string;
  banner: string;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
  slug: string;
  location: string;
  notice_tag: number;
};

export const getAllEvents = async (
  searchQuery: string = "",
  dateQuery: string = ""
): Promise<Event[] | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/events/1?search=${searchQuery}&date=${dateQuery}`,
      { ...onThisDay }
    );
    const eventData = await res.json();
    if (!res.ok) {
      console.error(eventData.message);
      return;
    }

    return eventData.message.data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const get3Events = async () => {
  try {
    const events = await getAllEvents();
    if (!events) {
      return;
    }

    return events?.slice(0, 3);
  } catch (error) {
    return;
  }
};

// SERVICE TIMES
export type ServiceTime = {
  id: number;
  service_name: string;
  service_description: string;
  service_period: string;
  image_url: string;
  created_at: string;
  updated_at: string;
};
export const getServiceTimes = async (): Promise<ServiceTime[] | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/service-times`,
      { ...onThisDay }
    );
    if (!res.ok) {
      return;
    }
    const serviceTimesData = await res.json();

    return serviceTimesData.message.reverse();
  } catch (error) {
    return;
  }
};