import { Button } from "@/components/ui/button";
import ImageFill from "@/lib/components/ImageFill";
import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa6";

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div className="py-12 md:py-20 wrapper">
      <div className="ministries-card-container w-full gap-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
        <div className="relative  border-2  rounded-lg w-full md:w-72 h-80 ">
          <div className="card-img relative h-1/2 ">
            <ImageFill
              src="/images/ourMinistries-card-img.png"
              className=" rounded-t-md"
            />
          </div>
          <div className="w-10 absolute top-32 left-2  aspect-square blueGradient rounded-full flex items-center justify-center text-xl text-white">
            <FaUsers />
          </div>

          <div className="card-content space-y-2 pt-5 p-2 flex flex-col justify-between h-1/2">
            <div className="space-y-2">
              <h1 className="text-xl  capitalize font-bold">
                Youth Ministries
              </h1>
              <p className="">Join Our Family, We Are Excited To Have You</p>
            </div>
            <Button size={"lg"} className="w-fit">
              Join Us
            </Button>
          </div>
        </div>
        <div className="relative  border-2  rounded-lg w-full md:w-72 h-80 ">
          <div className="card-img relative h-1/2 ">
            <ImageFill
              src="/images/ourMinistries-card-img.png"
              className=" rounded-t-md"
            />
          </div>
          <div className="w-10 absolute top-32 left-2  aspect-square blueGradient rounded-full flex items-center justify-center text-xl text-white">
            <FaUsers />
          </div>

          <div className="card-content space-y-2 pt-5 p-2 flex flex-col justify-between h-1/2">
            <div className="space-y-2">
              <h1 className="text-xl  capitalize font-bold">
                Youth Ministries
              </h1>
              <p className="">Join Our Family, We Are Excited To Have You</p>
            </div>
            <Button size={"lg"} className="w-fit">
              Join Us
            </Button>
          </div>
        </div>
        <div className="relative  border-2  rounded-lg w-full md:w-72 h-80 ">
          <div className="card-img relative h-1/2 ">
            <ImageFill
              src="/images/ourMinistries-card-img.png"
              className=" rounded-t-md"
            />
          </div>
          <div className="w-10 absolute top-32 left-2  aspect-square blueGradient rounded-full flex items-center justify-center text-xl text-white">
            <FaUsers />
          </div>

          <div className="card-content space-y-2 pt-5 p-2 flex flex-col justify-between h-1/2">
            <div className="space-y-2">
              <h1 className="text-xl  capitalize font-bold">
                Youth Ministries
              </h1>
              <p className="">Join Our Family, We Are Excited To Have You</p>
            </div>
            <Button size={"lg"} className="w-fit">
              Join Us
            </Button>
          </div>
        </div>
        <div className="relative  border-2  rounded-lg w-full md:w-72 h-80 ">
          <div className="card-img relative h-1/2 ">
            <ImageFill
              src="/images/ourMinistries-card-img.png"
              className=" rounded-t-md"
            />
          </div>
          <div className="w-10 absolute top-32 left-2  aspect-square blueGradient rounded-full flex items-center justify-center text-xl text-white">
            <FaUsers />
          </div>

          <div className="card-content space-y-2 pt-5 p-2 flex flex-col justify-between h-1/2">
            <div className="space-y-2">
              <h1 className="text-xl  capitalize font-bold">
                Youth Ministries
              </h1>
              <p className="">Join Our Family, We Are Excited To Have You</p>
            </div>
            <Button size={"lg"} className="w-fit">
              Join Us
            </Button>
          </div>
        </div>
        <div className="relative  border-2  rounded-lg w-full md:w-72 h-80 ">
          <div className="card-img relative h-1/2 ">
            <ImageFill
              src="/images/ourMinistries-card-img.png"
              className=" rounded-t-md"
            />
          </div>
          <div className="w-10 absolute top-32 left-2  aspect-square blueGradient rounded-full flex items-center justify-center text-xl text-white">
            <FaUsers />
          </div>

          <div className="card-content space-y-2 pt-5 p-2 flex flex-col justify-between h-1/2">
            <div className="space-y-2">
              <h1 className="text-xl  capitalize font-bold">
                Youth Ministries
              </h1>
              <p className="">Join Our Family, We Are Excited To Have You</p>
            </div>
            <Button size={"lg"} className="w-fit">
              Join Us
            </Button>
          </div>
        </div>
        <div className="relative  border-2  rounded-lg w-full md:w-72 h-80 ">
          <div className="card-img relative h-1/2 ">
            <ImageFill
              src="/images/ourMinistries-card-img.png"
              className=" rounded-t-md"
            />
          </div>
          <div className="w-10 absolute top-32 left-2  aspect-square blueGradient rounded-full flex items-center justify-center text-xl text-white">
            <FaUsers />
          </div>

          <div className="card-content space-y-2 pt-5 p-2 flex flex-col justify-between h-1/2">
            <div className="space-y-2">
              <h1 className="text-xl  capitalize font-bold">
                Youth Ministries
              </h1>
              <p className="">Join Our Family, We Are Excited To Have You</p>
            </div>
            <Button size={"lg"} className="w-fit">
              Join Us
            </Button>
          </div>
        </div>
        <div className="relative  border-2  rounded-lg w-full md:w-72 h-80 ">
          <div className="card-img relative h-1/2 ">
            <ImageFill
              src="/images/ourMinistries-card-img.png"
              className=" rounded-t-md"
            />
          </div>
          <div className="w-10 absolute top-32 left-2  aspect-square blueGradient rounded-full flex items-center justify-center text-xl text-white">
            <FaUsers />
          </div>

          <div className="card-content space-y-2 pt-5 p-2 flex flex-col justify-between h-1/2">
            <div className="space-y-2">
              <h1 className="text-xl  capitalize font-bold">
                Youth Ministries
              </h1>
              <p className="">Join Our Family, We Are Excited To Have You</p>
            </div>
            <Button size={"lg"} className="w-fit">
              Join Us
            </Button>
          </div>
        </div>
        <div className="relative  border-2  rounded-lg w-full md:w-72 h-80 ">
          <div className="card-img relative h-1/2 ">
            <ImageFill
              src="/images/ourMinistries-card-img.png"
              className=" rounded-t-md"
            />
          </div>
          <div className="w-10 absolute top-32 left-2  aspect-square blueGradient rounded-full flex items-center justify-center text-xl text-white">
            <FaUsers />
          </div>

          <div className="card-content space-y-2 pt-5 p-2 flex flex-col justify-between h-1/2">
            <div className="space-y-2">
              <h1 className="text-xl  capitalize font-bold">
                Youth Ministries
              </h1>
              <p className="">Join Our Family, We Are Excited To Have You</p>
            </div>
            <Button size={"lg"} className="w-fit">
              Join Us
            </Button>
          </div>
        </div>
        <div className="relative  border-2  rounded-lg w-full md:w-72 h-80 ">
          <div className="card-img relative h-1/2 ">
            <ImageFill
              src="/images/ourMinistries-card-img.png"
              className=" rounded-t-md"
            />
          </div>
          <div className="w-10 absolute top-32 left-2  aspect-square blueGradient rounded-full flex items-center justify-center text-xl text-white">
            <FaUsers />
          </div>

          <div className="card-content space-y-2 pt-5 p-2 flex flex-col justify-between h-1/2">
            <div className="space-y-2">
              <h1 className="text-xl  capitalize font-bold">
                Youth Ministries
              </h1>
              <p className="">Join Our Family, We Are Excited To Have You</p>
            </div>
            <Button size={"lg"} className="w-fit">
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
