import { useState } from "react";
import TabSwitcher from "../components/TabSwitcher";
import NotificationList from "../components/NotificationList";
import LastDayText from "../assets/LastDaysText.png";
import SystemUpdateTab from "../components/SystemUpdateTab";
import DownlaodIcon from "../assets/DownlaodIcon.png";

const NotificationPage = ({ onClose, notifications, pageType }) => {
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
      icon: DownlaodIcon,
    },
    {
      title: "Install once downloaded",
      description: "",
    },
  ];

  return (
    <div className="fixed top-14 right-0 z-50 w-full max-w-sm md:max-w-md lg:max-w-lg h-auto bg-white shadow-lg border rounded-xl overflow-hidden p-3">
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h2 className="text-lg md:text-xl font-semibold text-black">
          Notifications
        </h2>
        <button
          className="text-lg md:text-xl text-white bg-black w-8 h-8 flex items-center justify-center rounded-full"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      <div className="mt-4">
        <TabSwitcher activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      <div className="px-4 py-4 overflow-y-auto max-h-[400px]">
        <NotificationList
          activeTab={activeTab}
          notifications={notifications}
          pageType={pageType}
        />
      </div>

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
      <div>
        {activeTab === "System Update" && (
          <SystemUpdateTab updates={systemUpdates} />
        )}
      </div>
    </div>
  );
};

export default NotificationPage;
