"use server";

import { HeroContent } from "./actions";
import { onThisDay } from "@/lib/constants";
// Get youth ministry
export type Team = {
  id: number;
  name: string;
  office: string;
  image_url: string;
  created_at: string;
  updated_at: string;
};

type Slider = {
  item_url: string;
  id: number;
};

export type GalleryItem = Slider;

type Subsection = {
  our_mission: {
    title: string;
    content: string;
  };
  our_vision: {
    title: string;
    content: string;
  };
  our_events: {
    title: string;
    content: string;
  };
  media_url: string;
};

type YoungAdultsSettings = {
  id: number;
  ministry: string;
  settings: {
    heading_text: string;
    heading_description: string;
    subheading_description: string;
    subheading_text: string;
    subsection: Subsection;
  };
  created_at: string;
  updated_at: string;
};

type Program = {
  id: number;
  flyer_url: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
};

type YoungAdultsContent = {
  settings: YoungAdultsSettings;
  gallery: GalleryItem[];
  sliders: Slider[];
  programs: Program[];
  teams: Team[];
};
export const getYoungAdultsContent = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/ministry-page/youth-page`,
      { ...onThisDay }
    );
    const ministryData: YoungAdultsContent = await res
      .json()
      .then((res) => res.data);

    if (!res.ok) {
      console.error("Something went wrong", ministryData);
      return;
    }
    return ministryData;
  } catch (error) {
    console.error(error);
  }
};
// get content for children ministry
type CarouselItem = Slider;

type BodyContent = {
  title: string;
  content: string;
};

type Setting = {
  id: number;
  ministry: string;
  settings: {
    heading_text: string;
    heading_description: string;
    body: BodyContent;
    subheading_text: string;
  };
  created_at: string;
  updated_at: string;
};

type ChildrenContent = {
  settings: Setting;
  carousel: CarouselItem[];
  sliders: Slider[];
};

// CHILDREN
export const getChildrenContent = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/ministry-page/children-page`,
      { ...onThisDay }
    );
    const childrenContent: ChildrenContent = await res
      .json()
      .then((res) => res.data);
    if (!res.ok) {
      console.error("Something went wrong", childrenContent);
      return;
    }
    return childrenContent;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
//WELLNESS
export const getWellnessContent = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/ministry-page/wellness-page`,
      { ...onThisDay }
    );
    const wellnessContent: ChildrenContent = await res
      .json()
      .then((res) => res.data);
    if (!res.ok) {
      console.error("Something went wrong", wellnessContent);
      return;
    }
    return wellnessContent;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
// DRAMA
export const getDramaContent = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/ministry-page/drama-page`,
      { ...onThisDay }
    );
    const dramaContent: ChildrenContent = await res
      .json()
      .then((res) => res.data);
    if (!res.ok) {
      console.error("Something went wrong", dramaContent);
      return;
    }
    return dramaContent;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
type PrayerContent = Omit<ChildrenContent, "carousel">;
// PRAYER
export const getPrayerContent = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/ministry-page/prayer-page`,
      { ...onThisDay }
    );
    const prayerContent: PrayerContent = await res
      .json()
      .then((res) => res.data);
    if (!res.ok) {
      console.error("Something went wrong", prayerContent);
      return;
    }
    return prayerContent;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
// TEENAGE
export const getTeenageContent = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/ministry-page/teenage-page`,
      { ...onThisDay }
    );
    const teenageContent: ChildrenContent = await res
      .json()
      .then((res) => res.data);
    if (!res.ok) {
      console.error("Something went wrong", teenageContent);
      return;
    }
    return teenageContent;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

//  PRE-MARITAL | BELIEVERS | PROTOCOL | GREETER | HOLY POLICE | USHERING | MEDIA | IT | PUBLIC RELATIONS | EVANGELISM | WOMEN | MUSIC | SUNDAY SCHOOL | SANITATION | CONNECT | TRANSPORTATION | FOLLOW UP | HOSPITALITY|ELDERS | MENS
type MinistryOptions =
  | "pre-marital-marriage-department"
  | "believers_membership"
  | "protocol_department"
  | "greeters_department"
  | "holy_police_deparment"
  | "ushering_department"
  | "media_publication_ministry"
  | "it_department"
  | "public_relations_ministry"
  | "evangelism_ministry"
  | "womens_ministry"
  | "embassy_choir_ministry"
  | "sunday_school_ministry"
  | "sanitation_ministry"
  | "connect_ministry"
  | "transportation_department"
  | "follow_up_ministry"
  | "hospitality_care_department"
  | "mens_ministry"
  | "elders_minstry";
