import Avater from "../components/Avater";
import { Link } from "react-router-dom";

export default function OnboardingSection() {
  return (
    <section className="p-4 md:bg-white w-full  flex items-center lg:p-12">
      <div className="">
        <p className="text-sm mb-1">FREE 30 TRIAL</p>
        <div>
          <h2 className="font-extrabold text-[28px] leading-tight text-gray-900 mb-1">
            The best way
          </h2>
          <h2 className="font-extrabold text-[28px] leading-tight text-gray-900 mb-1">
            to connect with
          </h2>
          <h1 className="font-bold text-[45px] text-gray-900 -mt-2">
            Artisans.
          </h1>
          <Avater translateY="-translate-y-3" marginLeft="-8px" />
          <p className="mt-[-17px] text-gray-700">
            Let’s get you started with our quick onboarding.
          </p>
        </div>
        <div className=" flex flex-col w-full sm:flex-row sm:space-x-5 mt-6">
          <Link to="/select">
            <button className=" bg-black  sm:bg-black text-white px-5 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition w-full">
              Sign up
            </button>
          </Link>
          <Link to="/subscribe">
            <span className="w-full block sm:hidden border border-black text-black px-5 py-3 rounded-md font-medium text-[12px] flex items-center justify-evenly hover:bg-gray-100 transition">
              <span className="translate-x-8">Already have an account?</span>
              <a
                href="#"
                className="text-blue-600 underline-none hover:text-blue-800 "
              >
                Sign in
              </a>
            </span>
            <button className="w-full hidden sm:block border border-black text-black px-5 py-3 rounded-md font-medium text-sm flex items-center hover:bg-gray-100 transition ">
              See how it works
              <i className="material-icons ml-2 text-[13px]">arrow_forward</i>
            </button>
          </Link>
        </div>
        <div className="hidden md:block lg:hidden">
            <h1 className="font-bold text-[45px] text-gray-900 -mt-2">
              Artisans.
            </h1>
            <Avater translateY="-translate-y-3" marginLeft="-8px" />
            <p className="mt-[-17px] text-gray-700">
              Let’s get you started with our quick onboarding.
            </p>
         
          <div className=" flex flex-col w-full sm:flex-row sm:space-x-5 mt-6">
            <Link to="/select">
              <button className=" bg-black  sm:bg-black text-white px-5 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition w-full">
                Sign up
              </button>
            </Link>
            <Link to="/subscribe">
              <span className="w-full block sm:hidden border border-black text-black px-5 py-3 rounded-md font-medium text-[12px] flex items-center justify-evenly hover:bg-gray-100 transition">
                <span className="translate-x-8">Already have an account?</span>
                <a
                  href="#"
                  className="text-blue-600 underline-none hover:text-blue-800 "
                >
                  Sign in
                </a>
              </span>
              <button className="w-full hidden sm:block border border-black text-black px-5 py-3 rounded-md font-medium text-sm flex items-center hover:bg-gray-100 transition ">
                See how it works
                <i className="material-icons ml-2 text-[13px]">arrow_forward</i>
              </button>
            </Link>
          </div>
          </div>
      </div>
    </section>
  );
}
