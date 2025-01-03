import Footer from "../components/footer";
import Header from "../components/Header";
import LoginImgSection from "../components/LoginImgSection";
import NewPassword from "../components/NewPassword";
import PhotograhImg from "../assets/photographer (1).png";
const ResetPasswordPage = () => {
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
      />
      <main className="flex-grow lg:flex flex-row items-center justify-evenly">
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
        <NewPassword />
      </main>

      <Footer />
    </div>
  );
};

export default ResetPasswordPage;
