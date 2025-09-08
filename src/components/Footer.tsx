import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#284a95] text-white py-20 rounded-t-3xl shadow-lg">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand & Description */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-extrabold mb-5 tracking-wide">Alvin Graphics</h2>
            <p className="text-blue-200 text-lg max-w-sm text-center md:text-left mb-8">
              Crafting visually stunning and impactful designs that tell your unique story.
            </p>
            <div className="flex space-x-8 text-3xl text-white justify-center md:justify-start">
              <Instagram className="hover:text-orange-400 cursor-pointer transition-colors" />
              <Twitter className="hover:text-orange-400 cursor-pointer transition-colors" />
              <Linkedin className="hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold mb-8 border-b border-blue-700 pb-4 w-full max-w-xs text-center md:text-left">
              Quick Links
            </h4>
            <ul className="space-y-5 text-lg w-full max-w-xs text-center md:text-left">
              <li className="cursor-pointer hover:text-orange-400 transition-colors">Home</li>
              <li className="cursor-pointer hover:text-orange-400 transition-colors">Projects</li>
              <li className="cursor-pointer hover:text-orange-400 transition-colors">About</li>
              <li className="cursor-pointer hover:text-orange-400 transition-colors">Contact</li>
              <li className="cursor-pointer hover:text-orange-400 transition-colors">Blog</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold mb-8 border-b border-blue-700 pb-4 w-full max-w-xs text-center md:text-left">
              Contact Us
            </h4>
            <address className="not-italic text-blue-200 text-lg max-w-xs text-center md:text-left space-y-3">
              <p>1234 Graphic St.</p>
              <p>Design City, DC 56789</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@alvingraphics.com</p>
            </address>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold mb-8 border-b border-blue-700 pb-4 w-full max-w-xs text-center md:text-left">
              Subscribe to our Newsletter
            </h4>
            <form className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-l-3xl px-5 py-3 text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 rounded-r-3xl px-8 py-3 text-white font-semibold flex items-center space-x-3"
              >
                <Mail size={22} />
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 border-t border-blue-700 pt-8 text-center text-blue-300 text-sm tracking-wide flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Alvin Graphics. All rights reserved.</p>
          <div className="space-x-8">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
