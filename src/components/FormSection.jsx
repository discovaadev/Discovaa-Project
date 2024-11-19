import { useState } from "react";
import GoogleImg from "../assets/googleImg.png";
import { Link } from "react-router-dom";

export default function FormSection({
  imageSrc,
  description = "Business Service Provider!",
  descriptionStyle = "font-bold text-xl",
}) {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullname) newErrors.fullname = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="flex justify-evenly p-8 mr-12">
      <div className="max-w-md">
        <img src={imageSrc} alt="photo-img" className="w-full" />
      </div>
      <div className="max-w-md">
        <div className="mb-8">
          <p className="mb-2 text-gray-500">Personal info.</p>
          <h2 className={`${descriptionStyle}`}>{description}</h2>
          <p className="mt-2 text-gray-400 text-sm w-80">
            For the purpose of industry regulation, your details are required.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullname"
              className="block mb-1 font-medium text-sm text-gray-600"
            >
              Your Full Name*
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Invictus Innocent"
              value={formData.fullname}
              onChange={handleInputChange}
              className="w-full p-2 border-2 border-gray-300 rounded-md placeholder:text-xs focus:outline-none focus:border-blue-500"
            />
            {errors.fullname && (
              <p className="text-red-500 text-[9px]">{errors.fullname}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-sm text-gray-600"
            >
              Email address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border-2 border-gray-300 rounded-md placeholder:text-xs focus:outline-none focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-[9px]">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-sm text-gray-600"
            >
              Create password*
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-2 border-2 border-gray-300 rounded-md placeholder:text-xs focus:outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 text-sm font-light text-blue-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-[9px]">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-0"
            />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              I agree to terms & conditions
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>
          )}
          <Link to="/isvemail">
            <button
              type="submit"
              className="w-full py-2 text-white bg-black rounded-md hover:bg-gray-800"
            >
              Register Account
            </button>
          </Link>
        </form>

        <div className="my-6 text-center text-gray-500">or</div>

        <button className="flex items-center justify-center w-full py-2 border rounded-md bg-white text-black shadow hover:bg-gray-100">
          <img src={GoogleImg} alt="google-img" className="w-4 h-4 mr-2" />
          Register with Google
        </button>
      </div>
    </div>
  );
}
