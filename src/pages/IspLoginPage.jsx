import { useState } from "react";
import LoginImg from "../components/LoginImgSection";
import GoogleImg from "../assets/googleImg.png";
import Header from "../components/Header";
import Footer from "../components/footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BlackLogo from "../assets/BlackLogo.png";
import { Link } from "react-router-dom";
import photographer from "../assets/photographer (1).png";
import worker1 from "../assets/worker1.png";
import worker2 from "../assets/worker2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
};

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: updatedValue,
    });

    validateField(name, updatedValue);
  };

  const validate = () => {
    const formErrors = {};

    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      formErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
    }

    if (!formData.agreeToTerms) {
      formErrors.agreeToTerms = "You must agree to the terms.";
    }

    setErrors(formErrors);
    return formErrors;
  };

  const validateField = (name, value) => {
    const fieldErrors = { ...errors };

    if (name === "email") {
      if (!value) {
        fieldErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        fieldErrors.email = "Please enter a valid email address.";
      } else {
        delete fieldErrors.email;
      }
    }

    if (name === "password") {
      if (!value) {
        fieldErrors.password = "Password is required.";
      } else if (value.length < 6) {
        fieldErrors.password = "Password must be at least 6 characters.";
      } else {
        delete fieldErrors.password;
      }
    }

    setErrors(fieldErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted Successfully", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="flex flex-col ">
      <Header
        bgColor=""
        logoSrc={BlackLogo}
        showBackButton={false}
        stepText=""
        onBackClick={() => console.log("Back clicked")}
        searchQuery={""}
        showProfile={false}
        showSignInText={false}
        customLinks={[
          { href: "/homepage", label: "Home" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        showSearch={false}
        showIcons={false}
        showSignInSignUp={true}
        showSignUpText={true}
        showMobileLogo={true}
        pageTitle="Welcome"
        showPageTitle={true}
        isLoginPage={true}
        showMenuIcon={true}
      />
      <div className="flex flex-col lg:flex-row ">
        <LoginImg />
        <div>
          <div className=" overflow-hidden w-full md:hidden  mt-12 ">
            <Slider {...settings}>
              <div className="">
                <img
                  src={worker2}
                  alt="Worker 2"
                  className="w-[300px] object-cover m-auto"
                />
              </div>
              <div>
                <img
                  src={photographer}
                  alt="Photographer"
                  className="w-[300px] h-full object-cover m-auto"
                />
              </div>
              <div>
                <img
                  src={worker1}
                  alt="Worker 1"
                  className="w-[300px] h-full object-cover m-auto"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="mt-0 -translate-y-16 p-4 md:flex flex-col max-w-sm mt-12 md:translate-y-0 md:pl-0 m-auto mt-24 lg:ml-6">
          <div className="hidden md:block ">
            <h2 className="text-2xl font-semibold">Welcome</h2>
            <p className="text-gray-600 mb-4">Login to continue</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <div className="relative">
                <span
                  className="material-symbols-outlined text-gray-500 absolute left-3 top-4 text-lg pointer-events-none"
                  style={{ lineHeight: "1" }}
                >
                  mail
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full max-w-md m-auto md:w-[400px] pl-12 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 lg:w-full"
                />

                <div className="h-4">
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm mb-2">
                Password
              </label>
              <div className="relative">
                <span
                  className="material-symbols-outlined text-gray-500 absolute left-3 top-4 text-lg pointer-events-none"
                  style={{ lineHeight: "1" }}
                >
                  lock
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full md:w-[400px] pl-12 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 lg:w-full"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-4 text-sm"
                >
                  {showPassword ? (
                    <i className="fas fa-eye-slash"></i>
                  ) : (
                    <i className="fas fa-eye"></i>
                  )}
                </button>

                <div className="h-4">
                  {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6 text-xs ">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="text-blue-500"
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <p className="text-blue-500 cursor-pointer ">
                <a href="#/">Forgot Password?</a>
              </p>
            </div>
            <Link to="/isvDashboard">
              <button
                type="submit"
                className="w-full py-2 bg-black text-white rounded-md mb-4 hover:bg-gray-800"
              >
                Login
              </button>
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <p className="border-t border-gray-500 border-1 w-[120px]"></p>
              <p className="text-center text-sm ">Or continue with</p>
              <p className="border-t border-gray-500 border-1 w-[120px]"></p>
            </div>
            <button className="flex items-center justify-center w-full py-2 bg-white border border-gray-300 rounded-md shadow-sm gap-3 hover:bg-gray-100">
              <img src={GoogleImg} alt="google-img" className="w-4 h-4" />
              Google
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default LoginForm;
