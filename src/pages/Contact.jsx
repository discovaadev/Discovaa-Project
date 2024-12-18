
import { useState } from "react";
import PhotoImg from "../assets/PhotoImg.png";
import LetterSend from "../assets/letter_send.png";
import Footer from '../components/footer.jsx';
import  Header from '../components/Header.jsx';
import BlackLogo from '../assets/BlackLogo.png'


export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName.trim())
      formErrors.firstName = "First name is required";
    if (!formData.lastName.trim())
      formErrors.lastName = "Last name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Valid email is required";
    if (
      !formData.phoneNumber.trim() ||
      !/^\d{10,15}$/.test(formData.phoneNumber)
    )
      formErrors.phoneNumber = "Valid phone number is required";

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="flex flex-col w-full">
      <Header
      logoSrc={BlackLogo}
       showSearch = {false} 
       showProfile={false} 
       bgColor = "bg-transparent"
       linkColor="text-black"
       fontSize = "font-normal"
       showIcons = {false}
      customLinks={[
        { href: "/", label: "Home" },
        { href: "/pricing", label: "Pricing" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" }
      ]}
      
      
      />
      <div className="text-center pt-12  h-full">
        <h2 className="font-bold text-3xl">Contact Us</h2>
        <p className="text-gray-500 mt-5 text-lg">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className="flex justify-around bg-white w-[1196px]  rounded-md mx-auto shadow-lg p-8">
        <div className="w-full max-w-xs">
          <img src={PhotoImg} alt="Contact" className="w-full h-auto" />
        </div>
        <div className="w-3/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-6">
              <div className="flex flex-col w-1/2">
                <label className="text-gray-500 text-sm mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="p-2 border-b-2 border-gray-300 focus:border-black focus:outline-none"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-xs">{errors.firstName}</span>
                )}
              </div>

              <div className="flex flex-col w-1/2">
                <label className="text-gray-500 text-sm mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className="p-2 border-b-2 border-gray-300 focus:border-black focus:outline-none"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-xs">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col w-1/2">
                <label className="text-gray-500 text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@email.com"
                  className="p-2 border-b-2 border-gray-300 focus:border-black focus:outline-none"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">{errors.email}</span>
                )}
              </div>

              <div className="flex flex-col w-1/2">
                <label className="text-gray-500 text-sm mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+1 012 3456 789"
                  className="p-2 border-b-2 border-gray-300 focus:border-black focus:outline-none"
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-xs">{errors.phoneNumber}</span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-gray-500 font-semibold mb-2">Select Subject</label>
              <div className="flex gap-6">
                <label className="text-sm flex items-center">
                  <input
                    type="radio"
                    name="subject"
                    value="General Inquiry"
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  General Inquiry
                </label>
                <label className="text-sm flex items-center">
                  <input
                    type="radio"
                    name="subject"
                    value="Feedback"
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Feedback
                </label>
                <label className="text-sm flex items-center">
                  <input
                    type="radio"
                    name="subject"
                    value="Support"
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Support
                </label>
                <label className="text-sm flex items-center">
                  <input
                    type="radio"
                    name="subject"
                    value="Others"
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Others
                </label>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message..."
                className="p-2 border-b-2 border-gray-300 focus:border-black focus:outline-none h-32"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md mt-8 hover:bg-gray-800 transition duration-300 w-[190px] absolute right-[280px]"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6">
            <img src={LetterSend} alt="letter-send" className="w-60 mx-auto" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
