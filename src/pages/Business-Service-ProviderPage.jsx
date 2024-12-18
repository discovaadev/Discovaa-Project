import Header from "../components/Header";
import UserDashboard from "../components/Dashboard";
import Footer from "../components/footer";

const BuisnessSerViceProviderPage = ({
  searchQuery,
  onSearchChange,
  profilePic,
  onProfileImageChange,
  onToggleChat
}) => {
  return (
    <section className="flex flex-col">
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
        profilePic={profilePic}
        onToggleChat={onToggleChat}
      />
      <UserDashboard />
      <Footer />
    </section>
  );
};

export default BuisnessSerViceProviderPage;
