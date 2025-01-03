import { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import LockIcon from "../assets/lock-Icon.png";
import LikeIcon from "../assets/Like-Icon.png";
import { useNavigate } from "react-router-dom";

export default function NewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    
    const newErrors = {};
    if (!newPassword) {
      newErrors.newPassword = "New Password is required";
    } else if (newPassword.length <= 6) {
      newErrors.newPassword = "Password must be longer than 6 characters";
    }
    if (!confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Passwords are valid");
      setModalVisible(true);

 
      setTimeout(() => {
        navigate("/homepage");
      }, 3000);
    } else {
      setErrors(validationErrors);
    }
  };

  

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="p-6 md:flex flex-row items-center justify-center ">
      <div className="">
        <div className="">
          <h2 className="text-2xl font-bold ">Reset Your Password</h2>
          <p className="text-gray-400 text-sm">Please enter your new password</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4 lg:max-w-[400px] ">
          <div>
            <label className="block font-bold text-sm mb-1">New Password:</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full py-2 pl-10 pr-10 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <div
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.newPassword && (
              <span className="text-red-500 text-xs">{errors.newPassword}</span>
            )}
          </div>

          <div>
            <label className="block font-bold text-sm mb-1">Confirm Password:</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full py-2 pl-10 pr-10 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <div
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.confirmPassword && (
              <span className="text-red-500 text-xs">{errors.confirmPassword}</span>
            )}
          </div>

          <p className="text-gray-400 text-sm -mt-4">
            *NOTE: Choose a password that is distinctive & you can easily remember
          </p>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>

      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg text-center w-[400px] p-10 relative">
            <span
              className="absolute top-4 right-4 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <div className="mb-6">
              <img src={LockIcon} alt="Key Icon" className="w-24 h-24 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold">Reset Password Successful!</h2>
            <p className="text-gray-400 mt-4">Please wait...</p>
            <p className="text-gray-400">You will be directed to the homepage soon.</p>
            <div className="mt-6 ">
              <img src={LikeIcon} alt="Like Icon" className="w-28 h-28 ml-20" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
