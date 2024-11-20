import Header from "../components/Header";
import BrowseByCategory from "../components/BrowseByCategory";
import CarMaintenace from '../assets/CarMaintainace2.png';
import ElectricalMaintenance from '../assets/ElectricalMaintainace.png' 
import HairSaloon from '../assets/HairSaloon2.png';
import EventPlaning from '../assets/EventPlanningImg.png';
import ComputerMobile from '../assets/ComputerMobileImg.png';
import Carpenter from '../assets/CarpenterImg2.png'
import Photographer from '../assets/PhotographerImg2.png';
import SpecializedCare from '../assets/SpecializedCareImg2.png';
import Plumbing from '../assets/PlumbingImg.png';
import Transportation from '../assets/TransportationImg2.png';
import Entertainment from '../assets/Entertainment.png'
import laundry from '../assets/LaundryServiceImg.png'
import ServiceProviderList from "../components/ServiceProviderList";
import JasonDoe from '../assets/jasonDoe.png';
import PlumService from '../assets/PlumPlumbingServices.png';
import SharsBeauty from '../assets/Sharr’sBeautyandSpa.png';
import KhrisLaundry from '../assets/KhrisLaundryMart.png';
import TripleBEvents from '../assets/TripleBEvents.png';
import ArnoidWhite from '../assets/ArnoldWhite.png';
import WeberWood from '../assets/WebberWoodWorld.png';
import AmbersPhotography from '../assets/Amber’sPhotography.png';
import WaterWood from '../assets/WaterworldHomeCare.png';
import SamsElectronic from '../assets/Sam’sElectronics.png';
import SafeCar from '../assets/SafeCarRentals.png';
import SheilasEnt from '../assets/DJSheilaEntertainment.png';
import Jackpull from '../assets/JackPullAutos.png';
import EarlServices from '../assets/EarlServices.png';
import HisSaloon from '../assets/HisHairSalon.png'
import Pagination from '../components/Pagination';
import Footer from '../components/footer';



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
    { title: "Transportation and Services", img:Transportation},
    { title: " Entertainment and Dj", img: Entertainment },
  ]

  const sampleProviders = [
    {
      name: 'Jason Doe',
      category: 'Car Maintenance',
      rating: 4,
      description: 'Skilled Mechanic - Approachable - Committed, Honesty, and Reliability - Providing Quality Service',
      location: 'Tartu, 50050',
      registered: true,
      regCode: 'PS012345',
      image: JasonDoe,
    },
    {
      name: 'Plum Plumbing Services',
      category: 'Plumbing Services',
      rating: 5,
      description: 'Established Plumbing Company - Friendly Service - English-Speaking Staff - Honesty and Reliability',
      location: 'Narva, 20303',
      registered: true,
      regCode: 'PS012346',
      image: PlumService,
    },
    {
      name: 'Sharr’s Beauty and Spa',
      category: 'Hair Salon',
      rating: 5,
      description: 'Experienced Salon - Warm and Friendly Atmosphere - Professionalism, Providing Exceptional Beauty Care',
      location: 'Pärnu, 80099',
      registered: true,
      regCode: 'HS012345',
      image: SharsBeauty,
    },
    {
      name: 'Khris Laundry Mart',
      category: 'Laundry and Cleaning',
      rating: 3,
      description: 'Established Laundry Mart - Welcoming and Friendly Staff  - Offering Exceptional Laundry Care, Reliable ...',
      location: 'Tallinn, 10001',
      registered: true,
      regCode: 'HS012345',
      image: KhrisLaundry,
    },
  
    {
      name: 'Triple B Events',
      category: 'Event Services',
      rating: 3,
      description: 'Premier Event Service Provider - Approachable  - Ensuring Exceptional Service for Your Events ...',
      location: 'Kohtla-Järve, 30320',
      registered: true,
      regCode: 'HS012345',
      image:TripleBEvents,
    },
    {
      name: 'Arnold White',
      category: 'Computer Mobile and IT',
      rating: 3,
      description: 'Committed to Professionalism, Honesty, and Reliability - Delivering High-Quality IT Solutions and Support ...',
      location: 'Kohtla-Järve, 30320',
      registered: true,
      regCode: 'HS012345',
      image: ArnoidWhite,
    },
    {
      name: 'Webber Wood World',
      category: 'Carpenter',
      rating: 4.5,
      description: 'Premier Carpentry Service Provider - Approachable  - Ensuring Exceptional Service for Your Events ...',
      location: 'Rakvere, 44001',
      registered: true,
      regCode: 'HS012345',
      image:WeberWood,
    },
    {
      name: 'Amber’s Photography',
      category: 'Photographer',
      rating: 4.5,
      description: 'Established Photographer - Welcoming and Friendly Staff  - Offering Exceptional Laundry Care, Reliable ...',
      location: 'Kuressaare, 93801',
      registered: true,
      regCode: 'HS012345',
      image: AmbersPhotography,
    },
    {
      name: 'Waterworld Home Care',
      category: 'Specialized Care',
      rating: 4,
      description: 'Qualified Care Giver -Friendly -English Speaking -Professional, Honest and Reliable Service...',
      location: 'Võru, 65601',
      registered: true,
      regCode: 'HS012345',
      image:  WaterWood,
    },
    {
      name: 'Sam’s Electronics',
      category: 'Electrical Maintenance',
      rating: 4,
      description: 'Seasoned Electrician -Friendly -English Speaking -Professional, Honest and Reliable Service',
      location: 'Valga, 68201',
      registered: true,
      regCode: 'HS012345',
      image:  SamsElectronic,
    },
    {
      name: 'Safe Car Rentals',
      category: 'DJ and Entertainment',
      rating: 4,
      description: 'Party Hard DJ -Friendly -English Speaking -Professional, Honest and Reliable Service',
      location: 'Tartu, 51111',
      registered: true,
      regCode: 'HS012345',
      image: SafeCar,
    },
    {
      name: 'DJ Sheila Entertainment',
      category: 'Transportation Services',
      rating: 4,
      description: 'Car Rentals Services -Friendly -English Speaking -Professional, Honest and Reliable Service',
      location: 'Tallinn, 10111',
      registered: true,
      regCode: 'HS012345',
      image:SheilasEnt,
    },
    {
      name: 'JackPull Autos',
      category: 'Car Maintenance',
      rating: 4,
      description: 'Qualified Mechanics -Friendly -English Speaking -Professional, Honest and Reliable Service',
      location: 'Narva, 21019',
      registered: true,
      regCode: 'HS012345',
      image:Jackpull,
    },
 
    {
      name: 'Earl Services',
      category: 'Electrical Maintenance',
      rating: 4,
      description: 'Electrical Engineers -Friendly -English Speaking -Professional, Honest and Reliable Service',
      location: 'Kohtla-Järve, 30329',
      registered: true,
      regCode: 'HS012345',
      image: EarlServices,
    },
    {
      name: 'His Hair Salon',
      category: 'Hair Salon',
      rating: 4,
      description: 'Experienced Salon - Warm and Friendly Atmosphere - Professionalism,  Providing Exceptional Beauty Care ...',
      location: 'Viljandi, 71034',
      registered: true,
      regCode: 'HS012345',
      image: HisSaloon,
    },
  ]

const UserFilterPage = ({ searchQuery, onSearchChange, profilePic, onProfileImageChange, onToggleChat}) => {
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
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        onProfileImageChange={onProfileImageChange}
        profilePic={profilePic || "../assets/HeaderProfileImg (2).png"}
        onToggleChat={onToggleChat}
      />{" "}

      <main>
      <BrowseByCategory jobData={newJobData} rowLimit={1} showSeeMore={true} description='Browse By Category' />
      <ServiceProviderList  providers={sampleProviders} />
      <Pagination/>
      </main>
      <Footer />
    </div>
  );
};

export default UserFilterPage;
