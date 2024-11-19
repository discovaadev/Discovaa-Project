import Header from "../components/Header";
import Footer from "../components/footer";
import ProfileForm from "../components/ProfileForm";
const BusinessSignUpPage3 = () => {
  return (
    <section className="flex flex-col ">
      <Header
        bgColor="bg transparent"
        logoSrc={false}
        showBackButton={true}
        stepText="STEP 03/03"
        searchQuery={""}
        showProfile={false}
        showSignInText={false}
        customLinks={[]}
        showSearch={false}
        showIcons={false}
      />
      <ProfileForm titleStyle="text-3xl font-bold" />
      <Footer />
    </section>
  );
};

export default BusinessSignUpPage3;
