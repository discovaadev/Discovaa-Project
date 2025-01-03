import Header from "../components/Header";
import Footer from "../components/footer";
import ProfileForm from "../components/ProfileForm";
import EngineerImg from "../assets/EngineerImg.png";
const BusinessSignUpPage3 = () => {
  return (
    <section className="flex flex-col ">
      <Header
        bgColor=""
        logoSrc={false}
        showBackButton={true}
        stepText="STEP 03/03"
        searchQuery={""}
        showProfile={false}
        showSignInText={false}
        customLinks={[]}
        showSearch={false}
        showIcons={false}
        showBackButtonAndStepText={true}
        showPageTitle={true}
        pageTitle="Complete Your Profile!"
      />
      <ProfileForm titleStyle="text-3xl font-bold" showBusinessInfo={true} imgSrc={EngineerImg} />
      <Footer />
    </section>
  );
};

export default BusinessSignUpPage3;
