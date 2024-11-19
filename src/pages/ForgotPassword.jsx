import Footer from "../components/footer";
import Header from "../components/Header";
import LineVerification from "../components/LineVerification";

const ForgotPassword = () => {
  return (
    <div>
      <Header
        bgColor="bg-transparent"
        showBackButton={true}
        logoSrc={false}
        showIcons={false}
        searchQuery={false}
        showSearch={false}
        showProfile={false}
        
      />
      <main>
        <LineVerification />
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
