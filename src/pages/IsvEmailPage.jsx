import Header from "../components/Header.jsx";
import EmailConfirmation from "../components/EmailConfirmation";
import Footer from "../components/footer.jsx";

const IsvEmailPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
       bgColor=""
        logoSrc={false}
        showBackButton={true}
        stepText="STEP 02/03"
        onBackClick={() => console.log("Back clicked")}
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
      <main className=" flex-grow ">
        <EmailConfirmation />
      </main>
      <Footer />
    </div>
  );
};

export default IsvEmailPage;
