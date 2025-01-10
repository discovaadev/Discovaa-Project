import { useState } from "react";

import MartPic from "../assets/MartPicImg.png";
import Khrisjan from "../assets/KristJanPicImg.png";
import MariLiis from "../assets/MariPicImg.png";
import KatiPic from "../assets/KatyPicImg.png";
import Priit from "../assets/PriitPicImg.png";

const IspFavoritePage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const favorites = [
    {
      id: 1,
      name: "Mart Jaan",
      lastSeen: "Last seen 5 minutes ago",
      profileImage: MartPic,
    },
    {
      id: 2,
      name: "Kristjan Tõnis",
      lastSeen: "Last seen 2 hours ago",
      profileImage: Khrisjan,
    },
    {
      id: 3,
      name: "Mari Liis",
      lastSeen: "Last seen 1 day ago",
      profileImage: MariLiis,
    },
    {
      id: 4,
      name: "Kati Kristiina",
      lastSeen: "Last seen 2 days ago",
      profileImage: KatiPic,
    },
    {
      id: 5,
      name: "Priit Maarja",
      lastSeen: "Last seen 1 week ago",
      profileImage: Priit,
    },
  ];

  const handleClose = () => {
    setIsVisible(false);
    console.log("Close button clicked");
  };
  if (!isVisible) return null;
  return (
    <div className="fixed top-14 left-1/2 transform -translate-x-1/2 w-full max-w-md md:-translate-x-[70px] md:mt-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 relative ">
        <button
          className="absolute top-4 right-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800"
          aria-label="Close"
          onClick={handleClose}
        >
          &times;
        </button>

        <h1 className="text-xl font-bold text-gray-800 mb-6">Favourites</h1>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-medium text-gray-600">
            Recent Connections
          </h2>
          <button className="text-sm font-medium text-black hover:underline">
            View All
          </button>
        </div>

        <div className="max-h-72 overflow-y-auto">
          <ul className="space-y-4">
            {favorites.map((favorite) => (
              <li
                key={favorite.id}
                className="flex items-center justify-between border-b border-gray-200 pb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={
                      favorite.profileImage ||
                      `https://via.placeholder.com/48?text=${favorite.name[0]}`
                    }
                    alt={favorite.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {favorite.name}
                    </p>
                    <p className="text-xs text-gray-500">{favorite.lastSeen}</p>
                  </div>
                </div>

                <button className="text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  Message
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IspFavoritePage;
