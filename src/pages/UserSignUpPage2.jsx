import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import Footer from "../components/footer";
import Photographer from '../assets/photographer (1).png'
const UserSignUpPage2 = () => {
  return (
    <div>
      <Header
        bgColor="bg transparent"
        logoSrc={false}
        showBackButton={true}
        stepText="STEP 03/03"
        searchQuery={""}
        showProfile={false}
        showSignInText={false}
        customLinks={[]}
        showSearch={false}
        showIcons={false}
      />
      <main className="h-screen">
        <ProfileForm imgSrc={Photographer} alt='Photographer' />
      </main>
      <Footer />
    </div>
  );
};

export default UserSignUpPage2;
