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
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
    <div className="w-full max-w-lg md:max-w-2xl lg:w-[670px] h-auto lg:h-[626px] bg-white shadow-lg border rounded-xl overflow-hidden p-5 mx-4">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-6 border-b">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black">
          Notifications
        </h2>
        <button
          className="text-lg md:text-xl text-white bg-black w-8 h-8 flex items-center justify-center rounded-full"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
  
      {/* Tab Switcher */}
      <div className="mt-4">
        <TabSwitcher activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
  
      {/* Notifications List */}
      <div className="px-4 py-6 overflow-y-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px]">
        <NotificationList
          activeTab={activeTab}
          notifications={notifications}
          pageType={pageType}
        />
      </div>
  
      {/* Optional Image */}
      <div className="flex justify-center mt-4">
        {activeTab !== "System Update" && activeTab !== "News Update" && (
          <img
            src={LastDayText}
            alt="Last Day Text"
            className="w-3/4 md:w-1/2 lg:w-auto h-auto max-h-16"
          />
        )}
      </div>
  
      {/* System Update Section */}
      <div className="mt-6">
        {activeTab === "System Update" && (
          <SystemUpdateTab updates={systemUpdates} />
        )}
      </div>
    </div>
  </div>
  
  );
};

export default NotificationPage;
