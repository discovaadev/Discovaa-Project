import CarMaintainaceImg from "../assets/CarMaintainaceImg.png";
import { useState } from "react";

export default function Subscribe() {
  const [emailText, setEmailText] = useState("");
  const handleEmailChange = (e) => {
    setEmailText(e.target.value);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    console.log("Submitted email:", emailText);
  };

  const [formData, setFormData] = useState({
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <section className="text-white">
      <div className="text-center pt-5">
        <h2 className="text-3xl font-bold text-black">Subscribe</h2>
        <p className="font-normal text-sm text-gray-400">
          A monthly updates email on the latest news on Discovaa!!!
        </p>
      </div>

      <div className="flex flex-col  lg:flex-row justify-evenly lg:px-28 lg:py-20">
        <div className="max-w-lg md:m-auto">
          <img
            src={CarMaintainaceImg}
            alt="subscribe-img"
            className="w-[230px] mt-5 m-auto md:w-[350px] lg:w-full h-auto "
          />
        </div>

        <div className="mt-6 max-w-[350px] m-auto  md:mt-4 lg:bg-cover bg-no-repeat w-full md:max-w-lg md:m-auto  h-[610px] rounded-lg bg-[url('./assets/ContactCard.png')] p-6">
          <div className="space-y-16">
            <div>
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <p className="text-gray-400">
                Say something to start a live chat!
              </p>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-6 mb-4">
                  <i className="fas fa-phone text-xl"></i>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1012 3456 789"
                    id="phone"
                    className="bg-gray-900 text-white p-2 w-full rounded-md"
                  />
                </div>

                <div className="flex items-center gap-6 mb-6">
                  <i className="fas fa-envelope text-xl"></i>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="discovaa@gmail.com"
                    id="email"
                    className="bg-gray-900 text-white p-2 w-full rounded-md"
                  />
                </div>
              </form>
            </div>

            <div className="bg-gray-900 p-5 rounded-md ">
              <h2 className="text-lg font-semibold mb-6">
                Join Our NewsLetter
              </h2>

              <form onSubmit={handleSubmitEmail}>
                <input
                  type="email"
                  value={emailText}
                  onChange={handleEmailChange}
                  placeholder="Your email address"
                  className="bg-gray-900 text-white p-2 w-full rounded-md mb-4"
                />

                <button
                  type="submit"
                  className="bg-black text-white p-2 w-full rounded-md"
                >
                  Subscribe
                </button>
                <p className="text-gray-500 text-sm mt-3">
                  * Will send you weekly updates for your better tool
                  management.
                </p>
              </form>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-6">
            <i className="fab fa-twitter bg-gray-900 p-1 rounded-full text-lg"></i>
            <i className="fab fa-instagram bg-white text-black p-1 rounded-full text-lg"></i>
            <i className="fab fa-facebook bg-gray-900 p-1 rounded-full text-lg"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
