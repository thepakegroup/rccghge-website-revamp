import ImageFill from "@/lib/components/ImageFill";
import LearnMoreBtn from "../LearnMoreBtn";
import { Skeleton } from "../ui/skeleton";

export default async function GiveCTA({give_section}:{give_section:{give_header_text:string,give_subheading:string,give_bg_image:string}}) {

  return (
    <div className=" sm:flex items-center h-80 lg:h-96 ">
      <div className="h-full blueGradient text-white flex flex-col justify-center text-center items-center gap-3 px-5 lg:px-20 sm:w-1/2">
        <h1 className="text-2xl lg:text-3xl">
          {give_section.give_header_text}
        </h1>
        <p>{give_section.give_subheading}</p>
        <LearnMoreBtn
          url="/give"
          text="Give Now"
          className="bg-white text-blue-950  text-lg hover:bg-transparent hover:border-2 hover:border-white hover:text-white"
        />
      </div>
      <div className="image h-full w-1/2 hidden sm:block relative">
        {give_section.give_bg_image ? (
          <ImageFill src={give_section.give_bg_image} />
        ) : (
          <Skeleton className=" w-full h-full" />
        )}
      </div>
    </div>
  );
}
