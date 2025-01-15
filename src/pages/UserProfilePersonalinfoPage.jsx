import Header from "../components/Header";
import PersonalInfo from "../components/PersonalInfo";

const UserProfilePersonalinfoPage = ({
  searchQuery,
  onSearchChange,
  profilePic,
  onProfileImageChange,
  onToggleNotification,
  onToggleChat
}) => {
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
        onToggleNotification ={onToggleNotification}
        showMobileLogo = {true}
        showSearchButton = {true}
        showDesktopIcons = {true}
        showMenuIcon = {true}
        tabletMenuEnabled={true}
        isMenuOpen={true}
        showProfilePic = {true}
        enableTabletHeader ={true}
      />
      <main>
        <PersonalInfo
          onProfileImageChange={onProfileImageChange}
          profilePic={profilePic }
        />
      </main>
    </section>
  );
};

export default UserProfilePersonalinfoPage;
