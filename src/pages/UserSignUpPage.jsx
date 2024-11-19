import Header from "../components/Header";
import FormSection from "../components/FormSection";
import Footer from "../components/footer";
import Photographer from "../assets/photographer (1).png";
const UserSignUpPage = () => {
  return (
    <div>
      <Header
        bgColor="bg transparent"
        logoSrc={false}
        showBackButton={true}
        stepText="STEP 01/03"
        searchQuery={""}
        showProfile={false}
        showSignInText={false}
        customLinks={[]}
        showSearch={false}
        showIcons={false}
      />
      <main>
        <FormSection
          description="Register User Account!"
          imageSrc={Photographer}
        />
      </main>
      <Footer />
    </div>
  );
};

export default UserSignUpPage;
