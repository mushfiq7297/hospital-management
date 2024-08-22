import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";


const SocialIcons = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 space-y-2 ">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="block text-blue-600">
        <FaFacebook className="w-7 h-7"></FaFacebook>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-blue-400">
        <FaTwitter className="w-7 h-7"></FaTwitter>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-blue-700">
        <FaLinkedin className="w-7 h-7"></FaLinkedin>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-pink-600">
        <FaInstagram className="w-7 h-7"></FaInstagram>
      </a>
    </div>
  );
};

export default SocialIcons;