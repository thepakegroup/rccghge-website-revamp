import { slideInFromBottom } from "@/app/give/page";
import { getMinistries } from "@/app/utils/api-request";
import ImageFill from "@/lib/components/ImageFill";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import { Metadata } from "next";
import Link from "next/link";
import { FaUsers } from "react-icons/fa6";
import MinistriesTab from "./components/MinistriesTab";
import MaxWidthContainer from "@/components/MaxWidthContainer";
type Param = {
  params: { category: string };
};

export async function generateMetadata({ params }: Param): Promise<Metadata> {
  switch (params.category) {
    case "Ministry":
      return {
        title: "Ministries",
        description:
          "Join One or Two of our groups, let the Lord use you in mighty ways. We Would be honored so have you",
      };
    case "Department":
      return {
        title: "Departments",
        description:
          "Join One or Two of our groups, let the Lord use you in mighty ways. We Would be honored so have you",
      };
    case "joinUs":
      return {
        title: "Join Us",
        description:
          "Join One or Two of our groups, let the Lord use you in mighty ways. We Would be honored so have you",
      };
    default:
      return {
        title: "Ministries",
        description:
          "Join One or Two of our groups, let the Lord use you in mighty ways. We Would be honored so have you",
      };
  }
}
export function generateStaticParams() {
  return [{ category: "Ministry" }, { category: "Department" }];
}

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const ministriesData = await getMinistries(params.category);

  return (
    <MaxWidthContainer className="page-spacing wrapper relative">
      <div>
        {/* tabs */}
        <MinistriesTab />
        <MotionDiv
          variants={slideInFromBottom(1, 0)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="ministries-card-container mx-auto  w-full pt-8 gap-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start  ">
          {ministriesData?.map((item, i) => {
            let route = `/ourMinistries/${params.category}/${item.slug}`;
    

            return (
              <Link
                key={i}
                href={route}
                scroll={true}
                className="  relative  border-2  rounded-lg w-full md:h-80 hover:shadow-lg hover:shadow-gray-400 cursor-pointer translation-all duration-300 ">
                <div className="card-img relative h-[200px] rounded-t-md ">
                  <ImageFill
                    src={`${process.env.NEXT_PUBLIC_STAGING_API_URL}/load-media/${item.banner}`}
                    className="rounded-t-md group-hover:opacity-30  "
                  />
                </div>
                <div className="w-10 absolute top-44 left-2  aspect-square blueGradient rounded-full flex items-center justify-center text-xl text-white">
                  <FaUsers />
                </div>

                <div className="card-content space-y-2 pt-5   p-2 flex flex-col justify-between h-fit">
                  <div className="space-y-2">
                    <h1 className="text-xl capitalize  line-clamp-1">
                      {item.name}
                    </h1>
                    <p className="line-clamp-2 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </MotionDiv>
      </div>
    </MaxWidthContainer>
  );
}
