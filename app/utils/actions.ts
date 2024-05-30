"use server";
import { onThisDay } from "@/lib/constants";
// ## GET REQUESTS ## //

// HERO SECTION
type Slide = {
  id: number;
  image_url: string;
  target_page: string;
  order: number;
};

type Setting = {
  id: number;
  page_name: string;
  settings: DisplaySetting;
};

type SliderData = {
  settings: Setting;
  slides: Slide[];
};

export type HeroContent = {
  title: string;
  desc: string;
  ImgArr: string[];
};

type DisplaySetting = {
  heading_text: string;
  description_text: string;
  our_service_times: "true" | "false";
  our_upcoming_events: "true" | "false";
  our_mission_vision: "true" | "false";
  our_ministries: "true" | "false";
};

export const getHeroContent = async (
  pageName: string
): Promise<HeroContent | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/page-setting/info?name=${pageName}`,
      { ...onThisDay }
    );
    const heroContent = await res.json();

    if (!res.ok) {
      console.error(heroContent.data);
      return;
    }
    const imgArr = heroContent.data.slides.map((slide: Slide) => {
      return slide.image_url;
    });
    const title = heroContent.data.settings.settings.heading_text;
    const desc = heroContent.data.settings.settings.description_text;
    return {
      title: title,
      desc: desc,
      ImgArr: imgArr,
    };
  } catch (error) {
    console.error(error);

    return;
  }
};

export const getPageDisplaySetting = async (
  pageName: string
): Promise<DisplaySetting | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/page-setting/info?name=${pageName}`,
      { ...onThisDay }
    );
    const displaySettings = await res.json();
    if (!res.ok) {
      console.error(displaySettings.data);
      return;
    }
    return displaySettings.data.settings.settings;
  } catch (error) {
    console.error(error);
    return;
  }
};

// MINISTRIES
export type Ministry = {
  id: number;
  name: string;
  banner: string;
  slug: string;
  category: string;
  description: string;
};
// Get all  Ministries/Departments
export const getMinistries = async (
  category: string
): Promise<Ministry[] | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/groups?category=${category}&page=1`,
      { ...onThisDay }
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
export const getMinistriesSlug = async (
  category: string
): Promise<{ slug: string; name: string }[] | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/groups?category=${category}&page=1`,
      { ...onThisDay }
    );
    const ministryData = await res.json();
    if (!res.ok) {
      console.error(ministryData);
      return;
    }
    return ministryData?.message.data.map((data: Ministry) => ({
      slug: data.slug,
      name: data.name,
    }));
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
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/writeup/${slug}`,
      { ...onThisDay }
    );
    const writeUpData = await res.json();
    if (!res.ok) {
      console.error(writeUpData.message);
      return;
    }
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
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/leaders`,
      { ...onThisDay }
    );
    const leadersData = await res.json();
    if (!res.ok) {
      console.error(leadersData.message);
      return;
    }
    return leadersData.message.reverse();
  } catch (error) {
    return;
  }
};
export const getSingleLeader = async (
  slug: string
): Promise<Leader | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/leader/${slug}`,
      { ...onThisDay }
    );
    const leaderData = await res.json();
    if (!res.ok) {
      console.error(leaderData.message);
      return;
    }

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
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/oms/our-mission`,
      { ...onThisDay }
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
type Belief = Mission;
// OUR BELIEFS
export const getOurBeliefs = async (): Promise<Belief[] | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/oms/our-belief`,
      { ...onThisDay }
    );
    const ourBeliefData = await res.json();
    if (!res.ok) {
      console.log("something went wrong", ourBeliefData.message);
      return;
    }
    return ourBeliefData.message;
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

// ## POST REQUESTS ## //
// SEND PRAYER REQUEST
type PrayerRequest = {
  name: string;
  email: string;
  subject: string;
  mobile: string;
  content: string;
};
export const sendPrayerRequest = async (data: PrayerRequest) => {
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

// SUBSCRIBE NEWSLETTER
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
    console.error("Error subscribing:", error);
    throw new Error("Subscription Failed. Please try again.");
  }
};
// SUBSCRIBE SERMON

export const subscribeSermon = async (formData: FormData) => {
  const email = formData.get("email") as string;
  if (!email) return;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/sermon-subscription`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!res.ok) {
      throw new Error("Subscription Failed. Please try again.");
    }
    await res.json();

    return "Subscribed successfully";
  } catch (error) {
    console.error("subscription failed:", error);
    throw new Error("Subscription Failed. Please try again.");
  }
};

// SEND CONNECT REQUEST
type Connect = {
  name: string;
  mobile: string;
  email: string;
  gender: "MALE" | "FEMALE";
  marital_status: "MARRIED" | "SINGLE" | "DIVORCED" | "WIDOWED";
  attended_service_as: "In-Person" | "Online";
  birthdate: string;
  first_impression: string;
  contact_about: string;
  sign_me_up_for: string;
  prayer_request: string;
};

export const connectWithUs = async (data: Connect) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/new-connect`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error("Request Failed. Please try again.");
    }
    await res.json();

    return "Request sent successfully";
  } catch (error) {
    console.error("Error sending request:", error);
    throw new Error("Request Failed. Please try again.");
  }
};

type JoinUs = {
  name: string;
  email: string;
  mobile: string;
  ministry: string;
};
// JOIN US
export const joinUs = async (data: JoinUs) => {
  // join-group
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/join-group`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error("Request Failed. Please try again.");
    }
    await res.json();

    return "Request sent successfully";
  } catch (error) {
    console.error("Error sending request:", error);
    throw new Error("Request Failed. Please try again.");
  }
};

// INSTAGRAM FEED
// export const getInstagramFeed = async () => {
//   const res = await fetch(
//     `https://graph.instagram.com/me/media?fields=id,caption,permalink&access_token=${process.env.INSTAGRAM_KEY}`
//   );
//   const data = await res.json();
//   // console.log(data);
// };