export const getMinistryContent = async (ministry: MinistryOptions) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/ministry-page/common-1/${ministry}`,
      { ...onThisDay }
    );
    const pageContent: ChildrenContent = await res
      .json()
      .then((res) => res.data);
    if (!res.ok) {
      console.error("Something went wrong", pageContent);
      return;
    }
    return pageContent;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
// CHURCH OFFICE | TECHNICAL
type MinistryOption2 = "church_office_ministry" | "technical_ministry";
type PageSection = {
  id: number;
  name: string;
  description: string;
  image_url: string;
  ministry: string;
  created_at: string;
  updated_at: string;
};
type MinistryContent2 = ChildrenContent & {
  pageSection: PageSection[];
};
export const getMinistryContent2 = async (ministry: MinistryOption2) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/ministry-page/common-2/${ministry}`,
      { ...onThisDay }
    );
    const pageContent: MinistryContent2 = await res
      .json()
      .then((res) => res.data);
    if (!res.ok) {
      console.error("Something went wrong", pageContent);
      return;
    }
    return pageContent;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

// HERO CONTENT
// hero content for PRE-MARITAL | BELIEVERS | PROTOCOL | GREETER | HOLY POLICE | USHERING | MEDIA | IT | PUBLIC RELATIONS | EVANGELISM | WOMEN | MUSIC | SUNDAY SCHOOL | SANITATION | CONNECT | TRANSPORTATION | FOLLOW UP | HOSPITALITY|ELDERS | MENS
export const getMinistryHeroContent = async (
  ministry: MinistryOptions
): Promise<HeroContent | undefined> => {
  try {
    const heroContent = await getMinistryContent(ministry);
    if (heroContent) {
      const imgArr = heroContent.sliders.map((slide: Slider) => {
        return slide.item_url;
      });
      const title = heroContent.settings.settings.heading_text;
      const desc = heroContent.settings.settings.heading_description;
      return {
        title: title,
        desc: desc,
        ImgArr: imgArr,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

// hero content for CHURCH OFFICE | TECHNICAL
export const getMinistryHeroContent2 = async (
  ministry: MinistryOption2
): Promise<HeroContent | undefined> => {
  try {
    const heroContent = await getMinistryContent2(ministry);
    if (heroContent) {
      const imgArr = heroContent.sliders.map((slide: Slider) => {
        return slide.item_url;
      });
      const title = heroContent.settings.settings.heading_text;
      const desc = heroContent.settings.settings.heading_description;
      return {
        title: title,
        desc: desc,
        ImgArr: imgArr,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
    }
  }
};

// hero content for young adults
export const getYoungAdultsHeroContent = async (): Promise<
  HeroContent | undefined
> => {
  try {
    const heroContent = await getYoungAdultsContent();
    if (heroContent) {
      const imgArr = heroContent.sliders.map((slide: Slider) => {
        return slide.item_url;
      });
      const title = heroContent.settings.settings.heading_text;
      const desc = heroContent.settings.settings.heading_description;
      return {
        title: title,
        desc: desc,
        ImgArr: imgArr,
      };
    }
  } catch (error) {
    console.error(error);
  }
};
// hero content for children
export const getChildrenHeroContent = async (): Promise<
  HeroContent | undefined
> => {
  try {
    const heroContent = await getChildrenContent();
    if (heroContent) {
      const imgArr = heroContent.sliders.map((slide: Slider) => {
        return slide.item_url;
      });
      const title = heroContent.settings.settings.heading_text;
      const desc = heroContent.settings.settings.heading_description;
      return {
        title: title,
        desc: desc,
        ImgArr: imgArr,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

// hero content for wellness
export const getWellnessHeroContent = async (): Promise<
  HeroContent | undefined
> => {
  try {
    const heroContent = await getWellnessContent();
    if (heroContent) {
      const imgArr = heroContent.sliders.map((slide: Slider) => {
        return slide.item_url;
      });
      const title = heroContent.settings.settings.heading_text;
      const desc = heroContent.settings.settings.heading_description;
      return {
        title: title,
        desc: desc,
        ImgArr: imgArr,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

// hero content for prayer
export const getPrayerHeroContent = async (): Promise<
  HeroContent | undefined
> => {
  try {
    const heroContent = await getPrayerContent();
    if (heroContent) {
      const imgArr = heroContent.sliders.map((slide: Slider) => {
        return slide.item_url;
      });
      const title = heroContent.settings.settings.heading_text;
      const desc = heroContent.settings.settings.heading_description;
      return {
        title: title,
        desc: desc,
        ImgArr: imgArr,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

// hero content for teenage
export const getTeenageHeroContent = async (): Promise<
  HeroContent | undefined
> => {
  try {
    const heroContent = await getTeenageContent();
    if (heroContent) {
      const imgArr = heroContent.sliders.map((slide: Slider) => {
        return slide.item_url;
      });
      const title = heroContent.settings.settings.heading_text;
      const desc = heroContent.settings.settings.heading_description;
      return {
        title: title,
        desc: desc,
        ImgArr: imgArr,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

//hero content for drama
export const getDramaHeroContent = async (): Promise<
  HeroContent | undefined
> => {
  try {
    const heroContent = await getDramaContent();
    if (heroContent) {
      const imgArr = heroContent.sliders.map((slide: Slider) => {
        return slide.item_url;
      });
      const title = heroContent.settings.settings.heading_text;
      const desc = heroContent.settings.settings.heading_description;
      return {
        title: title,
        desc: desc,
        ImgArr: imgArr,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
