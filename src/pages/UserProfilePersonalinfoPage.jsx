import Header from "../components/Header";
import PersonalInfo from "../components/PersonalInfo";

const UserProfilePersonalinfoPage = ({
  searchQuery,
  onSearchChange,
  profilePic,
  onProfileImageChange,
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
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        onProfileImageChange={onProfileImageChange}
        profilePic={profilePic }
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