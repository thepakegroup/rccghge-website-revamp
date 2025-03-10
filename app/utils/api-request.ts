import { API_URL, onThisDay } from "@/lib/constants";
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
  // give page settings
  give_section: {
    give_header_text: string;
    give_subheading: string;
    give_bg_image: string;
  };
  // i'm new page settings
  subheading_text: string;
  subheading_description_text: string;
  arrivalAndParking: string;
  worshipExperience: string;
  sundayServices: {
    adultsText: string;
    adultYoutubeLink: string;
    nextGenYouthText: string;
    nextGenKidsText: string;
    pageImage: string;
    hgeSeedsText: string;
    teenagersChapelText: string;
    nextImpactServiceText: string;
  };
  wednesdayBibleStudy: {
    adultText: string;
    nextGenYouthText: string;
    nextGenKidText: string;
  };
  pageVideoLink: {
    url: string;
  };
  blueBannerContent: {
    body: string;
  };
};

export const getHeroContent = async (
  pageName: string
): Promise<HeroContent | undefined> => {
  try {
    const res = await fetch(
      `${API_URL}/page-setting/info?name=${pageName}`,
      { ...onThisDay }
    );
    const heroContent = await res.json();

    if (!res.ok) {
      console.error(heroContent.data);
      return { title: "", desc: "", ImgArr: [] };
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
    return { title: "", desc: "", ImgArr: [] };
  }
};

export const getPageDisplaySetting = async (
  pageName:
    | "landing_page"
    | "our_mission"
    | "give"
    | "iam_new_page"
    | "our_ministries"
    | "our_story"
    | "our_pastors"
    | "our_beliefs"
    | "rccghge_worldwide"
    | "prayer_request"
): Promise<DisplaySetting | undefined> => {
  try {
    const res = await fetch(
      `${API_URL}/page-setting/info?name=${pageName}`,
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
      `${API_URL}/groups?category=${category}&page=1`,
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
      `${API_URL}/groups?category=${category}&page=1`,
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
      `${API_URL}/writeup/${slug}`,
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
    const res = await fetch(`${API_URL}/leaders`, {
      ...onThisDay,
    });
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
      `${API_URL}/leader/${slug}`,
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
      `${API_URL}/oms/our-mission`,
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
      `${API_URL}/oms/our-belief`,
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
      `${API_URL}/events/1?search=${searchQuery}&date=${dateQuery}`,
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
      `${API_URL}/service-times`,
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
