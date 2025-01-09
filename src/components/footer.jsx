import Logo from './logo.jsx';
import WhiteLogo from '../assets/WhiteLogo.png';

export default function Footer({ className }) {
  return (
    <section className={`bg-[#161622] py-6 flex flex-col md:flex-row gap-8 md:gap-52 mt-20 ${className}`}>
      
      <div className="flex flex-col items-center  md:items-start md:pl-4">
        <Logo
          src={WhiteLogo}
          alt="White Logo"
          width="100px"
          height="auto"
          className="w-24 h-auto"
          style={{ filter: 'none' }}
        />
        <div className="flex gap-3 mt-3 text-white">
          <i className="fab fa-twitter p-2 bg-gray-600 rounded-full cursor-pointer"></i>
          <i className="fab fa-instagram p-2 bg-gray-600 rounded-full cursor-pointer"></i>
          <i className="fab fa-facebook-square p-2 bg-gray-600 rounded-full cursor-pointer"></i>
          <i className="fab fa-youtube p-2 bg-gray-600 rounded-full cursor-pointer"></i>
        </div>
      </div>

     
      <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-24 text-white font-inter font-medium text-sm opacity-80">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p>Home</p>
          <p>Services</p>
          <p className=''>Screenshots</p>
          <p className=''>Contact</p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <p>How to Download</p>
          <p>How it Works</p>
          <p className=''>Video Tutorial</p>
          <p className=''>FAQ</p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2 md:hidden lg:block">
          <p>Google Play Store</p>
          <p>Apple App Store</p>
          <p className=''>Download</p>
          <p className=''>Directly</p>
        </div>
      </div>
    </section>
  );
}
