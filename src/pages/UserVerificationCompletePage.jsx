import Header from "../components/Header";
import VerificationComplete from '../components/VerificationComplete';
import Footer from '../components/footer';

const UserVerificationCompletePage = ({searchQuery, onSearchChange, onProfileImageChange, profilePic}) => {
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
        profilePic={profilePic || "../assets/HeaderProfileImg (2).png"}
      />
      <main>
        <VerificationComplete showBusinessVerification={false}/>
      </main>
      <Footer />
    </div>
  );
};

export default UserVerificationCompletePage;
