import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarMaintainaceImg from "../assets/CarMaintainaceImg.png";
import Header from "../components/Header";
import BlackLogo from "../assets/BlackLogo.png";
import Footer from "../components/footer";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

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
    <section className="flex flex-col min-h-screen ">
      <Header
        logoSrc={BlackLogo}
        hideNavLinks={true}
        customLinks={[
          { href: "/homepage", label: "Home" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        showSignInText={true}
        showProfile={false}
        bgColor=""
        showSearch={false}
        showIcons={false}
        showAvaterNlogo={false}
        showMobileLogo = {true}
        showMenuIcon = {true}
      />
      <div className="flex flex-col h-screen lg:flex-row justify-evenly">
        <div className="w-[250px] m-auto md:w-[420px]">
          <img src={CarMaintainaceImg} alt="Car-maintenance"  />
        </div>

        <div className="p-2 sm:flex flex-col items-start justify-center md:m-auto  ">
          <h1 className="text-3xl sm:text-2xl font-extrabold mb-4 ">Join Us!</h1>
          <p className="text-sm font-normal text-gray-600 w-80 ">
            To begin this journey, tell us what type of account you&apos;d be
            opening.
          </p>

          <div className="flex flex-col p-2">
            <button
              className={`group flex items-center p-2 space-x-5 w-full h-[90px]  cursor-pointer rounded-lg shadow-lg   md:w-[400px] ${getClassNames(
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
              className={`group flex items-center p-2 space-x-5 h-[90px]  cursor-pointer rounded-lg shadow-lg   md:w-[400px] ${getClassNames(
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
      <div className="flex sm:hidden items-center justify-center mt-8 text-sm">
        <span className="text-[#8692A6]">Already have an account? </span>
        <Link to="/login" className="text-blue-500 ml-1">
          Sign in
        </Link>
      </div>
      </div>
      <Footer className="" />
    </section>
  );
}
