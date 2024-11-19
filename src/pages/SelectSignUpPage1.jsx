import BlackLogo from "../assets/BlackLogo.png";
import Footer from "../components/footer";
import Header from "../components/Header";
import JoinUsSection from "../components/JoinUsSection";

const SelectSignUpPage1 = () => {
  return (
    <div>
      <Header
        logoSrc={BlackLogo}
        customLinks={[
          { href: "/", label: "Home" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        linkColor="!text-black"
        showSignInText={true}
        showProfile = {false}
        bgColor="transparent"
        showSearch ={false}
        showIcons={false}
      />
      <main>
        <JoinUsSection />
      </main>
      <Footer />
    </div>
  );
};
export default SelectSignUpPage1;
