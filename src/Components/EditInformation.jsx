import { MdArrowBackIosNew } from "react-icons/md";
import { useState } from "react";
import { Button } from "../components/ui/button";

function EditInformation() {
  const [formData, setFormData] = useState({
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("naem ", name, " value ", value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

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
            Edit Information
          </h1>
        </div>

        {/* Form Fields */}
        <div className="w-full block  md:flex gap-6 mt-4">
          <div className="flex flex-col w-full  md:w-1/2">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Full Name
            </label>
            <select
              name="fullName"
              className="border border-gray-300 bg-white py-3 rounded-md px-3 focus:outline-none focus:ring-0  text-gray-600 "
              onChange={handleInputChange}
              value={formData.fullName}
            >
              <option>Select category</option>
            </select>
          </div>

          <div className="flex flex-col pt-5 md:pt-0 w-full md:w-1/2">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Last Name
            </label>
            <input
              name="lastName"
              onChange={handleInputChange}
              value={formData.lastName}
              type="text"
              placeholder="Enter Company Name"
              className="border border-gray-300 focus:outline-none focus:ring-0  rounded-md px-3 py-3 text-gray-600 "
            />
          </div>
        </div>

        <div className="w-full pt-5 flex gap-6">
          <div className="flex flex-col w-full ">
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
        </div>

        <div className="w-full block  md:flex gap-6 mt-4">
          <div className="flex flex-col w-full  pt-5 md:w-1/2">
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

          <div className="flex flex-col w-full pt-5 md:w-1/2">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Select Country
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

        <div>
          <div className="w-full pt-5 block md:flex gap-6 mt-4">
            <div className="flex flex-col w-full  md:w-1/2">
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

            <div className="flex flex-col w-full pt-5 md:pt-0  md:w-1/2">
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
          </div>
        </div>

        <div>
          <div className="w-full block pt-5 md:pt-0 md:flex gap-6 mt-4">
            <div className="flex flex-col w-full  md:w-1/2">
              <label className="text-gray-700 focus:outline-none focus:ring-0 text-sm font-medium mb-1">
                Zip Code
              </label>
              <input
                name="zipCode"
                onChange={handleInputChange}
                value={formData.zipCode}
                type="text"
                placeholder="1234 lower Main St , US"
                className="border border-gray-300 focus:outline-none focus:ring-0 rounded-md px-3 py-3 text-gray-600"
              />
            </div>

            <div className="flex flex-col pt-5 md:pt-0  w-full  md:w-1/2">
              <label className="text-gray-700 text-sm font-medium mb-1">
                Region
              </label>
              <select
                name="region"
                className="border border-gray-300 bg-white focus:outline-none focus:ring-0 rounded-md px-3 py-3 text-gray-600 "
                onChange={handleInputChange}
                value={formData.city}
              >
                <option>Select City</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col pt-5 w-full">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Website
            </label>
            <input
              name="website"
              onChange={handleInputChange}
              value={formData.website}
              type="text"
              placeholder="www.ventrie.com"
              className="border border-gray-300 focus:outline-none focus:ring-0 rounded-md px-3 py-3 text-gray-600 "
            />
          </div>
        </div>

        <div>
          <div>
            <div className="w-full block pt-5  md:flex gap-6 mt-4">
              <div className="flex flex-col w-full  md:w-1/2">
                <label className="text-gray-700 text-sm font-medium mb-1">
                  Date
                </label>
                <input
                  name="date"
                  onChange={handleInputChange}
                  value={formData.date}
                  type="date"
                  placeholder="1234 lower Main St , US"
                  className="border border-gray-300 focus:outline-none focus:ring-0 rounded-md px-3 py-3 text-gray-600 "
                />
              </div>

              <div className="flex flex-col focus-visible:outline-none w-full pt-5 md:pt-0 md:w-1/2">
                <label className="text-gray-700 text-sm font-medium mb-1">
                  Status
                </label>
                <input
                  name="status"
                  onChange={handleInputChange}
                  value={formData.status}
                  type="text"
                  placeholder="Active"
                  className="border border-gray-300 focus:outline-none focus:ring-0 rounded-md px-3 py-3 text-gray-600 "
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
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditInformation;
