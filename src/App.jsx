// import img from "./assets/profile.png";
// import ProfileCard from "./Components/ProfileCard";
// import Timeline from "./Components/Timeline";
// import OrderDetailedSummary from "./Components/OrderDetailedSummary";
// import BulletListAlt from "./Components/BulletListAlt";
// import { Edit } from "lucide-react";
// import BulletLIstStepper from "./Components/BulletLIstStepper";
// import EditInformation from "./Components/EditInformation";

// import EditContactInfo from "./Components/EditContactInfo";
import EditLocationInformation from "./Components/EditLocationInformation";

const App = () => {
  // const handleEdit = () => {
  //   alert("Edit Profile Clicked");
  // };

  // const profileDetails = [
  //   { label: "Company Name:", value: "Ventrie" },
  //   { label: "Address:", value: "1234 Lower Main St, US" },
  //   { label: "Phone Number:", value: "(267) 265-6651" },
  //   { label: "Website:", value: "www.ventrie.com" },
  //   { label: "Email:", value: "Peter@bitspro.com" },
  //   { label: "Date:", value: "12/11/2025" },
  //   {
  //     label: "Status:",
  //     value: <span className="text-[#38DB7D] font-medium">Active</span>,
  //   },
  //   {
  //     label: "Logo:",
  //     value: "-",
  //   },
  // ];

  return (
    <div>
      {/* <ProfileCard
        profileImg={img}
        name="Peter Nguyen"
        role="Author"
        details={profileDetails}
        onEdit={handleEdit}
      />
      <Timeline />
      <OrderDetailedSummary />
      <BulletListAlt /> */}
      {/* <BulletLIstStepper /> */}
      {/* <EditInformation /> */}
      <EditLocationInformation />
      {/* <EditContactInfo /> */}
    </div>
  );
};

export default App;
