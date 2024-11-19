import Header from "../components/Header";
import Photographer from "../assets/photographer (1).png";
import CodeInput from "../components/CodeInput";
import Footer from '../components/footer';

const UserEmailConfirmationPage = () => {
  return (
    <div>
      <Header
        bgColor="bg transparent"
        logoSrc={false}
        showBackButton={true}
        stepText="STEP 02/03"
        onBackClick={() => console.log("Back clicked")}
        searchQuery={""}
        showProfile={false}
        showSignInText={false}
        customLinks={[]}
        showSearch={false}
        showIcons={false}
      />
      <main className="flex flex-row h-screen gap-32 justify-center pt-20">
        <div className="max-w-md">
          <img src={Photographer} alt="photographer" />
        </div>
        <CodeInput buttonStyle="mt-14" />
      </main>
      <Footer />
    </div>
  );
};

export default UserEmailConfirmationPage;
