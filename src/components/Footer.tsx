import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#284a95] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Alvin Graphics</h2>
            <p className="text-blue-200">Creating stunning visuals that tell your story.</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li className="hover:text-[#f95006] transition-colors cursor-pointer">Home</li>
              <li className="hover:text-[#f95006] transition-colors cursor-pointer">Projects</li>
              <li className="hover:text-[#f95006] transition-colors cursor-pointer">About</li>
            </ul>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex justify-center space-x-4">
              <Instagram className="hover:text-[#f95006] cursor-pointer transition-colors" />
              <Twitter className="hover:text-[#f95006] cursor-pointer transition-colors" />
              <Linkedin className="hover:text-[#f95006] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Alvin Graphics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;