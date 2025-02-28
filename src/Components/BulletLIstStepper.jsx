import React from "react";
import { Button } from "../components/ui/button";

function BulletLIstStepper() {
  const productionStages = [
    {
      productionStages: "Order Receipt",
      paraOne: "Rush order requested by Customer",
      paraTwo: "Added by John Doe",
    },
    {
      productionStages: "Material Check",
      paraOne: "Rush order requested by Customer",
      paraTwo: "Added by Jane Smith",
    },
    {
      productionStages: "Production Stage",
      paraOne: "Cutting Completed for Wooden table Surface",
      paraTwo: "Added by Sarah lee",
    },
    {
      productionStages: "Quality Control",
      paraOne: "SCratch found on Wooden table Surface ",
      paraTwo: "Added by Sarah lee",
    },
    {
      productionStages: "Delivery",
      paraOne: "Customer Confirmed reciept of order",
      paraTwo: "Added by Emily Brown",
    },
  ];
  return (
    <div className="w-[649px] h-auto border-4 border-green-500  ">
      {/* header  */}
      <div className="flex justify-between items-center w-full px-7 pt-6  ">
        <h1 className="font-semibold  text-lg leading-5 font-poppins ml-2 ">
          Notes
        </h1>
        <Button className="min-w-[40px] min-h-[50px] text-white font-poppins  font-semibold ">
          Add New Note
        </Button>
      </div>

      {/* second div  */}
      <div className=" px-7">
        {/* bullet list  */}
        <div className=" ">
          {productionStages.map((item, index) => (
            <div
              key={index}
              className="border-4 border-pink-400 justify-center items-center "
            >
              {/* for content  */}
              <div className=" pt-6 ">
                {/* for headings  */}

                <div>
                  <p className="py-2 text-lg leading-3 font-normal text-[#302F34BF]">
                    {item.productionStages}
                  </p>
                  <p className="py-2 text-lg leading-3 font-normal text-[#3E3E3E9E] ">
                    {item.paraOne}
                  </p>
                  <p className="py-2 text-lg leading-3 font-normal text-[#302F34BF]">
                    {item.paraTwo}
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
