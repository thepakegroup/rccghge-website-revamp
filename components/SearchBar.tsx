'use client'
import React, { useState } from "react";
import { Input } from "./ui/input";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button } from "./ui/button";

function SearchBar() {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle changes in the search input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle form submission (optional)
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle search query submission here, e.g., send it to a search function
    console.log("Search query:", searchQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="[&_input]:border-0 border flex items-center rounded md:w-80">
      <Input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        className=" focus-visible:ring-0 focus-visible:ring-offset-0 "
      />
      <Button
        type="submit"
        size={"icon"}
        className=" text-black bg-transparent hover:bg-transparent ">
        <FaMagnifyingGlass className="hover:scale-110" />
      </Button>
    </form>
  );
}

export default SearchBar;
