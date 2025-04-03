import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#284a95] mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              I'm Alvin, a passionate graphic designer with over a decade of experience in transforming ideas into compelling visual narratives. My journey in the creative industry has been driven by a relentless pursuit of excellence and innovation.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My expertise includes:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f95006] rounded-full mr-3"></span>
                Brand Identity Design
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f95006] rounded-full mr-3"></span>
                Digital Marketing Solutions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f95006] rounded-full mr-3"></span>
                Web & UI/UX Design
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f95006] rounded-full mr-3"></span>
                Motion Graphics & Animation
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/src/components/images/about-alvin.jpg"
              alt="Creative workspace"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#284a95] rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#f95006] rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;