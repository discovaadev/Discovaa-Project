
import Header from "../components/Header";
import Dashboard from '../components/Dashboard';
import Footer from '../components/footer';
const IsvDashboard = ({ searchQuery, onSearchChange, profilePic, onProfileImageChange, onToggleChat}) => {
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
        profilePic={profilePic || '../assets/HeaderProfileImg (2).png'}
        onToggleChat={onToggleChat}
        showMobileLogo = {true}
        showSearchButton = {true}
        showDesktopIcons = {true}
        showMenuIcon = {true}
        tabletMenuEnabled={true}
        isMenuOpen={true}
        showProfilePic = {true}
        enableTabletHeader = {true}
      />
      <main>
        <Dashboard showBusinessVerification={true} profilePic={profilePic} onProfileImageChange={onProfileImageChange}/>
      </main>

      <Footer />
    </div>
  );
};

export default IsvDashboard;
