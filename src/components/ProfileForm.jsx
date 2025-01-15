import { useState } from "react";
import "flag-icons/css/flag-icons.min.css";
import { Link } from "react-router-dom";

const ProfileForm = ({
  imgSrc,
  showBusinessInfo = false,
  titleStyle = "font-bold text-xl",
  linkTo
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+234");
  const [address, setAddress] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!phoneNumber) newErrors.phone = "Phone number is required.";
    if (!address) newErrors.address = "Address is required.";
    if (showBusinessInfo && !businessName)
      newErrors.businessName = "Business name is required.";
    if (!country) newErrors.country = "Country is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully!");
      alert("Form submitted successfully!");
    } else {
      setErrors(validationErrors);
    }
  };

  const getFlagClass = (countryCode) => {
    switch (countryCode) {
      case "+234":
        return "fi-ng";
      case "+1":
        return "fi-us";
      case "+44":
        return "fi-gb";
      case "+91":
        return "fi-in";
      default:
        return "fi";
    }
  };

  return (
    <div className="flex flex-col p-6 md:items-center lg:flex-row lg:m-0 justify-evenly lg:p-0  ">
      <div>
        <img src={imgSrc} alt="Profile" className=" lg:block w-[400px] " />
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <h3 className={`${titleStyle} hidden md:block`}>
          Complete Your Profile!
        </h3>
        <p className="hidden text-gray-500 w-80 font-normal -translate-y-8 md:translate-y-0 md:block">
          For the purpose of industry regulation, your details are required.
        </p>
        <p className="hidden border border-1 border-gray-500 w-full -translate-y-10 md:translate-y-0 "></p>
        <div className="-translate-y-2 sm:translate-y-0">
          <div className="w-full  md:space-y-2 ">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 text-sm"
            >
              Phone number
            </label>
            <div className="relative flex items-center w-full">
              <div
                className={`${getFlagClass(
                  selectedCountryCode
                )} absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5`}
              ></div>

              <select
                className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs bg-transparent outline-none cursor-pointer"
                value={selectedCountryCode}
                onChange={(e) => setSelectedCountryCode(e.target.value)}
              >
                <option value="+234">🇳🇬 +234</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+91">🇮🇳 +91</option>
              </select>

              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="09091234567"
                className="w-full  pl-16 p-3 border border-gray-300 rounded-md placeholder-text-gray placeholder:text-xs text-center hover:border-blue-500"
              />
            </div>
            {errors.phone && (
              <span className="text-red-500 text-[9px] transform -translate-y-8 ">
                {errors.phone}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="block text-gray-700 text-xs">
              Your Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              className="w-full p-3 border border-gray-300 rounded-md hover:border-blue-500 placeholder:text-xs"
            />
          </div>
          {errors.address && (
            <span className="text-red-500 text-[9px] transform -translate-y-8 ">
              {errors.address}
            </span>
          )}

          {showBusinessInfo && (
            <>
              <div className="space-y-2">
                <label
                  htmlFor="businessName"
                  className="block text-gray-700 text-sm"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Enter your business name"
                  className="w-full  p-3 border border-gray-300 rounded-md hover:border-blue-500"
                />
              </div>
              {errors.businessName && (
                <span className="text-red-500 text-[9px] transform -translate-y-8 ">
                  {errors.businessName}
                </span>
              )}

              <div className="space-y-2">
                <label
                  htmlFor="businessDescription"
                  className="block text-gray-700 text-sm"
                >
                  Business Description
                </label>
                <textarea
                  id="businessDescription"
                  value={businessDescription}
                  onChange={(e) => setBusinessDescription(e.target.value)}
                  placeholder="Describe your business"
                  className="w-full  p-3 border border-gray-300 rounded-md hover:border-blue-500"
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <label htmlFor="country" className="block text-gray-700 text-sm">
              Country of residence
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full  p-3 border border-gray-300 rounded-md hover:border-blue-500  text-gray-700 text-xs"
            >
              <option value="">Select your country</option>
              <option value="Nigeria">Nigeria</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="India">India</option>
            </select>
          </div>
          {errors.country && (
            <div className="transform -translate-y-8 ">
              <span className="text-red-500 text-[9px] ">{errors.country}</span>
            </div>
          )}
          <div className="mt-20 sm:mt-0">
            <Link to={linkTo}>
              <button
                type="submit"
                className="w-full mt-3 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Save and Continue
              </button>
            </Link>
            <div className="security flex items-center justify-center text-[13px] text-[#8692A6]">
              <span className="material-symbols-outlined text-[15px]">
                lock
              </span>
              <p className="security-note">Your info is safely secured</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
