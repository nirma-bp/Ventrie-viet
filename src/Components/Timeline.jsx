import child from "../assets/child.png";
import boy from "../assets/boy.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RiArrowDropDownLine } from "react-icons/ri";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

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

const Timeline = () => {
  const [selectedRange, setSelectedRange] = useState("Last 7 days");
  return (
    <div className=" inline-block  h-auto border-2 border-gray-200 my-6 relative rounded-lg ">
      {/* header  */}
      <div className="flex justify-between items-center w-full ">
        {/* Activity Log Title */}
        <h2 className="text-xl ml-2 leading-4  font-poppins text-gray-800 font-[20px] p-4 mt-4 mb-2">
          Activity Log
        </h2>

        {/* Dropdown for Date Range */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="text-gray-700 p-4 mr-4 px-2 py-2 mt-4 mb-2 "
            >
              {selectedRange}
              <RiArrowDropDownLine className="min-w-[30px] min-h-[40px] font-light text-[#3E3E3EB8] " />
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

      {/* today horizontal line  */}
      <div className="relative w-full flex items-center px-4 ">
        {/* The horizontal line */}
        <div className="w-full h-[1px] bg-gray-300"></div>

        <p className="absolute text-[11px] leading-2 left-1/2 text-gray-500 -translate-x-1/2 bg-white px-5 py-1 border-2 border-gray-300 rounded-3xl">
          Today
        </p>
      </div>

      <div className=" ">
        {timelineData.map((event, index) => (
          <div
            key={index}
            className="relative flex pr-3 items-start space-x-2  mb-6"
          >
            {index !== timelineData.length - 1 && (
              <div className="absolute h-full left-7 top-20 bottom-0 w-[1px] bg-[#302F34]"></div>
            )}

            {/* Stepper Circle */}
            <div className="relative z-10 w-10 h-10  ml-4 mt-7 flex items-start justify-center rounded-full  ">
              {event.status === "success" ? (
                <img src={boy} alt="" className=" w-10 h-10 " />
              ) : (
                <img src={child} alt="" className=" w-10 h-10  " />
              )}
            </div>

            <div className="w-full mt-9 bg-white">
              <p className="text-gray-700 whitespace-nowrap font-poppins font-normal text-lg">
                {index == 0 && "The user"}
                <span className="text-black whitespace-nowrap font-poppins font-normal text-lg">
                  “{event.user}”
                </span>{" "}
                {event.message}
              </p>
              <div className="flex">
                <p className="text-base text-[#3E3E3E80] font-poppins whitespace-nowrap mt-1">
                  {event.time}
                </p>
                <p>
                  {event.details && (
                    <div className="flex text-[#3E3E3E] font-normal text-lg ">
                      {event.details.map((detail, i) => (
                        <span
                          key={i}
                          className={`mt-4 py-1 leading-3 whitespace-nowrap  font-normal text-lg rounded-md font-poppins ${
                            detail.status === "success"
                              ? " text-green-700 text-lg font-poppins font-normal"
                              : " text-red-700  text-lg font-poppins font-normal"
                          }`}
                        >
                          <span className="font-serif  text-[#3E3E3E] justify-center items-center text-center px-3 mt-1">
                            |
                          </span>
                          {detail.label}{" "}
                          {detail.status === "success"
                            ? "(Success)"
                            : "(Rejected)"}
                        </span>
                      ))}
                    </div>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
