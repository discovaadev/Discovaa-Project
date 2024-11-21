import Header from "../components/Header";
import BrowseByCategory from "../components/BrowseByCategory";
import CarMaintenace from "../assets/CarMaintainace2.png";
import ElectricalMaintenance from "../assets/ElectricalMaintainace.png";
import HairSaloon from "../assets/HairSaloon2.png";
import EventPlaning from "../assets/EventPlanningImg.png";
import ComputerMobile from "../assets/ComputerMobileImg.png";
import Carpenter from "../assets/CarpenterImg2.png";
import Photographer from "../assets/PhotographerImg2.png";
import SpecializedCare from "../assets/SpecializedCareImg2.png";
import Plumbing from "../assets/PlumbingImg.png";
import Transportation from "../assets/TransportationImg2.png";
import Entertainment from "../assets/Entertainment.png";
import laundry from "../assets/LaundryServiceImg.png";

import Pagination from "../components/Pagination";
import Footer from "../components/footer";

const newJobData = [
  { title: "Car Maintenance", img: CarMaintenace },
  { title: "Electrical Maintenance", img: ElectricalMaintenance },
  { title: "Hair Saloon", img: HairSaloon },
  { title: "Laundry and Cleaning", img: laundry },
  { title: "Event Planning", img: EventPlaning },
  { title: "Computer Mobile and IT", img: ComputerMobile },
  { title: "Carpenter", img: Carpenter },
  { title: "Photographer", img: Photographer },
  { title: "Specialized Care", img: SpecializedCare },
  { title: "Plumbing and Pipes", img: Plumbing },
  { title: "Transportation and Services", img: Transportation },
  { title: " Entertainment and Dj", img: Entertainment },
];

const UserSeeMorePage = ({
  searchQuery,
  onSearchChange,
  profilePic,
  onProfileImageChange,
  onToggleChat
}) => {
  return (
    <div>
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        linkColor="text-white"
        showSearch={true}
        showProfile={true}
        customLinks={[
          { href: "/", label: "Home" },
          { href: "/pricing", label: "Dashboard" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        onProfileImageChange={onProfileImageChange}
        profilePic={profilePic || "../assets/HeaderProfileImg (2).png"}
        onToggleChat={onToggleChat}
      />
      <main>
        <BrowseByCategory
          jobData={newJobData}
          rowLimit={2}
          showSeeMore= {false}
          description="Browse By Category"
        />
        <Pagination showFirstPage={false} showPage4={false} showLastPage={false} />
      </main>
      <Footer />
    </div>
  );
};

export default UserSeeMorePage;
