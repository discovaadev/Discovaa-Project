import Footer from "../components/footer";
import Header from "../components/Header";
import LoginImg from "../components/LoginImg";
import NewPassword from "../components/NewPassword";
const NewPasswordPage = () => {
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
      <main className="flex flex-row justify-evenly pt-10">
        <LoginImg/>
        <NewPassword />
      </main>

      <Footer />
    </div>
  );
};

export default NewPasswordPage;