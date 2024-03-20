import GetConnected from "@/components/home-page/GetConnected";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="pt-12 md:pt-24">
      <div className="flex items-center justify-center">
        <div className="bg-primary/5 p-5 md:p-12 flex flex-col justify-center items-center gap-3 text-center  ">
          <h1 className="text-xl md:text-2xl">
            We would be thrilled to hear from you
          </h1>
          <p className=" md:text-lg">
            We’re glad you’re here! How may we serve you?
          </p>
          <Select>
            <SelectTrigger className="max-w-[350px] text-base md:text-lg">
              <SelectValue placeholder="Connect With Us" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  className="text-base md:text-lg"
                  value="I am new here and I want to connect">
                  <Link href="/connect/getInTouch/new">
                    I am new here and I want to connect
                  </Link>
                </SelectItem>
                <SelectItem
                  className="text-base md:text-lg"
                  value="I have a question or comment">
                  <Link href="/connect/getInTouch/question">
                  I have a question or comment
                  </Link>
                </SelectItem>
                <SelectItem
                  className="text-base md:text-lg"
                  value="Sign me up for the monthly new letter">
                  <Link href="/connect/getInTouch/newsletter">
                  Sign me up for the monthly new letter
                  </Link>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <GetConnected />
    </div>
  );
}
