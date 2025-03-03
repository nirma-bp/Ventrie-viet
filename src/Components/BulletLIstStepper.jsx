import React from "react";
import { Button } from "../components/ui/button";

function BulletLIstStepper() {
  const productionStages = [
    {
      productionStages: "Order Receipt",
      paraOne: "Rush order requested by Customer",
      paraTwo: "Added by John Doe",
      date: "2025-10-25",
      time: "09:00",
      buttonText: "General",
      buttonColor: "bg-green-500",
      buttonTextColor: "text-black",
    },
    {
      productionStages: "Material Check",
      paraOne: "Rush order requested by Customer",
      paraTwo: "Added by Jane Smith",
      date: "2025-10-25",
      time: "10:30",
      buttonText: "Issue",
      buttonColor: "bg-purple-500",
      buttonTextColor: "text-white",
    },
    {
      productionStages: "Production Stage",
      paraOne: "Cutting Completed for Wooden table Surface",
      paraTwo: "Added by Sarah Lee",
      date: "2025-10-26",
      time: "14:15",
      buttonText: "Production Stage",
      buttonColor: "bg-yellow-500",
      buttonTextColor: "text-white",
    },
    {
      productionStages: "Quality Control",
      paraOne: "Scratch found on Wooden table Surface",
      paraTwo: "Added by Sarah Lee",
      date: "2025-10-26",
      time: "16:45",
      buttonText: "Defect",
      buttonColor: "bg-red-500",
      buttonTextColor: "text-white",
    },
    {
      productionStages: "Delivery",
      paraOne: "Customer Confirmed receipt of order",
      paraTwo: "Added by Emily Brown",
      date: "2025-10-27",
      time: "09:00",
      buttonText: "Confirmation",
      buttonColor: "bg-green-500",
      buttonTextColor: "text-black",
    },
  ];

  return (
    <div className="w-[649px] h-auto border-4 border-gray-200 rounded-md pb-16  ">
      {/* header  */}
      <div className="flex justify-between items-center w-full px-7 pt-6  ">
        <h1 className="font-semibold  text-lg leading-5 font-poppins ml-2 ">
          Notes
        </h1>
        <Button className="min-w-[60px] min-h-[40px] text-white  font-poppins bg-[#000000] font-normal  ">
          Add New Note
        </Button>
      </div>

      {/* second div  */}
      <div className=" px-7">
      
        {/* <div className=" "> */}
        <div className="px-7 h-[700px] mt-9 overflow-y-auto custom-scrollbar">
          {productionStages.map((item, index) => (
            <div key={index} className=" justify-center items-center ">
              {/* for content  */}
              <div className=" pt-6 flex justify-between">
              
                <div className="relative flex flex-col items-center">
                  <div className="w-4 h-4 bg-gray-800 rounded-full mb-2 mr-3 "></div>
                  {index !== productionStages.length && (
                    <div className="w-[2px] h-16  bg-gray-400  mr-3 "></div>
                  )}
                </div>
                {/* Main Content */}
                <div className="flex-1  pb-4">

                  {/* Title & Status */}
                  <div className="flex items-center gap-3 ">
                    <p className="pt-2 text-lg leading-3 text-[#302F34BF] font-medium  ">
                      {item.productionStages}
                    </p>

                    <span
                      className={`text-sm px-4 py-1 rounded-md ${
                        item.buttonColor
                      } ${
                        item.buttonTextColor === "text-black"
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      {item.buttonText}
                    </span>
                  </div>
                  {/* Description */}
                  <p className="py-2 whitspace-nowrap mt-1 text-lg leading-2 font-normal text-[#3E3E3E9E] ">
                    {item.paraOne}
                  </p>
                  <p className="py-2 text-lg leading-3 text-[#302F34BF] font-medium ">
                    {item.paraTwo}
                  </p>
                </div>

                <div className="text-left ">
                  <p className="py-2 text-lg leading-3 font-normal text-[#3E3E3E9E]">
                    {item.date}
                  </p>
                  <p className="py-2 text-lg leading-3 font-normal text-[#3E3E3E9E]">
                    {item.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BulletLIstStepper;
