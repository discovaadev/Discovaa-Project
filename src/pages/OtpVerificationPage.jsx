import Header from "../components/Header";
import LoginImg from "../components/LoginImg";
import CodeInput from "../components/CodeInput";
import Footer from '../components/footer';

const OtpVerificationPage = () => {
  return (
    <div>
      <Header
        bgColor="bg-transparent"
        showBackButton={true}
        logoSrc={false}
        showIcons={false}
        searchQuery={false}
        showSearch={false}
        showProfile={false}
      />
    <main className="flex fle-row justify-center gap-16 h-screen pt-16">
    <LoginImg />
    <CodeInput
      title="Forgot Your Password?"
      description="Please enter the 6-digit verification code sent to"
      contactInfo="+234(803)*********123"
      buttonText="Proceed"
      buttonStyle="mt-32"
      contactText= " "
      descriptionWidth="w-[400px]"
    />
    </main>
    <Footer />
    </div>
  );
};

export default OtpVerificationPage;
