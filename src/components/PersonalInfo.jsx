import { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import LoginAndSecurity from "./LoginAndSecurity";
import UserPrivacy from "./UserPrivacy";

const PersonalInfo = ({ profilePic, onProfileImageChange, showServiceOffered, showBusinessRegNumber }) => {
  const [activeTab, setActiveTab] = useState("personalInfo");
  const [formData, setFormData] = useState({
    name: "Chris Metu",
    gender: "Male",
    country: { code: "ee", name: "Estonia" },
    timeZone: "Europe/Estonia",
    phoneNumber: "+37255123456",
    pronouns: "N/A",
    languagesSpoken: "English",
    BusinessRegNumber: "PS012345",
    serviceoffered: "Car Maintainance"
  });


  const [isEditing, setIsEditing] = useState(null);
  const fileInputRef = useRef();

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onProfileImageChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = (label) => {
    setIsEditing(label);
  };

  const handleSaveClick = () => {
    setIsEditing(null);
  };

  const handleChange = (field, value) => {
    if (field === "country") {
      const [code, name] = value.split(":");
      setFormData((prev) => ({
        ...prev,
        country: { code: code.trim(), name: name.trim() },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handlePhoneNumberChange = (phone) => {
    setFormData((prev) => ({
      ...prev,
      phoneNumber: phone,
    }));
  };

  const renderContent = () => {
    if (activeTab === "personalInfo") {
      return (
        <>
          <div className="flex flex-col items-center mt-6">
            <div className=" relative w-44 h-44 rounded-full overflow-hidden border-4 border-gray-300 items-center justify-center">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
                onClick={() => fileInputRef.current.click()}
              />
              <label
                htmlFor="profilePicInput"
                className="absolute bg-gray-800 p-2 rounded-full cursor-pointer flex items-center justify-center"
                style={{ bottom: '10px', right: '10px', zIndex: '20px' }} 
              >
                <FaCamera className="text-white text-xl " />
              </label>
              <input
                type="file"
                id="profilePicInput"
                className="hidden"
                accept="image/*"
                onChange={handleProfilePicChange}
              />
            </div>
          </div>

          <div className="mt-6 space-y-6">
          {[
    { label: "Name", field: "name", value: formData.name },
    { label: "Gender", field: "gender", value: formData.gender },
    {
      label: "Country",
      field: "country",
      value: `${formData.country.code}: ${formData.country.name}`,
    },
    { label: "TimeZone", field: "timeZone", value: formData.timeZone },
    {
      label: "PhoneNumber",
      field: "phoneNumber",
      value: formData.phoneNumber,
    },
    { label: "Pronouns", field: "pronouns", value: formData.pronouns },
    {
      label: "LanguagesSpoken",
      field: "languagesSpoken",
      value: formData.languagesSpoken,
    },
    ...(showBusinessRegNumber? [
      { label: "Business Registration Number", field: "businessRegNumber", value: formData.BusinessRegNumber}
    ] : []), 
    ...(showServiceOffered ? [
      { label: "Service Offered", field: "serviceOffered", value: formData.serviceoffered }
    ] : [])
  ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-start py-3 border-b border-gray-200"
              >
                <div>
                  <div className="text-gray-800 font-medium">{item.label}</div>
                  <div className="text-gray-600 mt-1">
                    {isEditing === item.field ? (
                      item.field === "country" ? (
                        <select
                          value={`${formData.country.code}: ${formData.country.name}`}
                          onChange={(e) => handleChange("country", e.target.value)}
                          className="w-full border border-gray-300 rounded-lg p-2"
                        >
                          <option value="ee: Estonia">Estonia</option>
                          <option value="us: United States">United States</option>
                          <option value="gb: United Kingdom">United Kingdom</option>
                          <option value="de: Germany">Germany</option>
                          <option value="fr: France">France</option>
                          <option value="ca: Canada">Canada</option>
                        </select>
                      ) : item.field === "phoneNumber" ? (
                        <PhoneInput
                          country={formData.country.code}
                          value={formData.phoneNumber}
                          onChange={handlePhoneNumberChange}
                          enableSearch={true}
                          inputStyle={{
                            width: "100%",
                            padding: "10px",
                            paddingLeft: "50px",
                            fontSize: "14px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            
                          }}
                        />
                      ) : (
                        <input
                          type="text"
                          value={formData[item.field]}
                          onChange={(e) =>
                            handleChange(item.field, e.target.value)
                          }
                          className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                      )
                    ) : (
                      <>{item.value}</>
                    )}
                  </div>
                </div>
                {isEditing === item.field ? (
                  <button
                    onClick={handleSaveClick}
                    className="border border-gray-500 text-black rounded-full px-4 py-1 hover:bg-gray-500 hover:text-white transition"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditClick(item.field)}
                    className="border border-gray-500 text-gray-500 rounded-full px-4 py-1 hover:bg-black hover:text-white transition"
                  >
                    Edit
                  </button>
                )}
              </div>
            ))}
          </div>
        </>
      );
    }

    if (activeTab === "loginSecurity") {
      return <LoginAndSecurity />;
    }

    if (activeTab === "privacy") {
      return <UserPrivacy />;
    }

    return null;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800">Your Profile</h1>
      <div className="flex mt-4 border-b border-gray-200">
        {[  
          { key: "personalInfo", label: "Personal Info" },
          { key: "loginSecurity", label: "Login and Security" },
          { key: "privacy", label: "Privacy" },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`px-6 py-2 text-sm font-medium ${
              activeTab === tab.key
                ? "border-b-2 text-white bg-black p-2 rounded-full"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">{renderContent()}</div>
    </div>
  );
};

export default PersonalInfo;
