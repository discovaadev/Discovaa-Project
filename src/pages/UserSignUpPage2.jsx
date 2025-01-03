import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import Footer from "../components/footer";
import Photographer from '../assets/photographer (1).png'
const UserSignUpPage2 = () => {
  return (
    <div>
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
        showMenuIcon={false}
      />
      <main className="h-screen">
        <ProfileForm imgSrc={Photographer} alt='Photographer' />
      </main>
      <Footer className='hidden lg:flex' />
    </div>
  );
};

export default UserSignUpPage2;
