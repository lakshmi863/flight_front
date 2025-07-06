import { FaYoutube, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#09132E] p-8">
      <div className="flex flex-row space-x-36 ">
        {/* Brand Box */}
        <div className="bg-[#09132E] p-4 w-[300px] rounded-[10px] shadow-lg">
          <h5 className="text-white font-bold font-[dmsans] mb-2">FLYGLOBE</h5>
          <p className="text-white text-sm">
            FlyGlobe is more than just a flight booking app; it's your one-stop shop for seamless travel experiences.
          </p>
        </div>

        {/* About Section */}
        <div>
          <ul className="text-white space-y-2">
            <li>About</li>
            <li>Promo</li>
            <li>Help</li>
            <li>Order</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <ul className="text-white space-y-2">
            <li className="font-bold mb-2">Resources</li>
            <li>Documentation</li>
            <li>Carrier</li>
            <li>Work With Us</li>
            <li>Blog & News</li>
            <li>Affiliate</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <ul className="text-white space-y-2">
            <li className="font-bold mb-2">Legal</li>
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Developers</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-white mt-8">
  <h1 className="font-bold text-[20px] mb-2">Contact Us</h1>
  <p>flyglobe@gmail.com</p>
  <p>+12 345 678 09</p>
  <p>Singapore, Indonesia</p>

  <h1 className="font-bold text-[20px] mb-2 mt-4">Follow Us On Social</h1>
  <div className="flex gap-4 text-[24px]">
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600"><FaYoutube /></a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedin /></a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaFacebook /></a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
  </div>
</div>

      </div>
      <div className="mt-8 flex flex-col items-center">
  {/* Horizontal Line */}
  <hr className="border-t border-white my-4 w-[80%]" />
  
  {/* Footer Text */}
  <h1 className="text-center text-white text-sm">© 2025 FlyBritain. All rights reserved.</h1>
</div>

    </div>
  );
};

export default Footer;
