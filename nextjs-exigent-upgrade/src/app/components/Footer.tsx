// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import kcoLogo from '../../../public/assets/kco.svg';
import bagelstudioLogo from '../../../public/assets/1bagelstudio_logo_gray.svg';
import Contact from './Contact';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white/60 backdrop-blur-lg blur-sm h-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
    {/* <p className="text-sm text-gray-500">© 2024 Your Company. All rights reserved.</p>
    <ul className="flex space-x-4">
      <li>
        <a href="#" className="text-gray-500 hover:text-gray-900">Privacy</a>
      </li>
      <li>
        <a href="#" className="text-gray-500 hover:text-gray-900">Terms</a>
      </li>
      <li>
        <a href="#" className="text-gray-500 hover:text-gray-900">Contact</a>
      </li>
    </ul> */}
  </div>
</footer>
  );
};

export default Footer;
