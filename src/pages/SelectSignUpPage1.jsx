import BlackLogo from "../assets/BlackLogo.png";
import Footer from "../components/footer";
import Header from "../components/Header";
import JoinUsSection from "../components/JoinUsSection";
import { Link } from "react-router-dom";
const SelectSignUpPage1 = () => {
  return (
    <div className="">
      <Header
        logoSrc={BlackLogo}
        customLinks={[
          { href: "/", label: "Home" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ]}
        linkColor="text-black"
        showSignInText={true}
        showProfile={false}
        bgColor="bg-black"
        showSearch={false}
        showIcons={false}
        showAvaterNlogo={true}
        hideNavLinks={true}
      />
      <main>
        <JoinUsSection />
      </main>
      <div className="flex sm:hidden items-center justify-center mt-8 text-sm">
        <span className="text-[#8692A6]">Already have an account? </span>
        <Link to="/signin" className="text-blue-500 ml-1">
          Sign in
        </Link>
      </div>
      <Footer className="hidden lg:flex" />
    </div>
  );
};
export default SelectSignUpPage1;
