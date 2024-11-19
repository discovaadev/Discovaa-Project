import Header from "../components/Header.jsx";
import EmailConfirmation from "../components/EmailConfirmation";
import Footer from "../components/footer.jsx";

const IsvEmailPage = () => {
  return (
    <div >
      <Header
       bgColor="bg transparent"
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


      />
      <main>
        <EmailConfirmation />
      </main>
      <Footer />
    </div>
  );
};

export default IsvEmailPage;
