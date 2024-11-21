import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Footer from "../components/footer";

const UserDashboard = ({searchQuery, onSearchChange, profilePic, onProfileImageChange, onToggleChat}) => {
    return(
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
          profilePic={profilePic}
          onToggleChat={onToggleChat}
        />
        <main>
          <Dashboard showBusinessVerification={false} profilePic={profilePic} onProfileImageChange={onProfileImageChange}/>
        </main>
  
        <Footer />
      </div>
    )

}

export default UserDashboard;