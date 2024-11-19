import { useState } from "react";
import CarMaintainaceImg from "../assets/CarMaintainaceImg.png";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import { Link } from "react-router-dom";

export default function JoinUsSection() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleClick = (option, e) => {
    e.stopPropagation();
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="flex justify-evenly h-screen pt-20">
      <div className="flex-shrink-0">
        <img
          src={CarMaintainaceImg}
          alt="Car-maintenance"
          className="w-full max-w-[437px]"
        />
      </div>

      <div className="flex flex-col items-start max-w-lg">
        <h1 className="mb-4 font-bold text-2xl">Join Us!</h1>
        <p className="w-[340px] font-normal text-base text-gray-500 mb-10">
          To begin this journey, tell us what type of account you&apos;d be
          opening.
        </p>

        <div className="flex flex-col gap-5">
          <Link to="/isvsignup">
            <div
              className={`group flex items-center justify-between w-[426px] h-[90px] p-4 cursor-pointer rounded-lg shadow-lg bg-white ${
                selectedOptions.includes("user")
                  ? "!bg-blue-100 border border-black"
                  : ""
              } hover:bg-blue-100 hover:border-black hover:text-black`}
              onClick={(e) => handleClick("user", e)}
            >
              <PersonIcon />
              <div className="flex flex-col">
                <h3 className="font-medium text-lg">
                  Individual Service Provider
                </h3>
                <p className="text-sm font-normal">
                  I want to request artisans business services.
                </p>
              </div>
             
              <ArrowForwardIcon className="text-black group-hover:block hidden" />
            </div>
          </Link>

          <Link to="/businesssignup">
            <div
              className={`group flex items-center justify-between w-[426px] h-[90px] p-4 cursor-pointer rounded-lg shadow-lg bg-white ${
                selectedOptions.includes("service")
                  ? "!bg-blue-100 border border-black"
                  : ""
              } hover:bg-blue-100 hover:border-black hover:text-black`}
              onClick={(e) => handleClick("service", e)}
            >
              <AirportShuttleIcon />
              <div className="flex flex-col">
                <h3 className="font-medium text-lg">
                  Business Service Provider
                </h3>
                <p className="text-sm font-normal">
                  Own or belong to a company, this is for you.
                </p>
              </div>
             
              <ArrowForwardIcon className="text-black group-hover:block hidden" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
