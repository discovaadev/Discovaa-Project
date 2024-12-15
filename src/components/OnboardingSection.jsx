import Avater from "../components/Avater";
import { Link } from "react-router-dom";

export default function OnboardingSection() {
  return (
    <section className="w-full h-[350px] bg-white p-16 flex items-center  ">
      <div className="">
        
        <p className="text-sm mb-1">FREE 30 TRIAL</p>
        <h2 className="font-bold text-[28px] leading-tight text-gray-900 mb-1">
          The best way <br /> to connect with
        </h2>
        <h1 className="font-bold text-[45px] text-gray-900 -mt-2">Artisans.</h1>
        <Avater translateY="-24px" marginLeft="-8px" />
        <p className="mt-[-17px] text-gray-700">
          Let’s get you started with our quick onboarding.
        </p>

        <div className=" flex flex-col sm:flex-row  sm:space-x-5 mt-6">
          <Link to="/select">
            <button className="bg-black text-white px-5 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition w-full sm:w-auto max-w-[400px]">
              Sign up
            </button>
          </Link>
          <Link to="/subscribe">
            <button className="border border-black text-black px-5 py-3 rounded-md font-medium text-sm flex items-center hover:bg-gray-100 transition w-full sm:w-auto max-w-[400px]">
              See how it works
              <i className="material-icons ml-2 text-[13px]">arrow_forward</i>
            </button> 
          </Link>
        </div>
      </div>
    </section>
  );
}
