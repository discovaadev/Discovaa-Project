import { useEffect, useState } from "react";
import CalenderImg from "../assets/CalenderImg.png";

import DocumentUploadModal from "./DocumentUpload.jsx";

export default function Dashboard({  profilePic,  onProfileImageChange, showBusinessVerification  }) {
  const [latestBookings, setLatestBookings] = useState([]);
  const [verificationStatus, setVerificationStatus] = useState(false);
  const [appointments, setAppointments] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  useEffect(() => {
    setLatestBookings([
      { id: 1, title: "Booking 1" },
      { id: 2, title: "Booking 2" },
      { id: 3, title: "Booking 3" }
    ]);

    setAppointments([
      "Appointment A",
    ]);
  }, []);

  const handleShowAllBookings = () => {
    alert("Showing all bookings...");
  };

  const handleVerificationToggle = () => {
    setVerificationStatus((status) => !status);
  };

  const handleUploadClick = () => {
    setIsModalOpen(true);
  };

  const handleFileChange = (event) => {
    console.log("File change event triggered");
    const file = event.target.files[0];
    console.log(file)
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        
        onProfileImageChange(reader.result); 
        console.log("Image data URL:", reader.result); 
      };
      reader.readAsDataURL(file);
    }else {
      console.error('onProfileImageChange is not a function');
    }
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex gap-5 h-screen p-10 justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5 mb-5">
          <img
            src={profilePic}
            alt="Profile"
            className="w-[150px] h-[150px] rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">Welcome, Christopher!</h2>
            <p className="text-gray-600 w-[340px] mt-2">
              Professionals are more likely to trust and work with someone they
              can see. Add a profile photo to increase your chances of getting
              replies.
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-2"
            />
          </div>
        </div>

        <div className="mt-20">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Latest Bookings</h3>
            <button
              onClick={handleShowAllBookings}
              className="text-gray-700 text-lg cursor-pointer"
            >
              Show all
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            {latestBookings.length > 0 ? (
              latestBookings.map((booking, index) => (
                <div
                  key={index}
                  className="w-[500px] h-[100px] p-3 border rounded shadow-md text-gray-700"
                >
                  <p>{booking.title}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-700">No bookings available.</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="mb-5">
          <h3 className="text-xl font-semibold ml-3">Account Verification Status</h3>
          <div className="flex flex-col gap-5 mt-3 ml-3">
            <div className="flex items-center gap-5">
              <input
                type="radio"
                id="id-verification"
                name="verification"
                checked={verificationStatus}
                onChange={handleVerificationToggle}
                className="w-5 h-5 border-8 border-solid  border-black rounded-full cursor-pointer"
               
              />
              <div className="flex flex-col">
                <label
                  htmlFor="id-verification"
                  className="font-bold text-sm"
                >
                  ID Verification
                </label>
                <p className="text-gray-600 ">Passport, EU Nationality Identity Card</p>
              </div>
              <button
                onClick={handleUploadClick}
                className="bg-black text-white px-4 py-2 rounded cursor-pointer"
              >
                Upload
              </button>
            </div>

            {showBusinessVerification && (
              <div className="flex items-center gap-5">
                <input
                  type="radio"
                  id="business-verification"
                  name="verification"
                  checked={verificationStatus}
                  onChange={handleVerificationToggle}
                  className="w-5 h-5 cursor-pointer border-8 border-black"
                  style={{
                    borderWidth: '8px',
                    borderStyle: 'solid',
                    borderColor: 'black'
                  }}  
                />
                <div className="flex flex-col">
                  <label
                    htmlFor="business-verification"
                    className="font-bold text-sm"
                  >
                    Business Verification
                  </label>
                  <p className="text-gray-600 ">Business Registration Certificate</p>
                </div>
                <button
                  onClick={handleUploadClick}
                  className="bg-black text-white px-4 py-2 ml-9 rounded cursor-pointer"
                >
                  Upload
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-3">Appointments</h3>
          <div className="flex items-center gap-3">
            <img
              src={CalenderImg}
              alt="Calendar"
              className="w-12 h-auto"
            />
            <h4 className="w-[250px] text-gray-700">All appointments with artisans will appear here</h4>
          </div>
          {appointments.length > 0 ? (
            <div className="flex flex-col gap-3 mt-3">
              {appointments.map((appointment, index) => (
                <div
                  key={index}
                  className="w-[500px] h-[300px] p-3 shadow-lg rounded mt-3 text-gray-700"
                >
                  {appointment}
                </div>
              ))}
            </div>
          ) : (
            <div className="w-[500px] h-[300px] shadow-lg rounded mt-3 p-3 text-center text-gray-700">
              There are no appointments yet.
            </div>
          )}
        </div>
      </div>

      {isModalOpen && <DocumentUploadModal onClose={closeModal} />}
    </div>
  );
}
