// RandomSearchPage.jsx
import Header from '../components/Header';
import SearchResults from '../components/SearchResult';
import Footer from '../components/footer';

export default function RandomSearchPage({searchQuery, onSearchChange, onProfileImageChange, profilePic }) {


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
       isMenuOpen={true}
       enableTabletHeader = {true}
       onProfileImageChange={onProfileImageChange}
       profilePic={profilePic}
      />
      <main className="p-4">
       <SearchResults />
      </main>
      <Footer />
    </div>
  );
}

