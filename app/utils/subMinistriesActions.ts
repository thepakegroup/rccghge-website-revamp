"use server";

import { HeroContent } from "./actions";

const onThisDay = { next: { revalidate: 3600 } };

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

type YoungAdultsContent = {
  settings: YoungAdultsSettings;
  gallery: GalleryItem[];
  sliders: Slider[];
  programs: any[]; // Define type if available
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

type ChildrenSetting = {
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
  settings: ChildrenSetting;
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

// HERO CONTENT
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
