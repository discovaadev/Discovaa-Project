import { Link } from "react-router-dom";
export default function OnboardingButtons({
  signUpButtonStyle,
  seeHowButtonStyle,
  style,
}) {
  return (
    <div className="flex space-x-5 mt-6" style={style}>
      <Link to="/select">
        <button
          className="px-5 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition"
          style={signUpButtonStyle}
        >
          Sign up
        </button>
      </Link>
      <Link to="/select">
        <button
          className="px-5 py-3 rounded-md font-medium text-sm flex items-center hover:bg-gray-100 transition"
          style={seeHowButtonStyle}
        >
          See how it works
          <i className="material-icons ml-2 text-[13px]">arrow_forward</i>
        </button>
      </Link>
    </div>
  );
}
