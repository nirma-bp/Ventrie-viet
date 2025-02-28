import React from "react";
import cloud from "../assets/cloud.png";

function OrderDetailedSummary() {
  
  return (
    <div className="flex gap-5 w-[768px] justify-between ">
      <div className="border-2 border-[#D7D7D9] rounded-md w-[220px]  p-3 ">
        <h2 className="text-[#000000] font-poppins font-normal text-base leading-4 ">
          Total Orders
        </h2>
        <h1 className="text-[#000000] text-5xl leading-10 font-poppins font-normal mt-5 ">
          21-
        </h1>
        <div className="flex gap-2 mt-5">
          <img src={cloud} alt="" />
          <p className="text-[#000000]">25.2% last week</p>
        </div>
      </div>

      {/* two  */}
      <div className="border-2 border-[#D7D7D9] rounded-md w-[220px]  p-3  ">
        <h2 className="text-[#000000] font-poppins font-normal text-base leading-4 ">
          Order items over time
        </h2>
        <h1 className="text-[#000000] text-5xl leading-10 font-poppins font-normal mt-5 ">
          15-
        </h1>
        <div className="flex gap-2 mt-5">
          <img src={cloud} alt="" />
          <p className="text-[#000000]">18.2% last week</p>
        </div>
      </div>

      {/* three  */}
      <div className="border-2 border-[#D7D7D9] rounded-md w-[220px]  p-3 ">
        <h2 className="text-[#000000] font-poppins font-normal text-base leading-4 ">
          Return Orders
        </h2>
        <h1 className="text-[#000000] text-5xl leading-10 font-poppins font-normal mt-5 ">
          0-
        </h1>
        <div className="flex gap-2 mt-5">
          <img src={cloud} alt="" />
          <p className="text-[#000000]">-1.2% last week</p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailedSummary;
