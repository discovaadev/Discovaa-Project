import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';
import Footer from '../components/footer';
import EngineerImg from '../assets/EngineerImg.png'

const IsvSignUpPage2 = () => {
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
      />
      <main>
        <ProfileForm showBusinessInfo={true} imgSrc={EngineerImg} titleStyle='font-bold text-3xl' />
      </main>
      <Footer />
    </div>
  );
};

export default IsvSignUpPage2;
