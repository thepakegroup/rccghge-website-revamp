import { getSingleLeader } from "@/app/utils/actions";
import EventsBlock from "@/components/EventsBlock";
import TitleBorderTop from "@/components/TitleBorderTop";
import ImageFill from "@/lib/components/ImageFill";
import { notFound } from "next/navigation";
import React from "react";

export default async function page({ params }: { params: { slug: string } }) {
  const leader = await getSingleLeader(params.slug);
 
  if (!leader) {
    notFound();
  }

  // highlight specified words
  const toHighlight = [`“Into His presence through worship.”`];
  const words = leader.full_story_about.split(" ");
  const highlightedDesc = words.map((word, innerIndex) => {
 
    if (toHighlight.includes(word.toLowerCase())) {
      return (
        <span key={innerIndex} className="text-primary">
          {word}{" "}
        </span>
      );
    }
    //returns word with a space
    return word + " ";
  });
  return (
    <div className="page-spacing text-center">
      <div className=" space-y-2 lg:flex lg:flex-row-reverse lg:justify-between lg:item-center max-w-7xl lg:px-24 lg:gap-10  tracking-wide leading-relaxed   wrapper ">
        {/* image section */}
        <div className="flex flex-col items-center justify-center lg:justify-start gap-2 ">
          <div className="lg:hidden">
            <TitleBorderTop title={`Our ${leader?.position}`} />
          </div>
          <div className="image-container relative max-w-sm pt-8 lg:pt-0 flex flex-col items-center justify-center gap-2 ">
            {/* image */}
            <div className=" w-80 h-64 lg:h-80   relative aspect-square">
              {/* orange box */}
              <div className="box bg-primary rounded-lg absolute -top-2 sm: -left-2 w-52 h-1/2 aspect-square"></div>

              <ImageFill src={`https://${leader.profile_picture}`} className="z-10 " />

              {/* repeat box background */}
              <div className="absolute w-32 aspect-square -bottom-5 -right-4 ">
                <ImageFill
                  src="/images/repeat-box-bg-img.png"
                  className=" object-contain"
                />
              </div>
            </div>
            <h1 className="font-bold text-lg sm:text-xl mt-2">{leader.name}</h1>
          </div>
        </div>
        {/* text-section */}
        <div className="space-y-3 lg:text-left  lg:w-3/5">
          <div className="hidden lg:block">
            <TitleBorderTop title={`Our ${leader?.position}`} />
          </div>
          {/* text body */}
          {highlightedDesc}
        </div>
      </div>
      <EventsBlock />
    </div>
  );
}

const LeadTextBody = () => {
  return (
    <div className="space-y-3 md:space-y-5">
      <p>
        Pastor John Omewah is the Senior Pastor of RCCG/Heaven’s Glorious
        Embassy, Plano, TX- Motto: 
        <span className="text-primary">
          “Into His presence through worship.”
        </span>
        His parents originated from Edo State, Mid-Western part of Nigeria, but,
        he was born in Jos -Plateau State, Northern Nigeria. He eventually left
        Jos for Lagos, where he embarked on a career in fashion designing. This
        vocation would eventually bring him in contact with one of Nigeria’s
        iconic musicians, the Late Fela Anikulapo Kuti (Kalakuta Republic).
      </p>
      <p>
        God by His mercy, called Pastor Omewah from the pit of Kalakuta Republic
        to the pulpit, where the Lord has been using him ever since, to do great
        and mighty exploits for the Kingdom. Pastor Omewah has been in the
        ministry for an upward of 40 years. He is a man who believes very much
        in the undiluted word of God, and he passes this down through his
        preaching /teaching.
      </p>
      <p>
        He is the author of a book titled “From the Pit to the Pulpit.” Pastor
        John Omewah is presently the Provincial Pastor of RCCG /NA Province 4,
        and the RCCG/ NA Coordinator in charge of Music. He is happily married
        to Pastor (Dr.) Ibi Omewah. They are, by the special grace of God,
        blessed with six children – Joy, John (Jr), Princess, Priscilla, Joel
        and Jonathan and two grandchildren- Francis and Franklin.
      </p>
    </div>
  );
};
