import { motion } from 'framer-motion';

const About = () => {
  const flipCardStyles = `
    .flip-card {
      perspective: 1000px;
    }
    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-radius: 1rem;
    }
    .flip-card-back {
      transform: rotateY(180deg);
      background: linear-gradient(135deg, #ef5e1fff, #f95006);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '50+', label: 'Awards Won' }
  ];

  const expertise = [
    'Brand Identity Design',
    'Digital Marketing Solutions',
    'Web & UI/UX Design',
    'Motion Graphics & Animation'
  ];

  return (
    <>
      <style>{flipCardStyles}</style>
      <section id="about" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#284a95] to-[#f95006] bg-clip-text text-transparent mb-6">
            About Alvin Graphics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate graphic designer with over 5+ Years of experience transforming ideas into compelling visual narratives
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flip-card h-32">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col justify-center">
                  <div className="text-3xl font-bold text-[#284a95] mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
                <div className="flip-card-back rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">Achievement</div>
                    <div className="text-sm opacity-90">Milestone Reached</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-[#284a95] mb-4">My Journey</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                My journey in the creative industry has been driven by a relentless pursuit of excellence and innovation. I believe in the power of design to tell stories and create meaningful connections.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Expertise Areas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {expertise.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl border border-gray-200"
                    >
                      <div className="w-3 h-3 bg-[#f95006] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-96">
              <img
                src="/images/about.jpg"
                alt="Creative workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#284a95] to-[#f95006] rounded-2xl -z-10 opacity-80"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#f95006] rounded-xl -z-10 opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
     