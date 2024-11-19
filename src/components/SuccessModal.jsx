import SuccessImg from "../assets/SuccessImg.png";
import SuccessVector from "../assets/SuccessVector.png";

export default function SuccessModal({ message, onClose, messageStyle='text-gray-800 text-lg mb-6' }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-5 rounded-lg text-center w-96 h-[500px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex justify-center">
          <img src={SuccessImg} alt="Upload Successful" className="w-36 mt-12" />
          <img
            src={SuccessVector}
            alt="Upload Successful"
            className="absolute right-2 left-[143px] w-16 mt-20"
          />
        </div>
        <p className={`${messageStyle}`}>{message}</p>
        <button
          className="bg-black text-white py-1 px-6 rounded hover:bg-gray-700 mt-7"
          onClick={onClose}
        >
          Next
        </button>
      </div>
    </div>
  );
}
