import Header from "../components/Header";
import PersonalInfo from "../components/PersonalInfo";

const BspProfilePersonalinfo = ({
  searchQuery,
  onSearchChange,
  profilePic,
  onProfileImageChange,
  onToggleChat,
}) => {
    const showBusinessRegNumber = true;
    


    const bspFormData = {
        name: "Chris Metu",
        gender: "Male",
        country: { code: "ee", name: "Estonia" },
        timeZone: "Europe/Estonia",
        phoneNumber: "+37255123456",
        pronouns: "N/A",
        languagesSpoken: "English",
        serviceoffered: "Plumbing Services", 
      };
  return (
    <section>
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        linkColor="text-white"
        showSearch={true}
        showProfile={true}
        customLinks={[
          { href: "/", label: "Home" },
          { href: "/userdashboard", label: "Dashboard" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        onProfileImageChange={onProfileImageChange}
        profilePic={profilePic }
        onToggleChat={onToggleChat}
      />
      <main>
        <PersonalInfo
          onProfileImageChange={onProfileImageChange}
          profilePic={profilePic }
          showBusinessRegNumber={showBusinessRegNumber}
          showServiceOffered={true}
          formData={bspFormData}
        />
      </main>
    </section>
  );
};

export default BspProfilePersonalinfo;
