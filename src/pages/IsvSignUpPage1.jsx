import FormSection from "../components/FormSection";
import Header from "../components/Header";
import Footer from '../components/footer';
import EngineerImg from '../assets/EngineerImg.png'

const IsvSignUpPage = () => {
  return (
    <div>
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
        showMenuIcon={false}
        showBackButtonAndStepText={true}
        showPageTitle={true}
        pageTitle="Individual Service Provider!"
      />
      <main>
        <FormSection imageSrc={EngineerImg} alt='photographer'  description="Individual Service Account!"  descriptionStyle='font-bold text-[30px]' />
      </main>
      <Footer className='' />
    </div>
  );
};

export default IsvSignUpPage;
