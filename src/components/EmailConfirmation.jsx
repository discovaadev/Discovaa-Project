import EngineerImg from "../assets/EngineerImg.png";
import CodeInput from '../components/CodeInput';

export default function EmailConfirmation() {
  return (
    <div className="lg:flex flex-row justify-evenly">
      <div className="mt-3">
        <img src={EngineerImg} alt="Engineer" className="w-52 m-auto lg:block lg:w-[380px] " />
      </div>
      <div>
        <CodeInput titleStyle="text-3xl font-bold mb-4" buttonStyle="w-full bg-black text-white py-2 px-4 rounded-md mt-20" />
      </div>
    </div>
  );
}
