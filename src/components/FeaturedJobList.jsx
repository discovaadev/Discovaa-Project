import CardImg from "../assets/cardImg.png";
import Image1 from "../assets/Img1.png";
import Image2 from "../assets/Img2.png";
import Image3 from "../assets/Img3.png";
import Image4 from "../assets/Img4.png";
import OnboardingButtons from "../components/OnboardingButtons.jsx";

export default function FeaturedJobList() {
  return (
    <section className="w-[97%] h-[700px] border border-gray-300 rounded-[70px] mx-auto mt-[280px] flex flex-col items-center">
      <div className="flex bg-black relative justify-between items-center w-[1020px] h-[270px] rounded-[25px] mt-[-100px]">
        <div className="mt-[-75px] ml-[60px]">
          <img src={CardImg} alt="card-img" className="w-[365px]" />
        </div>
        <div className="w-[380px] text-white mr-[50px] p-[27px_20px]">
          <h2 className="text-2xl font-semibold mb-[14px]">Simple Solutions for Complex Connections</h2>
          <p className="font-light text-[14px] my-[9px] ml-[-2px] leading-[16.94px]">Register and browse professionals</p>
          <p className="font-light text-[14px] my-[9px] ml-[-2px] leading-[16.94px]">Explore Artisans availability</p>
          <p className="font-light text-[14px] my-[9px] ml-[-2px] leading-[16.94px]">Book a consultation</p>
          <OnboardingButtons
            signUpButtonStyle={{ backgroundColor: "white", color: "black" }}
            seeHowButtonStyle={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid #ccc",
            }}
            style={{ marginTop: "40px", height: "27px", width: "306.69px" }}
          />
        </div>
      </div>

      <div className="font-inter font-semibold text-3xl mt-[40px]">
        <h2>Featured Job List</h2>
      </div>

      <div className="flex justify-center mt-[50px]">
        <img src={Image1} alt="Image 1" className="w-[219px] h-[210px] mx-[10px]" />
        <img src={Image2} alt="Image 2" className="w-[219px] h-[210px] mx-[10px]" />
        <img src={Image3} alt="Image 3" className="w-[219px] h-[210px] mx-[10px]" />
        <img src={Image4} alt="Image 4" className="w-[219px] h-[210px] mx-[10px]" />
      </div>
    </section>
  );
}
