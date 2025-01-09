import Header from "../components/Header";
import PersonalInfo from "../components/PersonalInfo";

const UserProfilePersonalinfoPage = ({
  searchQuery,
  onSearchChange,
  profilePic,
  onProfileImageChange,
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
          { href: "/", label: "Home" },
          { href: "/userdashboard", label: "Dashboard" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        onProfileImageChange={onProfileImageChange}
        profilePic={profilePic }
        onToggleChat={onToggleChat}
        showMobileLogo = {true}
        showSearchButton = {true}
        showDesktopIcons = {true}
        showMenuIcon = {true}
        tabletMenuEnabled={true}
        isMenuOpen={true}
        enableTabletHeader ={false}
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
