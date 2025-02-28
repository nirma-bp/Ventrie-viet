// import React from 'react'

// function BulletListAlt() {
//   return (
//     <div>BulletListAlt</div>
//   )
// }

// export default BulletListAlt

import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "./ui/dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";

const BulletListAlt = () => {
  const [selectedRange, setSelectedRange] = useState("Last 7 days");

  const timelineData = [
    {
      user: "Peter",
      message: "Successful event after correct password confirmation",
      time: "11:26 AM",
      status: "success",
    },
    {
      user: "Jasper",
      message: "Failed event after wrong password confirmation",
      time: "4:37 AM",
      status: "failed",
    },
    {
      user: "Peter",
      message: "Success of below verifications",
      time: "4:37 PM",
      status: "success",
      details: [
        { label: "Email Verification", status: "success" },
        { label: "Phone Number Verification", status: "failed" },
      ],
    },
    {
      user: "Jasper",
      message: "Failure of final delete order from the respective inventory",
      time: "4:37 AM",
      status: "failed",
    },
    {
      user: "Peter",
      message: "Successfully changed the login password",
      time: "4:37 PM",
      status: "success",
      details: [{ label: "Password change", status: "success" }],
    },
    {
      user: "Jasper",
      message: "Failure of final delete order from the respective inventory",
      time: "4:37 AM",
      status: "failed",
    },
  ];

  return (
    <div className="inline-block h-auto border-2 border-gray-200 my-6 relative rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xl ml-2 leading-4 font-poppins text-gray-800 font-[20px] p-4 mt-4 mb-2">
          Activity Log
        </h2>

        {/* Dropdown for Date Range */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="text-gray-700 p-4 mr-4 px-2 py-2 mt-4 mb-2"
            >
              {selectedRange}
              <RiArrowDropDownLine className="min-w-[30px] min-h-[40px] font-light text-[#3E3E3EB8]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setSelectedRange("Last 24 hours")}>
              Last 24 hours
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedRange("Last 7 days")}>
              Last 7 days
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedRange("Last 30 days")}>
              Last 30 days
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* "Today" Horizontal Line */}
      <div className="relative w-full flex items-center px-4">
        <div className="w-full h-[1px] bg-gray-300"></div>
        <p className="absolute text-[11px] leading-2 left-1/2 text-gray-500 -translate-x-1/2 bg-white px-5 py-1 border-2 border-gray-300 rounded-3xl">
          Today
        </p>
      </div>

      {/* Timeline Content */}
      <div className="pl-6">
        {timelineData.map((event, index) => (
          <div key={index} className="relative flex items-start space-x-2 mb-6">
            {/* Vertical Line (Extends Except for Last Item) */}
            {index !== timelineData.length - 1 && (
              <div className="absolute h-full left-4 top-10 bottom-0 w-[2px] bg-gray-400"></div>
            )}

            {/* Stepper Circle (Only Dots) */}
            <div className="relative z-10 w-4 h-4 ml-6 mt-7 flex items-center justify-center rounded-full bg-gray-800"></div>

            {/* Timeline Content */}
            <div className="w-full mt-5 bg-white">
              <p className="text-gray-700 font-poppins font-normal text-lg">
                {index == 0 && "The user"}
                <span className="text-black font-poppins font-normal text-lg">
                  {" "}
                  “{event.user}”{" "}
                </span>
                {event.message}
              </p>
              <p className="text-base text-[#3E3E3E80] font-poppins mt-1">
                {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulletListAlt;
