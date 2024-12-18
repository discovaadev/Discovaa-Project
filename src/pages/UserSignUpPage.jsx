import Header from "../components/Header";
import FormSection from "../components/FormSection";
import Footer from "../components/footer";
import Photographer from "../assets/photographer (1).png";
const UserSignUpPage = () => {
  return (
    <div className=" w-full">
      <Header
        bgColor="bg-black"
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
      />
      <main className="h-screen">
        <FormSection
          description="Register User Account!"
          imageSrc={Photographer}
        />
      </main>
      <Footer className='hidden lg:flex' />
    </div>
  );
};

export default UserSignUpPage;
