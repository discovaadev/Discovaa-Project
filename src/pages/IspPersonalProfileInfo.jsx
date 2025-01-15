import Header from "../components/Header";
import PersonalInfo from "../components/PersonalInfo";

const IspProfilePersonalinfo = ({
  searchQuery,
  onSearchChange,
  profilePic,
  onProfileImageChange,
  onToggleChat,
}) => {
    const showServiceOffered = true;
  return (
    <section>
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        linkColor="text-white"
        showSearch={true}
        showProfile={true}
        customLinks={[
          { href: "/homepage", label: "Home" },
          { href: "/userdashboard", label: "Dashboard" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        onProfileImageChange={onProfileImageChange}
        profilePic={profilePic }
        onToggleChat={onToggleChat}
        showProfilePic = {true}
      />
      <main>
        <PersonalInfo
          onProfileImageChange={onProfileImageChange}
          profilePic={profilePic }
          showServiceOffered={showServiceOffered}
        />
      </main>
    </section>
  );
};

export default IspProfilePersonalinfo;
