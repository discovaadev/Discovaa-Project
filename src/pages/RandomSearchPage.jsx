// RandomSearchPage.jsx
import Header from '../components/Header';
import SearchResults from '../components/SearchResult';
import Footer from '../components/footer';

export default function RandomSearchPage({searchQuery, onSearchChange }) {


  return (
    <div>
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange} 
        showSearch={true} 
        showProfile = {false}
        customLinks={[
          { href: "/", label: "Home" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" }
        ]}

       
      />
      <main className="p-4">
       <SearchResults />
      </main>
      <Footer />
    </div>
  );
}

