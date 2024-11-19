import EngineerImg from "../assets/EngineerImg.png";
import CodeInput from '../components/CodeInput';

export default function EmailConfirmation() {
  return (
    <div className="flex justify-evenly h-screen pt-20">
      <div className="">
        <img src={EngineerImg} alt="Engineer" className="w-full max-w-[400px]" />
      </div>
      <div>
        <CodeInput titleStyle="text-3xl font-bold mb-4" buttonStyle="w-full bg-black text-white py-2 px-4 rounded-md mt-20" />
      </div>
    </div>
  );
}
