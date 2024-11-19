import FormSection from '../components/FormSection';
import Footer from '../components/footer'
import EngineerImg from '../assets/EngineerImg.png';
import Header from '../components/Header';

const BusinessSignUpPage = () => {
  return (
    <section className='flex flex-col w-full'>
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
      <FormSection description='Business Service Provider!' descriptionStyle='text-3xl font-bold' imageSrc={EngineerImg} />
      <Footer />
    </section>
  );
};

export default BusinessSignUpPage;
