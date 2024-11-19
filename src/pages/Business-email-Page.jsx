import Header from "../components/Header.jsx";
import EmailConfirmation from "../components/EmailConfirmation";
import Footer from "../components/footer.jsx";

const BusinessEmailPage = () => {
  return (
    <section className="flex flex-col ">
      <Header
        bgColor="bg transparent"
        logoSrc={false}
        showBackButton={true}
        stepText="STEP 02/03"
        searchQuery={""}
        showProfile={false}
        showSignInText={false}
        customLinks={[]}
        showSearch={false}
        showIcons={false}
      />
      <EmailConfirmation />
      <Footer />
    </section>
  );
};

export default BusinessEmailPage;
