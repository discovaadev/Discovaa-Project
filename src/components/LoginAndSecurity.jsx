import { useState } from "react";

const LoginAndSecurity = () => {
  const [email, setEmail] = useState("chrismetu012345@gmail.com");
  const [password, setPassword] = useState("********");
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState("");

  const handleEmailChange = () => {
    setEmail(newEmail);
    setIsEditingEmail(false);
  };

  const handlePasswordChange = () => {
    if (newPassword.trim()) {
      setPassword("*".repeat(newPassword.length));
      setIsEditingPassword(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mt-6 space-y-6">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-gray-800 font-medium">Email</div>
              {isEditingEmail ? (
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 mt-1"
                />
              ) : (
                <div className="text-gray-600 mt-1">{email}</div>
              )}
            </div>
            <button
              onClick={() =>
                isEditingEmail ? handleEmailChange() : setIsEditingEmail(true)
              }
              className={`border rounded-full px-4 py-1 transition ${
                isEditingEmail
                  ? "bg-gray-500 text-white border-gray-500"
                  : "text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white"
              }`}
            >
              {isEditingEmail ? "Save" : "Request Email Change"}
            </button>
          </div>
        </div>
        <div className="border border-gray-300 w-full"></div>      
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-gray-800 font-medium">Password</div>
              {isEditingPassword ? (
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 mt-1"
                  placeholder="Enter new password"
                />
              ) : (
                <div className="text-gray-600 mt-1">{password}</div>
              )}
            </div>
            <button
              onClick={() =>
                isEditingPassword
                  ? handlePasswordChange()
                  : setIsEditingPassword(true)
              }
              className={`border rounded-full px-4 py-1 transition ${
                isEditingPassword
                  ? "bg-gray-500 text-white border-gray-500"
                  : "text-gray border-gray-500 hover:bg-gray-500 hover:text-white "
              }`}
            >
              {isEditingPassword ? "Save" : "Update"}
            </button>
          </div>
        </div>
        <div className="border border-gray-300 w-full"></div>  
        <div className="text-gray-800 font-medium cursor-pointer hover:underline">
          Delete your account
        </div>
      </div>
    </div>
  );
};

export default LoginAndSecurity;
