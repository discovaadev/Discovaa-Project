import Logo from './logo.jsx';
import WhiteLogo from '../assets/WhiteLogo.png';

export default function Footer({className}) {
  return (
    <section className={`bg-[#161622] py-6 flex gap-28 mt-20 hidden md:block ${className}`}>
      <div className="flex flex-col items-center">
        <Logo src={WhiteLogo} alt="White Logo" width="100px" height="auto" className="w-24 h-auto" style={{ filter: 'none' }} />
        <div className="flex gap-2 mt-3 pl-12 text-white">
          <i className="fab fa-twitter p-2 bg-gray-600 rounded-full cursor-pointer"></i>
          <i className="fab fa-instagram p-2 bg-gray-600 rounded-full cursor-pointer"></i>
          <i className="fab fa-facebook-square p-2 bg-gray-600 rounded-full cursor-pointer"></i>
          <i className="fab fa-youtube p-2 bg-gray-600 rounded-full cursor-pointer"></i>
        </div>
      </div>

      <div className="flex text-white gap-24  m-auto font-inter font-medium text-sm opacity-80">
        <div className="flex flex-col gap-2">
          <p>Home</p>
          <p>Services</p>
          <p>Screenshots</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>How to Download</p>
          <p>How it Works</p>
          <p>Video Tutorial</p>
          <p>FAQ</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Google Play Store</p>
          <p>Apple App Store</p>
          <p>Download</p>
          <p>Directly</p>
        </div>
      </div>
    </section>
  );
}
