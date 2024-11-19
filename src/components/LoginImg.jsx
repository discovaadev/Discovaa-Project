import '../styles/CustomStyles.css';
import worker2 from '../assets/worker2.png';
import worker1 from '../assets/worker1.png';
import photographer from '../assets/photographer (1).png';
import Logo from './logo.jsx';
import Avater from './Avater.jsx';
import HeroLogo from '../assets/HeroLogo.png';

export default function LoginImg() {
  return (
    <div className="flex flex-col items-center justify-center relative pt-16">
      <div className="flex justify-evenly max-w-[700px]  mx-auto pt-9">
        <img src={worker2} alt="Worker 2" className="w-[200px] clip-ellipse-left" />
        <img
          src={photographer}
          alt="Photographer"
          className="w-[200px] relative top-[-182px] z-[1]"
        />
        <img src={worker1} alt="Worker 1" className="w-[200px] clip-ellipse-right" />
      </div>

      <div className="flex flex-col items-center justify-center -translate-y-[177px]">
        <Avater width='w-[140px]' translateY = "-translate-y-0" marginLeft = "ml-0"/>
        <div className="flex flex-col items-center mt-[-8px]">
        <Logo src={HeroLogo} className="w-[210px] mt-[15px] ml-[5px] filter grayscale brightness-0" />

          <p className="text-center mt-[-8px]">All expertise on one platform</p>
        </div>
      </div>
    </div>
  );
}
