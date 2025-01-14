import { useState } from "react";
import DocImg from "../assets/DocImg.png";
import SuccessModal from "../components/SuccessModal.jsx";

export default function DocumentUploadModal({ onClose }) {
  const [currentTab, setCurrentTab] = useState("front");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadedFront, setUploadedFront] = useState(false);
  const [uploadedBack, setUploadedBack] = useState(false);

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

    if (currentTab === "front") {
      setUploadedFront(true); 
      setCurrentTab("back"); 
    } else if (currentTab === "back") {
      setUploadedBack(true); 
    }
  };

  const closeSuccessModal = () => {
    if (uploadedFront && uploadedBack) {
      setShowSuccessModal(false);
      onClose(); 
    }
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handleNextStep = () => {
    setCurrentTab("back");
    setShowSuccessModal(false); 
  };

  return (
    <>
      {showSuccessModal && (
        <SuccessModal
          message={successMessage}
          messageStyle="w-36 font-bold text-black ml-24 mt-4"
          onClose={closeSuccessModal}
          onNext = {handleNextStep}
        />
      )}
      {!showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 ">
          <div className="bg-white  md:bg-white p-5 w-[900px] h-[570px] rounded-lg text-center relative md:w-[700px]">
            <div className="flex flex-col space-y-3 md:flex-row justify-evenly mb-10 relative">
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
                className={`absolute w-full bottom-[54px] h-[0.1px]  md:w-1/2 bg-black transition-all duration-300 md:-bottom-6 ${
                  currentTab === "back" ? "md:left-1/2" : "md:left-[40px]"
                }`}
              ></div>
            </div>

            <div className="m-auto md:w-[700px] h-[280px] border border-dotted border-gray-300 flex flex-col items-center p-4 mx-auto">
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
                className="text-xs ml-4"
              />
              <button
                onClick={handleUploadClick}
                className="mt-2 px-6 py-1 bg-gray-800 text-white rounded"
              >
                Upload document
              </button>
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
            </div>
            <div className="flex flex-col items-center mt-6">
              <label className="text-sm">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-400 mt-1">
                  I confirm document is valid until the expiry date and is in
                  color
                </span>
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
