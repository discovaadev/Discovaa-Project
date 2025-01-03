import Footer from "../components/footer";
import Header from "../components/Header";
import LineVerification from "../components/LineVerification";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        bgColor=""
        showBackButton={true}
        logoSrc={false}
        showIcons={false}
        searchQuery={false}
        showSearch={false}
        showProfile={false}
        
      />
      <main className="flex-grow">
        <LineVerification />
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
