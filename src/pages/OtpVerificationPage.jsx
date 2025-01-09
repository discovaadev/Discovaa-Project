import Header from "../components/Header";
import LoginImgSection from "../components/LoginImgSection";
import CodeInput from "../components/CodeInput";
import Footer from "../components/footer";
import PhotograhImg from "../assets/photographer (1).png";

const OtpVerificationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        bgColor=""
        showBackButton={true}
        logoSrc={false}
        showIcons={false}
        searchQuery={false}
        showSearch={false}
        showProfile={false}
        showPageTitle = {true}
        pageTitle="Forgot Your Password?"
      />
      <main className="flex-grow flex flex-col lg:flex-row justify-evenly items-center">
        <div className="md:hidden lg:block">
          <LoginImgSection />
        </div>
        <div>
          <img
            src={PhotograhImg}
            alt="Photographer"
            className="m-auto w-[200px] mt-3  md:-mt-0 md:w-[300px] lg:hidden m-0 "
          />
        </div>
        <CodeInput
          title="Forgot Your Password?"
          description="Please enter the 6-digit verification code sent to"
          contactInfo="+234(803)*********123"
          buttonText="Proceed"
          buttonStyle="mt-24 bg-black text-white w-full p-2 rounded-md lg:mt-32 "
          contactText=" "
        />
      </main>
      <Footer />
    </div>
  );
};

export default OtpVerificationPage;
