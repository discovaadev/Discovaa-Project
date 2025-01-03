import Header from "../components/Header.jsx";
import EmailConfirmation from "../components/EmailConfirmation";
import Footer from "../components/footer.jsx";

const BusinessEmailPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        bgColor=""
        logoSrc={false}
        showBackButton={true}
        stepText="STEP 02/03"
        searchQuery={""}
        showProfile={false}
        showSignInText={false}
        customLinks={[]}
        showSearch={false}
        showIcons={false}
        showBackButtonAndStepText={true}
        pageTitle="Check your Mail"
        showPageTitle={true}
      />
      <main className=" flex-grow">
        <EmailConfirmation />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessEmailPage;
