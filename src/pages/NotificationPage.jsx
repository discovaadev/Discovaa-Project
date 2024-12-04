import { useState } from "react";
import TabSwitcher from "../components/TabSwitcher";
import NotificationList from "../components/NotificationList";
import LastDayText from "../assets/LastDaysText.png";
import SystemUpdateTab from "../components/SystemUpdateTab";
import DownlaodIcon from '../assets/DownlaodIcon.png';

const NotificationPage = ({ onClose, notifications, pageType  }) => {
  const [activeTab, setActiveTab] = useState("New Message");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const systemUpdates = [
    {
      title: "Automatic Updates",
      description: "This update provides bug fixes for your system including:",
      points: [
        "This update provides bug fixes for your system including",
        "This update provides bug fixes for your system including",
        "This update provides bug fixes for your system including",
      ],
    },
    {
      title: "Download in progress",
      description:
        "System has started downloading an update automatically. Once completed, the system will attempt to install the update later.",
        icon: DownlaodIcon
    },
    {
      title: "Install once downloaded",
      description: "",
    },
  ];

  return (
    <div className="fixed inset-0 top-16 left-2/4  items-center z-50">
      <div className="w-[670px] h-[626px] bg-white shadow-lg border rounded-xl overflow-hidden p-5">
        <div className="flex justify-between items-center px-4 py-8 bg-white text-white">
          <h2 className="text-3xl font-semibold text-black">Notifications</h2>
          <button
            className="text-xl text-white bg-black w-8 h-8 rounded-full "
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <TabSwitcher activeTab={activeTab} onTabChange={handleTabChange} />

        <div className="px-6 py-4 overflow-y-auto">
          <NotificationList
            activeTab={activeTab}
            notifications={notifications}
            pageType={pageType}
          />
        </div>
        <div className="flex justify-center">
          {activeTab !== "System Update" && activeTab !== "News Update" && (
            <img
              src={LastDayText}
              alt="Last Day Text"
              className="w-auto h-[60px]"
            />
          )}
        </div>
        <div className="max-w-lg mx-auto mt-8">
          {activeTab === "System Update" && (
            <SystemUpdateTab updates={systemUpdates} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
