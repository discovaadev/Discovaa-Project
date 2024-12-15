import ArtisanShowcase from "../components/ArtisanShowcase"
import BrowseByCategory from "../components/BrowseByCategory"
import FeaturedJobList from "../components/FeaturedJobList"
import Footer from "../components/footer"
import HeroSection from "../components/HeroSection"
import OnboardingSection from "../components/OnboardingSection"
import Testimonials from "../components/Testimonials"
import carMaintenanceImg from "../assets/carMaintenanceImg.png";
import electricalMaintenanceImg from "../assets/electricalMaintenanceImg.png";
import hairSaloonImg from "../assets/hairSaloonImg.png";
import photographerImg from "../assets/photographerImg.png";
import specializedCareImg from "../assets/specializedCareImg.png";
import carpenterImg from "../assets/carpenterImg.png";

const jobData = [
    { title: "Car Maintenance", img: carMaintenanceImg },
    { title: "Electrical Maintenance", img: electricalMaintenanceImg },
    { title: "Hair Saloon", img: hairSaloonImg },
    { title: "Photographer", img: photographerImg },
    { title: "Specialized Care", img: specializedCareImg },
    { title: "Carpenter", img: carpenterImg },
  
  ];
  
const HomePage = () => {
    return(
        <section className="">
            <HeroSection  />
            <OnboardingSection />
            <ArtisanShowcase />
            <BrowseByCategory jobData={jobData} rowLimit={5} showSeeMore={false} showSearchContainer={true} />
            <FeaturedJobList />
            <Testimonials />
            <Footer />
        </section>
    )
}

export default HomePage