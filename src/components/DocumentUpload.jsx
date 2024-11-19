import { useState } from "react";
import DocImg from "../assets/DocImg.png";
import SuccessModal from "../components/SuccessModal.jsx";

export default function DocumentUploadModal({ onClose }) {
  const [currentTab, setCurrentTab] = useState("front");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setErrorMessage("");
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      setErrorMessage("Please upload a file before proceeding.");
      return;
    }
    const message =
      currentTab === "front"
        ? "Front page upload successful!"
        : "Back page upload successful!";
    setSuccessMessage(message);
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    onClose();
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <>
      {showSuccessModal && (
        <SuccessModal message={successMessage} messageStyle="w-36 font-bold text-black ml-24 mt-4" onClose={closeSuccessModal} />
      )}
      {!showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-5 w-[900px] h-[570px] rounded-lg text-center relative">
            <div className="flex justify-evenly mb-10 relative">
              <button
                className={`flex items-center font-bold ${
                  currentTab === "front" ? "text-black" : "text-gray-500"
                }`}
                onClick={() => handleTabChange("front")}
              >
                <span className="flex justify-center items-center w-12 h-12 border border-dotted border-black rounded-full mr-2 text-sm">
                  1
                </span>
                Upload document front page
              </button>
              <button
                className={`flex items-center font-bold ${
                  currentTab === "back" ? "text-black" : "text-gray-500"
                }`}
                onClick={() => handleTabChange("back")}
              >
                <span className="flex justify-center items-center w-12 h-12 border border-dotted border-black rounded-full mr-2 text-sm">
                  2
                </span>
                Upload document back page
              </button>
              <div
                className={`absolute bottom-[-8px] h-[0.8px] w-1/2 bg-black transition-all duration-300 ${
                  currentTab === "back" ? "left-1/2" : "left-[90px]"
                }`}
              ></div>
            </div>

            <div className="w-[700px] h-[280px] border border-dotted border-gray-300 flex flex-col items-center p-4 mx-auto">
              <img src={DocImg} alt="Document-img" className="w-12" />
              <p className="mt-4 font-semibold text-black text-base">
                {currentTab === "front"
                  ? "Please upload a copy of your document's front page."
                  : "Please upload a copy of your document's back page."}
              </p>
              <p className="text-gray-500 text-base mb-2 w-64 text-center">
                Please upload a valid document in PNG, JPEG, or PDF format, no
                larger than 3MB in size.
              </p>
              <input
                type="file"
                accept="image/png, image/jpeg, application/pdf"
                onChange={handleFileChange}
                className="text-xs"
              />
              <button
                onClick={handleUploadClick}
                className="mt-6 px-6 py-1 bg-gray-800 text-white rounded"
              >
                Upload document
              </button>
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
            </div>
            <div className="flex flex-col items-center mt-6">
              <label className="text-sm flex mr-60 space-x-2">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-400 mt-1">I confirm document is valid until the expiry date and is in color</span>
              </label>
              <button
                className="absolute top-2 right-2 bg-transparent border-2 border-black rounded-full p-1 text-xs"
                onClick={onClose}
              >
                ✖
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
