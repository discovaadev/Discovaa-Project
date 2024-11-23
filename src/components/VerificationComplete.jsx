import CalenderImg from "../assets/CalenderImg.png";

import CompleteIconImg from "../assets/CompleteIconImg.png";

export default function VerificationComplete({profilePic, showBusinessVerification }) {
  return (
    <div className="flex gap-5 px-20 py-5 h-screen justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-5 mb-5">
          <img
            src={profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold">Welcome, Christopher!</h2>
            <p className="text-gray-500 max-w-sm">
              Professionals are more likely to trust and work with someone they
              can see. Add a profile photo to increase your chances of getting
              replies.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Latest Bookings</h3>
            <button
              className="text-[#37474F] font-medium"
            >
              Show all
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="w-125 h-[125px]   p-2 border border-gray-300 rounded-lg shadow-md text-gray-800"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-xl font-semibold">Account Verification Status</h3>
          <div className="flex flex-col items-center mt-4 gap-4">
            <div className="flex items-center gap-3 mb-6 mr-24">
              <img
                src={CompleteIconImg}
                alt="complete-icon"
                className="w-6 h-6"
              />
              <div>
                <label className="font-semibold text-sm">ID Verification</label>
                <p className="text-gray-500 text-sm">
                  Passport, EU Nationality Identity Card
                </p>
              </div>
            </div>
            {showBusinessVerification && (
              <div className="flex items-center gap-3">
                <img
                  src={CompleteIconImg}
                  alt="complete-icon"
                  className="w-6 h-6"
                />
                <div>
                  <label className="font-semibold text-sm">
                    Business Verification
                  </label>
                  <p className="text-gray-500 text-sm">
                    Passport, EU Nationality Identity Card
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-28">
          <h3 className="text-xl font-semibold mb-3">Appointments</h3>
          <div className="flex items-center gap-3 mb-5">
            <img src={CalenderImg} alt="calendar" className="w-12 h-auto" />
            <h4 className="w-[250px] text-gray-700">
              All appointments with artisans will appear here
            </h4>
          </div>
          <div className="w-125 h-80 p-4 shadow-lg rounded-lg bg-gray-50 text-gray-500">
            There are no appointments yet.
          </div>
        </div>
      </div>
    </div>
  );
}
