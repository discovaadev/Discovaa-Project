import Header from "../components/Header";
import Photographer from "../assets/photographer (1).png";
import CodeInput from "../components/CodeInput";
import Footer from "../components/footer";

const UserEmailConfirmationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        bgColor=""
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
        showBackButtonAndStepText={true}
        pageTitle="Check your Mail"
        showPageTitle={true}
      />
      <main className="flex flex-col items-center flex-grow lg:flex-row justify-evenly  ">
        <img
          src={Photographer}
          alt="photographer"
          className="w-52 lg:block lg:w-[400px] "
        />

        <CodeInput buttonStyle="mt-14 bg-black text-white w-full p-2 rounded-md  "  />
      </main>
      <Footer  />
    </div>
  );
};

export default UserEmailConfirmationPage;
