
import Header from "../components/Header";
import Dashboard from '../components/Dashboard';
import Footer from '../components/footer';
const BuisnessDashboardPage = ({searchQuery, onSearchChange, profilePic, onProfileImageChange, onToggleChat }) => {
  return (
    <div>
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        linkColor="text-white"
        showSearch={true}
        showProfile={true}
        customLinks={[
          { href: "/homepage", label: "Home" },
          { href: "/bspdashboard", label: "Dashboard" },
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
        enableTabletHeader = {true}
      />
      <main>
        <Dashboard showBusinessVerification={true} profilePic={profilePic} onProfileImageChange={onProfileImageChange}/>
      </main>

      <Footer />
    </div>
  );
};

export default BuisnessDashboardPage;
