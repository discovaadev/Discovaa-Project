const TabSwitcher = ({ activeTab, onTabChange }) => {
  const tabs = [
    "New Message",
    "Confirmed Booking",
    "News Update",
    "System Update",
  ];

  return (
    <div className="flex border-b text-center text-sm font-medium ">
      {tabs.map((tab) => (
        <button  
          key={tab}
          className={`flex-1 py-2 ${
            activeTab === tab
              ? "font-bold border-b-2 border-black bg-black rounded-full text-white "
              : "text-gray-600"
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;
