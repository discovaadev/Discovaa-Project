import Header from "../components/Header";
import FormSection from "../components/FormSection";
import Footer from "../components/footer";
import Photographer from "../assets/photographer (1).png";
const UserSignUpPage = () => {
  return (
    <div className=" w-full">
      <Header
        bgColor=""
        logoSrc={false}
        showBackButton={true}
        stepText="STEP 01/03"
        searchQuery={""}
        showProfile={false}
        showSignInText={false}
        customLinks={[]}
        showSearch={false}
        showIcons={false}
        showBackButtonAndStepText={true}
        pageTitle="Register User Account!"
        showPageTitle={true}
        isUserSignupPage={true}
      />
      <main className="">
        <FormSection
          description="Register User Account!"
          imageSrc={Photographer}
        />
      </main>
      <Footer className="hidden lg:flex" />
    </div>
  );
};

export default UserSignUpPage;
