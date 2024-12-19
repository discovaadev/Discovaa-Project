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
    <section className="flex flex-col w-full ">
      <Header
        logoSrc={BlackLogo}
        hideNavLinks={true}
        customLinks={[
          { href: "/", label: "Home" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        showSignInText={true}
        showProfile={false}
        bgColor="bg-black"
        showSearch={false}
        showIcons={false}
        showAvaterNlogo={true}
      />
      <div className="flex flex-col items-center m-auto h-screen lg:flex-row justify-evenly">
        <div className="w-[350px] md:w-[450px]">
          <img src={CarMaintainaceImg} alt="Car-maintenance" />
        </div>

        <div className="pl-6 sm:flex flex-col items-start justify-center  ">
          <h1 className="text-3xl sm:text-2xl font-extrabold mb-4">Join Us!</h1>
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
      <div className="flex sm:hidden items-center justify-center mt-8 text-sm">
        <span className="text-[#8692A6]">Already have an account? </span>
        <Link to="/signin" className="text-blue-500 ml-1">
          Sign in
        </Link>
      </div>
      </div>
      <Footer className="hidden lg:flex" />
    </section>
  );
}
