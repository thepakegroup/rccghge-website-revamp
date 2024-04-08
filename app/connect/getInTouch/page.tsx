import GetConnected from "@/components/home-page/GetConnected";
import ConnectDropdown from "./ConnectDropdown";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Get In Touch",
  description: "We would be thrilled to hear from you.",
};
export default function page() {
  return (
    <div className="page-spacing">
      <div className="flex items-center justify-center">
        <div className="bg-primary/5 p-5 md:p-12 flex flex-col justify-center items-center gap-3 text-center  ">
          <h1 className="text-xl md:text-2xl">
            We would be thrilled to hear from you
          </h1>
          <p className=" md:text-lg">
            We’re glad you’re here! How may we serve you?
          </p>
          <ConnectDropdown />
        </div>
      </div>
      <GetConnected />
    </div>
  );
}
