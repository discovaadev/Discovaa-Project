import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
  const navigate = useNavigate();
  const handleButtonClick = () => {
    const currentPath = window.location.pathname;
    if (currentPath === "/useremailconfirmation") {
      navigate("/usersignuppage2");
    } else if (currentPath === "/isvemail") {
      navigate("/isvsignup2");
    } else {
      navigate("/");
    }
  };
  
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
    <section className="-translate-y-5 sm:flex-row space-x-5 justify-evenly ">
      <div className=" p-6 flex flex-col items-center lg:items-start">
        <div className="mb-5   ">
          <h2
            className={`${titleStyle} hidden sm:block text-center lg:text-start`}
          >
            {title}
          </h2>
          <p
            className={`${descriptionWidth} text-gray-500 text-sm  lg:w-[445px] text-start justify-center pl-0 `}
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
          </form>

          <button
            type="button"
            onClick={handleButtonClick}
            className={` ${buttonStyle}  `}
          >
            {buttonText}
          </button>
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
