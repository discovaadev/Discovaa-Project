import '../styles/CustomStyles.css';
import worker2 from '../assets/worker2.png';
import worker1 from '../assets/worker1.png';
import photographer from '../assets/photographer (1).png';
import Logo from './logo.jsx';
import Avater from './Avater.jsx';
import HeroLogo from '../assets/HeroLogo.png';

export default function LoginImg() {
  return (
    <div className="hidden  md:flex flex-col  items-center justify-center translate-y-40 lg:translate-y-0 m-auto lg:mt-[240px]">
      <div className="flex justify-evenly">
        <img src={worker2} alt="Worker 2" className="w-[200px] clip-ellipse-left md:w-40 lg:w-[200px]"  />
        <img
          src={photographer}
          alt="Photographer"
          className="w-[200px] relative top-[-150px] z-[1] md:w-40 lg:w-[200px]"
        />
        <img src={worker1} alt="Worker 1" className="w-[200px] clip-ellipse-right md:w-40 lg:w-[200px]" />
      </div>

      <div className="flex flex-col items-center justify-center -translate-y-[177px]">
        <Avater width='w-[140px]' translateY = "translate-y-6" marginLeft = "ml-0"/>
        <div className="flex flex-col items-center mt-[-8px]">
        <Logo src={HeroLogo} className="w-[210px] mt-[15px] ml-[5px] filter grayscale brightness-0 md:w-[150px]" />

          <p className="text-center mt-[-8px] md:text-sm">All expertise on one platform</p>
        </div>
      </div>
    </div>
  );
}
