"use client";
import React, { useRef, useState } from "react";
import { Input } from "./ui/input";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter } from "next/navigation";

function SearchBar({
  searchQuery,
  dateQuery,
}: {
  searchQuery: string;
  dateQuery: string;
}) {
  const months = [
    {
      name: "january",
      value: "01",
    },
    {
      name: "febuary",
      value: "02",
    },
    {
      name: "march",
      value: "03",
    },
    {
      name: "april",
      value: "04",
    },
    {
      name: "may",
      value: "05",
    },
    {
      name: "june",
      value: "06",
    },
    {
      name: "july",
      value: "07",
    },
    {
      name: "august",
      value: "08",
    },
    {
      name: "september",
      value: "09",
    },
    {
      name: "october",
      value: "10",
    },
    {
      name: "november",
      value: "11",
    },
    {
      name: "december",
      value: "12",
    },
  ] as const;
  const currentYear = new Date().getFullYear();
  // State to store the search query
  const router = useRouter();
  // Function to handle form submission

  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="flex items-center gap-10">
      <Select
        onValueChange={(value) => {
          router.push(
            `/events?searchQuery=${searchQuery}&dateQuery=${currentYear}-${encodeURIComponent(value)}-01`
          );
        }}>
        <SelectTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0 capitalize  md:text-base w-fit font-semibold   ">
          <SelectValue placeholder={"select month "} />
        </SelectTrigger>
        <SelectContent>
          {months.map((month) => {
            return (
              <SelectItem
                className="capitalize md:text-base"
                key={month.value}
                value={month.value}>
                {month.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <div className="[&_input]:border-0 border flex items-center rounded md:w-80">
        <Input
          ref={inputRef}
          type="text"
          name="search"
          placeholder="Search..."
          className=" focus-visible:ring-0 focus-visible:ring-offset-0 "
        />
        <Button
          onClick={() => {
            if (!inputRef.current) return;
            const value = inputRef.current.value;
            router.push(
              `/events?searchQuery=${encodeURIComponent(value)}&dateQuery=${dateQuery}`
            );
          }}
          size={"icon"}
          className=" text-black bg-transparent hover:bg-transparent ">
          <FaMagnifyingGlass className="hover:scale-110" />
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
