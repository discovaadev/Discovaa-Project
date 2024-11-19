import { useState } from "react";
import "flag-icons/css/flag-icons.min.css"; // Import flag-icons CSS
import LoginImgSection from "../components/LoginImg";

export default function LineVerification() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+234");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!phoneNumber) newErrors.phone = "Phone Number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log(
        "Form submitted with phone number:",
        selectedCountryCode + phoneNumber
      );
    } else {
      setErrors(validationErrors);
    }
  };

  
  const getFlagClass = (code) => {
    switch (code) {
      case "+234":
        return "fi fi-ng"; 
      case "+1":
        return "fi fi-us"; 
      case "+44":
        return "fi fi-gb"; 
      case "+91":
        return "fi fi-in"; 
      default:
        return "fi fi-gb"; 
    }
  };

  return (
    <section className="flex md:flex-row h-screen justify-evenly ">
      <LoginImgSection className="w-full md:w-[600px]" />
      <div className="w-full md:w-[400px] flex flex-col px-6 pt-6  ">
        <form onSubmit={handleSubmit} className="space-y-9 ">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Forgot Your Password?</h2>
            <p className="text-gray-500">Please enter your registered Phone Number & we will send an OTP Verification code.</p>
          </div>

          <label className="block text-[13px] font-normal text-gray-700 transform -translate-y-[-30px]">Phone Number</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className={`${getFlagClass(selectedCountryCode)} w-5 h-5`}></span>
            </div>
            <select
              className="absolute inset-y-0 left-8 bg-transparent text-gray-500 text-sm cursor-pointer pr-2"
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
              placeholder="090912345567"
              className="pl-16 pr-4 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-center"
            />
          </div>
          {errors.phone && <span className="text-red-500 text-[10px]">{errors.phone}</span>}

          <button type="submit" className="transform -translate-y-[-70px] bg-black text-white py-2 rounded-md w-full font-semibold">Proceed</button>
        </form>
      </div>
    </section>
  );
}
