import Header from "../components/Header";

import CodeInput from "../components/CodeInput";
import Footer from "../components/footer";

const UserEmailConfirmationPage = () => {
  return (
    <div className="">
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
      <main className="min-h-screen">
        <CodeInput buttonStyle="mt-14 bg-black text-white w-full p-1 rounded-md " />
      </main>
      <Footer className="hidden lg:flex mb-0" />
    </div>
  );
};

export default UserEmailConfirmationPage;
