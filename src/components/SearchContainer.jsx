import { useState } from "react";
import SearchIcon from "../assets/Search Icon.png";
import { useNavigate } from "react-router-dom";

export default function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputClick = () => {
    navigate('/search');
  }

  return (
    <div className="flex relative items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onClick={handleInputClick}
        placeholder="Search artisans by name |"
        className="w-[350px] py-2 px-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <img
        src={SearchIcon}
        alt="Search Icon"
        className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
      />
    </div>
  );
}
