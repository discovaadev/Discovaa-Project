import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Footer from "../components/footer";

const UserDashboard = ({
  searchQuery,
  onSearchChange,
  profilePic,
  onProfileImageChange,
  onToggleChat,
  onToggleNotification
}) => {
  return (
    <div>
      <Header
        bgColor="bg-black"
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        linkColor="text-white"
        showSearch={true}
        showProfile={true}
        customLinks={[
          { href: "/homepage", label: "Home" },
          { href: "/dashboard", label: "Dashboard" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        onProfileImageChange={onProfileImageChange}
        profilePic={profilePic}
        onToggleChat={onToggleChat}
        showMobileLogo = {true}
        showSearchButton = {true}
        showDesktopIcons = {true}
        showMenuIcon = {true}
        tabletMenuEnabled={true}
        isMenuOpen={true}
        enableTabletHeader = {true}
        showProfilePic = {true}
        onToggleNotification={onToggleNotification}
      />
      <main>
        <Dashboard
          showBusinessVerification={false}
          profilePic={profilePic}
          onProfileImageChange={onProfileImageChange}
        />
      </main>

      <Footer />
    </div>
  );
};

export default UserDashboard;
