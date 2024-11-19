import Logo from "../components/logo.jsx";
import photographer from "../assets/photographer (1).png";
import worker1 from "../assets/worker1.png";
import worker2 from "../assets/worker2.png";
import Avater from "../components/Avater";
import WhiteLogo from '../assets/WhiteLogo.png'
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero bg-[url('./assets/blackBacGround.png')] bg-cover bg-center bg-no-repeat h-screen max-h-[700px] relative">
      <div className="hero-wrapper flex flex-col items-center w-full relative">
        <header className="header w-full flex justify-between items-center px-16 py-6 absolute top-0 left-0 z-10">
          <div className="left-nav flex items-center">
            <Logo src={WhiteLogo} className='w-28' />
            <nav className="inter-hero-nav ml-10 ">
              <ul className="flex space-x-6 text-white text-xs font-thin items-center ">
                <li>
                  <Link to="/" className="font-semibold">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/">Pricing</Link>
                </li>
                <li>
                  <Link to="/subscribe">About us</Link>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="inter-auth-buttons flex items-center space-x-6">
            <Link to="/login">
              <button className="login-btn bg-black text-white border border-gray-600 px-4 py-0.5 rounded-md font-light">
                Log in
              </button>
            </Link>
            <Link to="/select">
              <button className="signup-btn bg-white text-black border border-gray-600 px-4 py-0.5 rounded-md font-light">
                Sign up
              </button>
            </Link>
          </div>
        </header>

        <div className="hero-content flex flex-col items-center justify-center mt-40">
          <div className="hero-images flex justify-between max-w-4xl w-full mx-auto mt-28">
            <img
              src={worker2}
              alt="Worker 2"
              className="hero-image shape-left w-72"
            />
            <img
              src={photographer}
              alt="Photographer"
              className="hero-image shape-center relative -top-48 z-10 w-72"
            />
            <img
              src={worker1}
              alt="Worker 1"
              className="hero-image shape-right w-72"
            />
          </div>

          <div className="hero-text text-center mt-8">
            <Avater  />
            <div className="inter-text-cont mt-[-249px] ml-3">
              <Logo src={WhiteLogo} className='w-[263px]' />
              <p className="text text-white font-extralight mt-[-27px] text-lg ">
                All expertise on one platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
