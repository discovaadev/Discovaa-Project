import Header from "../components/Header";
import ServiceProviderList from "../components/ServiceProviderList";
import JasonDoe from "../assets/jasonDoe.png";
import PlumService from "../assets/PlumPlumbingServices.png";

import AmbersPhotography from "../assets/Amber’sPhotography.png";

import SamsElectronic from "../assets/Sam’sElectronics.png";
import SafeCar from "../assets/SafeCarRentals.png";
import SheilasEnt from "../assets/DJSheilaEntertainment.png";
import Jackpull from "../assets/JackPullAutos.png";
import EarlServices from "../assets/EarlServices.png";
import HisSaloon from "../assets/HisHairSalon.png";
import Footer from "../components/footer";

const sampleProviders = [
  {
    name: "Jason Doe",
    category: "Car Maintenance",
    rating: 4,
    description:
      "Skilled Mechanic - Approachable - Committed, Honesty, and Reliability - Providing Quality Service",
    location: "Tartu, 50050",
    registered: true,
    regCode: "PS012345",
    image: JasonDoe,
  },
  {
    name: "Plum Plumbing Services",
    category: "Plumbing Services",
    rating: 5,
    description:
      "Established Plumbing Company - Friendly Service - English-Speaking Staff - Honesty and Reliability",
    location: "Narva, 20303",
    registered: true,
    regCode: "PS012346",
    image: PlumService,
  },
  {
    name: "Amber’s Photography",
    category: "Photographer",
    rating: 4.5,
    description:
      "Established Photographer - Welcoming and Friendly Staff  - Offering Exceptional Laundry Care, Reliable ...",
    location: "Kuressaare, 93801",
    registered: true,
    regCode: "HS012345",
    image: AmbersPhotography,
  },
  {
    name: "Sam’s Electronics",
    category: "Electrical Maintenance",
    rating: 4,
    description:
      "Seasoned Electrician -Friendly -English Speaking -Professional, Honest and Reliable Service",
    location: "Valga, 68201",
    registered: true,
    regCode: "HS012345",
    image: SamsElectronic,
  },
  {
    name: "Safe Car Rentals",
    category: "DJ and Entertainment",
    rating: 4,
    description:
      "Party Hard DJ -Friendly -English Speaking -Professional, Honest and Reliable Service",
    location: "Tartu, 51111",
    registered: true,
    regCode: "HS012345",
    image: SafeCar,
  },
  {
    name: "DJ Sheila Entertainment",
    category: "Transportation Services",
    rating: 4,
    description:
      "Car Rentals Services -Friendly -English Speaking -Professional, Honest and Reliable Service",
    location: "Tallinn, 10111",
    registered: true,
    regCode: "HS012345",
    image: SheilasEnt,
  },
  {
    name: "JackPull Autos",
    category: "Car Maintenance",
    rating: 4,
    description:
      "Qualified Mechanics -Friendly -English Speaking -Professional, Honest and Reliable Service",
    location: "Narva, 21019",
    registered: true,
    regCode: "HS012345",
    image: Jackpull,
  },

  {
    name: "Earl Services",
    category: "Electrical Maintenance",
    rating: 4,
    description:
      "Electrical Engineers -Friendly -English Speaking -Professional, Honest and Reliable Service",
    location: "Kohtla-Järve, 30329",
    registered: true,
    regCode: "HS012345",
    image: EarlServices,
  },
  {
    name: "His Hair Salon",
    category: "Hair Salon",
    rating: 4,
    description:
      "Experienced Salon - Warm and Friendly Atmosphere - Professionalism,  Providing Exceptional Beauty Care ...",
    location: "Viljandi, 71034",
    registered: true,
    regCode: "HS012345",
    image: HisSaloon,
  },
];

const FavouritePage = ({
  searchQuery,
  onSearchChange,
  profilePic,
  onProfileImageChange,
}) => {
  return (
    <div className="flex flex-col">
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        linkColor="text-white"
        showSearch={true}
        showProfile={true}
        customLinks={[
          { href: "/", label: "Home" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        onProfileImageChange={onProfileImageChange}
        profilePic={profilePic || "../assets/HeaderProfileImg (2).png"}
      />
      <main>
        <div className="p-9 mt-4 ml-8">
          <h1 className="font-bold text-3xl">Recently Booked Artisans</h1>
          <p className="text-gray-500">
            Artisans you've booked and met will appear here. Click to view their
            profile or message them.
          </p>
        </div>
        <ServiceProviderList providers={sampleProviders} showHeaderText={false} showSortDropdown={false} customStyles="bg-transparent mt-[-50px]" />
      </main>
      <Footer />
    </div>
  );
};
export default FavouritePage;
