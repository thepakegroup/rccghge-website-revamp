"use server";
// MINISTRIES
export type Ministry = {
  id: number;
  name: string;
  banner: string;
  slug: string;
  category: string;
  description: string;
};

export const getMinistries = async (
  category: string
): Promise<Ministry[] | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/groups?category=${category}&page=1`
    );
    const ministryData = await res.json();

    if (!res.ok) {
      console.error(ministryData);
      return;
    }
    return ministryData.message.data;
  } catch (error) {
    console.error(error);
  }
};
// PAGE WRITE UPS
type PageWriteUp = {
  id: number;
  page_title: string;
  content: string;
  heading: string;
  created_at: string;
  updated_at: string;
};

export const getPageWriteUp = async (
  slug: string
): Promise<PageWriteUp | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/writeup/${slug}`
    );
    const writeUpData = await res.json();
    // if (!res.ok) {
    //   console.error(writeUpData.message);
    //   return;
    // }
    return writeUpData.message[0];
  } catch (error) {
    console.error(error);

    return;
  }
};

// LEADERS
type Leader = {
  id: number;
  name: string;
  title: string;
  qualification: string;
  profile_picture: string;
  short_description: string;
  full_story_about: string;
  position: string;
  slug: string;
  created_at: string;
  updated_at: string;
};

export const getAllLeaders = async (): Promise<Leader[] | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/leaders`
    );
    const leadersData = await res.json();
    if (!res.ok) {
      console.error(leadersData.message);
      return;
    }
    return leadersData.message;
  } catch (error) {
    return;
  }
};
export const getSingleLeader = async (
  slug: string
): Promise<Leader | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/leader/${slug}`
    );
    const leaderData = await res.json();
    if (!res.ok) {
      console.error(leaderData.message);
      return;
    }
    // console.log(leaderData);
    return leaderData.message;
  } catch (error) {
    console.error("Error getting leaders", error);
    // return;
  }
};
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

export const getAllEvents = async (): Promise<Event[] | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/events/1`
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
// OUR MISSION
type Mission = {
  id: number;
  title: string;
  description: string;
  category: string;
  created_at: string;
  updated_at: string;
};
export const getOurMissions = async (): Promise<Mission[] | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/oms/our-mission`
    );
    const missionsData = await res.json();
    if (!res.ok) {
      console.log("something went wrong", missionsData.message);
      return;
    }
    return missionsData.message;
  } catch (error) {
    console.error("something went wrong", error);
    return;
  }
};

// SERVICE TIMES
type ServiceTime = {
  id: number;
  service_name: string;
  service_description: string;
  service_period: string;
  created_at: string;
  updated_at: string;
};
export const getServiceTimes = async (): Promise<ServiceTime[] | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/service-times`
    );
    if (!res.ok) {
      return;
    }
    const serviceTimesData = await res.json();

    return serviceTimesData.message;
  } catch (error) {
    return;
  }
};

// SEND PRAYER REQUEST
type PrayerRequest = {
  name: string;
  email: string;
  subject: string;
  mobile: string;
  content: string;
};
export const sendPrayerRequest = async (data: PrayerRequest) => {
  console.log(data);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/create-prayer-request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!res.ok) {
      throw new Error("Failed to send prayer request. Please try again.");
    }
    const prayerRequestData = await res.json();
    return prayerRequestData.message;
  } catch (error) {
    console.error("Error sending prayer request:", error);
    throw new Error("Failed to send prayer request. Please try again.");
  }
};

//SEND RIDE REQUEST
type RideRequest = {
  name: string;
  address: string;
  mobile_number: string;
  date: Date;
  passengers: string;
};

export const sendRideRequest = async (data: RideRequest) => {
  console.log(data);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/ride-request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log(res.json);
    if (!res.ok) {
      throw new Error("Failed to send ride request. Please try again.");
    }
    await res.json();
    return "Request sent successfully";
  } catch (error) {
    console.log("Error sending ride request:", error);
    throw new Error("Failed to send ride request. Please try again.");
  }
};

// SEND QUESTION
type Question = {
  name: string;
  email: string;
  mobile_number: string;
  question: string;
};

export const sendQuestion = async (data: Question) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/question`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!res.ok) {
      throw new Error("Failed to send question. Please try again.");
    }
    await res.json();

    return "Question sent successfully";
  } catch (error) {
    console.error("Error sending question:", error);
    throw new Error("Failed to send question. Please try again.");
  }
};

// SUSCRIBE NEWSLETTER
type Newsletter = {
  name: string;
  email: string;
  mobile: string;
};

export const subscribeNewsletter = async (data: Newsletter) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error("Subscription Failed. Please try again.");
    }
    await res.json();

    return "Subscribed successfully";
  } catch (error) {
    console.error("Error sending question:", error);
    throw new Error("Subscription Failed. Please try again.");
  }
};
