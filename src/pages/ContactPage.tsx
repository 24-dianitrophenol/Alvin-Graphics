import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button className="bg-[#f95006] text-white px-4 py-1 rounded-full text-sm mb-4">
              Let's Connect
            </button>
            <h1 className="text-5xl font-extrabold text-[#2e2e6e]">
              Get in <span className="text-[#f95006]">Touch</span>
            </h1>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-gray-300 rounded-lg p-6 text-center"
          >
            <div className="text-blue-600 mb-2">
              <FaPhoneAlt className="mx-auto h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-sm text-gray-600">Call us directly</p>
            <p className="text-[#f95006] font-semibold mt-1">+256 763 721 005</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-gray-300 rounded-lg p-6 text-center"
          >
            <div className="text-red-600 mb-2">
              <FaEnvelope className="mx-auto h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-sm text-gray-600">Send us an email</p>
            <p className="text-[#f95006] font-semibold mt-1">alvingraphics@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border border-gray-300 rounded-lg p-6 text-center"
          >
            <div className="text-green-600 mb-2">
              <FaWhatsapp className="mx-auto h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-1">WhatsApp</h3>
            <p className="text-sm text-gray-600">Chat with us</p>
            <p className="text-[#f95006] font-semibold mt-1">+256 763 721 005</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border border-gray-300 rounded-lg p-6 text-center"
          >
            <div className="text-red-600 mb-2">
              <FaMapMarkerAlt className="mx-auto h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-1">Location</h3>
            <p className="text-sm text-gray-600">Visit our office</p>
            <p className="text-[#f95006] font-semibold mt-1">Banda, Kampala-Uganda</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
            <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f95006]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f95006]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+256 123 456 789"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f95006]"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your Company"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f95006]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="service" className="block text-gray-700 mb-2">Service Required *</label>
                <select
                  id="service"
                  name="service"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f95006]"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-gray-700 mb-2">Budget Range *</label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f95006]"
                  required
                >
                  <option value="">Select budget range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-plus">Over $10,000</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="projectDetails" className="block text-gray-700 mb-2">Project Details</label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f95006] resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#f95006] text-white px-6 py-3 rounded-md hover:bg-[#e04e00] transition-colors duration-300 font-semibold flex items-center justify-center"
            >
              Send Message
            </button>
          </motion.form>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="font-semibold text-lg mb-4">Office Hours</h3>
              <ul className="text-gray-700">
                <li className="flex justify-between border-b border-gray-200 py-2">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 py-2">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 py-2">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-[#f95006] rounded-lg shadow-lg p-6 text-white"
            >
              <h3 className="font-semibold text-lg mb-4">Quick Response Guarantee</h3>
              <p className="text-sm">
                We understand that time is valuable. That's why we guarantee a response to all inquiries within 24 hours.
              </p>
              <div className="flex items-center mt-4 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                  <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={2} />
                </svg>
                <span className="text-sm font-semibold">24-hour response time</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="font-semibold text-lg mb-4">Need Urgent Help?</h3>
              <p className="text-sm mb-4">
                For urgent matters or technical emergencies, contact us directly via WhatsApp for immediate assistance.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h1l2 3 3-3 4 4 5-5 2 2v4h1" />
                </svg>
                <span>WhatsApp Now</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
