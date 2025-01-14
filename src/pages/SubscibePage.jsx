import Header from "../components/Header.jsx";
import Footer from "../components/footer.jsx";
import Subscribe from "../components/Subscribe.jsx";
const SubscribePage = ({ searchQuery, onSearchChange, onProfileImageChange, profilePic }) => {
  return (
    <div>
      <Header
        linkColor="text-white"
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        showSearch={true}
        showProfile={false}
        showIcons={false}
        customLinks={[
          { href: "/", label: "Home" },
          { href: "/pricing", label: "Pricing" },
          { href: "/error", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        showMobileLogo = {true}
        showMenuIcon = {true}
       showSearchButton = {true}
       enableTabletHeader = {true}
       onProfileImageChange={onProfileImageChange}
       profilePic={profilePic}
      />
      <main>
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
};

export default SubscribePage;
