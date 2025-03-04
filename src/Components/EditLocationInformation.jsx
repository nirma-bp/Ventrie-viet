import { Button } from "../components/ui/button";
import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

function EditLocationInformation() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    country: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    district: "",
    zipCode: "",
    acceptTerms: "",
  });

  const handleCancel = () => {
    setFormData({
      fullName: "",
      lastName: "",
      address1: "",
      address2: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      region: "",
      website: "",
      date: "",
      status: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({
      phoneNumber: "",
      country: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      district: "",
      zipCode: "",
      acceptTerms: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    console.log("naem ", name, " value ", value);
    setFormData((prev) => ({
      ...prev,
      [name]: type == "checked" ? checked : value,
    }));
  };

  //   const [isChecked, setIsChecked] = useState<boolean>(false);

  //   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setIsChecked(e.target.checked); // Use `checked` instead of `value`
  //   };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  console.log(isChecked);

  return (
    <div className="w-full md:px-9 lg:px-28 mt-4">
      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className=" p-4 md:p-0 mt-4 w-full mx-auto lg:px-36 rounded-md"
      >
        <div className="flex items-center justify-between px-2 md:px-4 py-2 relative">
          <MdArrowBackIosNew className="text-black text-2xl md:text-3xl border-2 border-[#D7D7D9] rounded-md p-1" />

          <h1 className="text-2xl md:text-[40px] whitespace-nowrap  font-medium font-poppins absolute left-1/2 transform -translate-x-1/2">
            Edit Location Info
          </h1>
        </div>
        <div className="rounded-md mt-8  md:ml-3 flex md:gap-2  gap-1">
          <label>
            <input
              onChange={handleCheckboxChange}
              checked={isChecked}
              className="accent-black"
              type="checkbox"
            />
          </label>
          <p className="leading-2 font-poppins whitespace-nowrap">
            Use company&apos;s primary address for this location
          </p>
        </div>

        <div className="w-full pt-5 flex gap-6">
          <div className="flex flex-col w-full ">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              name="phoneNumber"
              onChange={handleInputChange}
              value={formData.phoneNumber}
              type="number"
              placeholder="Enter phone Number"
              className="border border-gray-300 focus:outline-none focus:ring-0 rounded-md px-3 py-3 text-gray-600 "
            />
          </div>
        </div>

        <div className="w-full pt-5 flex gap-6">
          <div className="flex flex-col w-full ">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Country
            </label>
            <select
              name="country"
              className="border border-gray-300 bg-white  focus:outline-none focus:ring-0 rounded-md px-3 py-3 text-gray-600 "
              onChange={handleInputChange}
              value={formData.country}
            >
              <option>Select country</option>
            </select>
          </div>
        </div>

        <div className="w-full block  md:flex gap-6 pt-5">
          <div className="flex flex-col w-full  md:w-1/2">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Address ##1
            </label>
            <input
              name="address1"
              onChange={handleInputChange}
              value={formData.address1}
              type="text"
              placeholder="1234 lower Main St , US"
              className="border border-gray-300 focus:outline-none focus:ring-0 rounded-md px-3 py-3 text-gray-600 "
            />
          </div>

          <div className="flex flex-col w-full  pt-5 md:pt-0 md:w-1/2">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Address ##2
            </label>
            <input
              name="address2"
              onChange={handleInputChange}
              value={formData.address2}
              type="text"
              placeholder="1234 lower Main St , US"
              className="border border-gray-300 focus:outline-none focus:ring-0 rounded-md px-3 py-3 text-gray-600 "
            />
          </div>
        </div>

        <div className="w-full block md:flex gap-6 md:pt-5 pt-4">
          <div className="flex flex-col w-full md:pt-0  md:w-1/2">
            <label className="text-gray-700 text-sm font-medium mb-1">
              City
            </label>
            <select
              name="city"
              className="border border-gray-300 bg-white focus:outline-none focus:ring-0 rounded-md px-3 py-3 text-gray-600 "
              onChange={handleInputChange}
              value={formData.city}
            >
              <option>Select City</option>
            </select>
          </div>

          <div className="flex flex-col w-full pt-4 md:pt-0  md:w-1/2">
            <label className="text-gray-700 text-sm font-medium mb-1">
              State
            </label>
            <select
              name="state"
              className="border border-gray-300 bg-white focus:outline-none focus:ring-0 rounded-md px-3 py-3 text-gray-600 "
              onChange={handleInputChange}
              value={formData.state}
            >
              <option>Select State</option>
            </select>
          </div>
        </div>

        <div className="w-full block pt-5 md:flex gap-6">
          <div className="flex flex-col pt-5 md:pt-0  w-full  md:w-1/2">
            <label className="text-gray-700 text-sm font-medium mb-1">
              District
            </label>
            <select
              name="district"
              className="border border-gray-300 bg-white focus:outline-none focus:ring-0 rounded-md px-3 py-3 text-gray-600 "
              onChange={handleInputChange}
              value={formData.district}
            >
              <option>Select District</option>
            </select>
          </div>

          <div className="flex flex-col w-full pt-4  md:pt-0 mt-3 md:mt-0  md:w-1/2">
            <label className="text-gray-700 focus:outline-none focus:ring-0 text-sm font-medium mb-1">
              Zip Code
            </label>
            <input
              name="zipCode"
              onChange={handleInputChange}
              value={formData.zipCode}
              type="text"
              placeholder="7000"
              className="border border-gray-300 focus:outline-none focus:ring-0 rounded-md px-3 py-3 text-gray-600"
            />
          </div>
        </div>

        <div className="gap-2 md:gap-4 flex justify-center items-center mx-7 md:px-0 text-center my-12 md:mx-8  ">
          <Button
            onClick={handleCancel}
            type="button"
            className="min-w-[150px] min-h-[40px] text-black border-[1px] border-black  hover:bg-gray-100  font-poppins bg-white font-normal  "
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="min-w-[150px] min-h-[40px] text-white  font-poppins bg-[#000000] font-normal  "
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditLocationInformation;
