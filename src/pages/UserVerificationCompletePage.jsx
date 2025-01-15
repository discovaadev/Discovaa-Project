import Header from "../components/Header";
import VerificationComplete from '../components/VerificationComplete';
import Footer from '../components/footer';

const UserVerificationCompletePage = ({searchQuery, onSearchChange, onProfileImageChange, profilePic, onToggleChat, onToggleNotification}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        linkColor="text-white"
        showSearch={true}
        showProfile={true}
        customLinks={[
          { href: "/homepage", label: "Home" },
          { href: "/pricing", label: "Dashboard" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        onProfileImageChange={onProfileImageChange}
        profilePic={profilePic}
        onToggleChat={onToggleChat}
        onToggleNotification={onToggleNotification}
        showMobileLogo = {true}
        showSearchButton = {true}
        showDesktopIcons = {true}
        showMenuIcon = {true}
        tabletMenuEnabled={true}
        isMenuOpen={true}
        enableTabletHeader = {true}
      />
      <main className="flex-grow">
        <VerificationComplete showBusinessVerification={false} profilePic={profilePic}/>
      </main>
      <Footer />
    </div>
  );
};

export default UserVerificationCompletePage;
