
import Header from "../components/Header";
import Dashboard from '../components/Dashboard';
import Footer from '../components/footer';
const IsvDashboard = ({ searchQuery, onSearchChange, profilePic, onProfileImageChange, onToggleChat}) => {
  return (
    <div>
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        linkColor="text-white"
        showSearch={true}
        showProfile={true}
        customLinks={[
          { href: "/", label: "Home" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        onProfileImageChange={onProfileImageChange}
        profilePic={profilePic || '../assets/HeaderProfileImg (2).png'}
        onToggleChat={onToggleChat}
      />
      <main>
        <Dashboard showBusinessVerification={true} profilePic={profilePic} onProfileImageChange={onProfileImageChange}/>
      </main>

      <Footer />
    </div>
  );
};

export default IsvDashboard;
