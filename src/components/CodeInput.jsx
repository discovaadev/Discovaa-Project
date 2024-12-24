import { useState } from "react";
import { Link } from "react-router-dom";
import Photographer from "../assets/photographer (1).png";

export default function CodeInput({
  title = "Check your Mail",
  titleStyle = "text-2xl font-bold",
  description = "We've sent a 6-digit confirmation code to",
  contactInfo = <a href="mailto:username@gmail.com">username@gmail.com</a>,
  contactText = ". Make sure you enter the correct code.",
  contactInfoStyle = "text-blue-600",
  buttonText = "Verify",
  buttonStyle = "w-full py-2 bg-black text-white rounded",
  descriptionWidth = "",
}) {
  const [codes, setCodes] = useState(Array(6).fill(""));

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) || value === "") {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);
      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !codes[index] && index > 0) {
      document.getElementById(`code-${index - 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Codes entered:", codes.join(""));
  };

  return (
    <section className="flex flex-col items-center sm:flex-row space-x-5  justify-evenly  ">
      <div className="">
        <img src={Photographer} alt="photographer" className="w-80 hidden lg:block w-[400px]" />
      </div>
      <div className="flex flex-col items-center pr-1 lg:items-start ">
        <div className="mb-5  pt-12">
          <h2 className={`${titleStyle} hidden sm:block text-center lg:text-start`}>{title}</h2>
          <p
            className={`${descriptionWidth} text-gray-500 text-sm pl-2 lg:w-[445px] text-start justify-center pl-0 `}
          >
            {description}{" "}
            <span className={`${contactInfoStyle}`}>
              {typeof contactInfo === "string" ? (
                <a href="#/">{contactInfo}</a>
              ) : (
                contactInfo
              )}
            </span>
            {contactText}
          </p>
          <p className=" border border-1 border-gray-400 w-full  mt-1 sm:hidden"></p>
        </div>
        <div className="">
          <form onSubmit={handleSubmit} className="md:w-72">
            <div className="grid grid-cols-6 gap-2 md:text-start">
              {codes.map((code, index) => (
                <input
                  key={index}
                  type="text"
                  id={`code-${index}`}
                  value={code}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  maxLength="1"
                  className="w-full h-14 text-center text-2xl border border-black-300 rounded bg-gray-100 focus:outline-none hover:border-black"
                />
              ))}
            </div>
            <Link to="/isvsignup2">
              <button type="submit" className={` ${buttonStyle} `}>
                {buttonText}
              </button>
            </Link>
          </form>
        </div>
        <span className="text-gray-400 text-xs mt-2 lg:ml-11  ">
          Didn&apos;t receive a code?{" "}
          <a href="#/" className="text-blue-600">
            Resend Code
          </a>
        </span>
      </div>
    </section>
  );
}
