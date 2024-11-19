import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import CarMaintainaceImg from "../assets/CarMaintainaceImg.png";
import Header from "../components/Header";
import BlackLogo from "../assets/BlackLogo.png";
import Footer from "../components/footer";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; 

export default function SelectSignUpPage2() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate(); 

  const handleClick = (option, path) => {
    setSelectedOptions((prevState) =>
      prevState.includes(option)
        ? prevState.filter((item) => item !== option)
        : [...prevState, option]
    );
    
    setTimeout(() => {
      navigate(path); 
    }, 100);
  };

  const getClassNames = (option) => {
    const isSelected = selectedOptions.includes(option);
    return `${isSelected ? "bg-blue-200 border-black" : "bg-green"} 
            hover:bg-blue-200 hover:border-black`; 
  };

  return (
    <section className="flex flex-col pt-4">
      <Header
        logoSrc={BlackLogo}
        customLinks={[
          { href: "/", label: "Home" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        showSignInText={true}
        showProfile={false}
        bgColor="transparent"
        showSearch={false}
        showIcons={false}
      />
      <div className="flex justify-evenly h-screen pt-20">
        <div className="w-[450px]">
          <img src={CarMaintainaceImg} alt="Car-maintenance" />
        </div>

        <div className="flex flex-col items-start max-w-lg">
          <h1 className="text-2xl font-extrabold mb-4">Join Us!</h1>
          <p className="text-sm font-normal text-gray-600 w-80">
            To begin this journey, tell us what type of account you&apos;d be
            opening.
          </p>

          <div className="flex flex-col gap-5 mt-10">
            <button
              className={`group flex items-center justify-between w-[426px] h-[90px] p-4 cursor-pointer rounded-lg shadow-lg border ${getClassNames(
                "user"
              )}`}
              onClick={() => handleClick("user", "/usersignuppage")}
            >
              <span className="material-icons">person</span>
              <div className="flex flex-col text-left"> 
                <h3 className="font-medium text-lg">User</h3>
                <p className="text-sm font-normal">
                  I want to request artisans business services.
                </p>
              </div>
              
              <ArrowForwardIcon className="text-black group-hover:block hidden" />
            </button>

            
            <button
              className={`group flex items-center justify-between w-[426px] h-[90px] p-4 cursor-pointer rounded-lg shadow-lg border ${getClassNames(
                "service"
              )}`}
              onClick={() => handleClick("service", "/signup")} 
            >
              <AirportShuttleIcon />
              <div className="flex flex-col text-left"> 
                <h3 className="font-medium text-lg">Service Provider</h3>
                <p className="text-sm font-normal">
                  Own or belong to a company, this is for you.
                </p>
              </div>
             
              <ArrowForwardIcon className="text-black group-hover:block hidden" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
