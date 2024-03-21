"use client";
import { Button } from "@/components/ui/button";
import ImageFill from "@/lib/components/ImageFill";
import useIsActiveLink from "@/lib/hooks/useIsActiveLink";
import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa6";

export default function Page({ params }: { params: { slug: string } }) {
  const isActiveLink = useIsActiveLink();
  return (
    <div className="py-12 md:py-20 wrapper relative">
      <div className="bg-white absolute -top-10  mx-6 lg:mx-12  rounded-lg left-0 right-0 p-5 xl:px-32 lg:text-lg shadow-md">
        <ul className="flex items-center justify-center gap-10">
          <li
            className={`${isActiveLink("/ministries") && "border-b-2 border-primary"}`}>
            <Link href={"/ourMinistries/ministries"}>Ministries</Link>
          </li>
          <li
            className={`${isActiveLink("/departments") && "border-b-2 border-primary"}`}>
            <Link href={"/ourMinistries/departments"}>Departments</Link>
          </li>
        </ul>
      </div>

      <div className="ministries-card-container  w-full pt-8 gap-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <div className="relative  border-2  rounded-lg w-full  h-80 ">
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
        <div className="relative  border-2  rounded-lg w-full  h-80 ">
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
        <div className="relative  border-2  rounded-lg w-full  h-80 ">
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
        <div className="relative  border-2  rounded-lg w-full  h-80 ">
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
        <div className="relative  border-2  rounded-lg w-full  h-80 ">
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
        <div className="relative  border-2  rounded-lg w-full  h-80 ">
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
        <div className="relative  border-2  rounded-lg w-full  h-80 ">
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
        <div className="relative  border-2  rounded-lg w-full  h-80 ">
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
        <div className="relative  border-2  rounded-lg w-full  h-80 ">
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
