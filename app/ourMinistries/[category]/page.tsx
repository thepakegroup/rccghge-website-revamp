import { slideInFromBottom } from "@/app/give/page";
import { getMinistries } from "@/app/utils/actions";
import { Button } from "@/components/ui/button";
import ImageFill from "@/lib/components/ImageFill";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import Link from "next/link";
import { FaArrowRight, FaUsers } from "react-icons/fa6";
import JoinUsForm from "./components/JoinUsForm";
import MinistriesTab from "./components/MinistriesTab";
import { Metadata } from "next";
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
export default async function Page({ params }: { params: { category: string } }) {
  const ministriesData = await getMinistries(params.category);

  return (
    <div className="page-spacing wrapper relative">
      {/* tabs */}
      <div>
        <MinistriesTab />
        {params.category === "joinUs" ? (
          <JoinUsForm />
        ) : (
          <MotionDiv
            variants={slideInFromBottom(1, 0)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="ministries-card-container  w-full pt-8 gap-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start">
            {ministriesData?.map((item, i) => (
              <div
                key={i}
                className="  relative  border-2  rounded-lg w-full md:h-80  ">
                <Link
                  href={`/ourMinistries/${params.category}/${item.slug}`}
                  className="group">
                  <div className="    card-img relative h-[150px] rounded-t-md bg-black ">
                    <p className="hidden text-primary font-semibold text-center absolute inset-0  items-center justify-center group-hover:flex z-10">
                      <>click to see more</> <FaArrowRight />
                    </p>
                    <ImageFill
                      src={`${process.env.NEXT_PUBLIC_STAGING_API_URL}/load-media/${item.banner}`}
                      className="rounded-t-md group-hover:opacity-30  transition-all duration-500 "
                    />
                  </div>
                </Link>
                <div className="w-10 absolute top-32 left-2  aspect-square blueGradient rounded-full flex items-center justify-center text-xl text-white">
                  <FaUsers />
                </div>

                <div className="card-content space-y-2 pt-5   p-2 flex flex-col justify-between h-1/2">
                  <div className="space-y-2">
                    <h1 className="text-xl  capitalize font-bold">
                      {item.name}
                    </h1>
                    <p className="line-clamp-2 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                  <Button asChild size={"lg"} className="w-fit mt-auto">
                    <Link href={`/ourMinistries/joinUs`}>Join Us</Link>
                  </Button>
                </div>
              </div>
            ))}
          </MotionDiv>
        )}
      </div>
    </div>
  );
}
