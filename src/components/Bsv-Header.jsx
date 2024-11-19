
import Logo from "../components/Logo/logo.jsx";
import WhiteLogo from "../assets/WhiteLogo.png";
import HeaderProfileImg from "../assets/HeaderProfileImg.png";
import SearchIcon from "../assets/SearchIcon.png";

export default function BsvHeader({ searchQuery, onSearchChange }) {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <header className="flex justify-between items-center bg-black text-white py-3 px-14">
      <div className="flex items-center space-x-6">
        <Logo src={WhiteLogo} width="112px" height="auto" />
        <nav className="flex space-x-4">
          <a href="#/" className="font-bold">
            Home
          </a>
          <a href="#/" className="text-sm">
            Dashboard
          </a>
          <a href="#/" className="text-sm">
            About
          </a>
          <a href="#/" className="text-sm">
            Contact
          </a>
        </nav>
      </div>

      <div className="relative flex items-center mr-32">
        <input
          type="text"
          placeholder="Search artisans by name |"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full pl-3 pr-10 py-2 border border-gray-300 bg-black text-white rounded-md focus:outline-none"
        />
        {searchQuery ? (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 text-gray-500 text-lg cursor-pointer"
          >
            ✖
          </button>
        ) : (
          <img src={SearchIcon} alt="Search icon" className="absolute right-3 w-5 h-5" />
        )}
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex space-x-3 text-lg">
          <a href="#/notifications" title="Notifications" className="cursor-pointer">
            <span className="material-icons">notifications</span>
          </a>
          <a href="#/messages" title="Messages" className="cursor-pointer">
            <span className="material-icons">message</span>
          </a>
          <a href="#/favorites" title="Favorites" className="cursor-pointer">
            <span className="material-icons">favorite</span>
          </a>
        </div>
      </div>
        <div className="w-8 h-8">
          <img src={HeaderProfileImg} alt="Profile" className="rounded-full w-full h-full object-cover" />
        </div>
    </header>
  );
}
