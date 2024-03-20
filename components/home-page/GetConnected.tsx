import ImageFill from "@/lib/components/ImageFill";
import { FaCaretLeft } from "react-icons/fa";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Button } from "../ui/button";
import Link from "next/link";

export default function GetConnected() {
  return (
    <div className="space-y-5 md:space-y-12 py-12 md:py-24">
      <h1 className="blueGradient  px-6 lg:px-12 text-white font-semibold flex items-center text-xl h-14 md:h-20 w-[280px] md:text-3xl lg:w-[500px] relative">
        Get Connected
        <FaCaretLeft className="absolute  -right-12 md:text-[9rem] text-9xl" />
      </h1>
      <ScrollArea className="w-full">
        <div className="social-card-container  w-full gap-5 flex items-center px-6">
          <div className="card h-96 w-[310px]  pb-5 ">
            <div className="flex px-3 py-4 justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-12 aspect-square rounded-full ring-2 ring-primary bg-gray-300"></div>
                <div className="font-semibold leading-[1]">
                  <p className="font-semibold  ">rccghge</p>
                  <small className="capitalize text-[10px]">
                    heavens glorius embasy
                  </small>
                </div>
              </div>
              <Button asChild className="bg-transparent text-primary">
                <Link href={"#"}>View profile</Link>
              </Button>
            </div>
            {/* card image */}
            <div className="card-img relative h-1/2 ">
              <ImageFill src="/images/ourMinistries-card-img.png" />
            </div>

            <div className="card-content  space-y-2  p-2 ">
              <p className="text-sm text-blue-500">view more on instagram</p>
              <p className=" ">
                &quot; We are on a journey to winning souls for Christ, and we
                would love if you are a part of this.&quot;
              </p>
            </div>
          </div>
          <div className="card h-96 w-[310px]  pb-5 ">
            <div className="flex px-3 py-4 justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-12 aspect-square rounded-full ring-2 ring-primary bg-gray-300"></div>
                <div className="font-semibold leading-[1]">
                  <p className="font-semibold  ">rccghge</p>
                  <small className="capitalize text-[10px]">
                    heavens glorius embasy
                  </small>
                </div>
              </div>
              <Button asChild className="bg-transparent text-primary">
                <Link href={"#"}>View profile</Link>
              </Button>
            </div>
            {/* card image */}
            <div className="card-img relative h-1/2 ">
              <ImageFill src="/images/ourMinistries-card-img.png" />
            </div>

            <div className="card-content  space-y-2  p-2 ">
              <p className="text-sm text-blue-500">view more on instagram</p>
              <p className=" ">
                &quot; We are on a journey to winning souls for Christ, and we
                would love if you are a part of this.&quot;
              </p>
            </div>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
