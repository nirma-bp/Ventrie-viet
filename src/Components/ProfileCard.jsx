import React from "react";
const ProfileCard = ({ profileImg, name, role, details, onEdit }) => {
  return (
    <div className="border-[1px] border-[#D7D7D9] flex flex-col rounded-[10px] items-center px-4 py-6 w-[470px] h-auto">
      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center text-center font-poppins">
        <img
          src={profileImg}
          alt="Profile"
          className=" rounded-full w-[139px] h-[139px] "
        />
        <h1 className="mt-2 leading-[30px] text-xl font-medium font-poppins">
          {name}
        </h1>
        <h2 className="mt-2 bg-[#D6D5D6] px-7 py-2 text-[#302F34A3] justify-center items-center text-center flex  font-normal text-sm rounded-lg font-poppins leading-[14px] w-[88px] h-[29px] ">
          {role}
        </h2>
      </div>

      {/* Details Section */}
      <div className="w-full max-w-3xl  mt-5">
        <h1 className="  text-left ml-4  text-[#3E3E3E] font-medium font-poppins text-[20px] ">
          Details
        </h1>
        <div className="border-b-2 border-gray-300 w-[361px]"></div>
      </div>
      <div className="w-full max-w-3xl mt-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2">
          {details.map((detail, index) => (
            <div key={index} className=" ">
              <h1 className="font-medium  font-poppins text-[#3E3E3E] text-lg">
                {detail.label}
              </h1>
              <h2 className="font-medium leading-[27px] font-poppins  text-[18px]  text-[#838285]">
                {detail.value}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={onEdit}
          className=" px-12 text-lg py-1 bg-[#302F34] rounded-[10px] text-[#FFFFFF] font-normal text-center"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};
export default ProfileCard;
