import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import ChatWidget from './components/ChatWidget';
import HomeSlider from './components/HomeSlider';
import About from './components/About';

const projects = [
  {
    title: "Birthday Celebration",
    category: "Birthday",
    image: "/src/components/images/1234.png"
  },
  {
    title: "Eid Marketing",
    category: "Eid Mubarak",
    image: "/src/components/images/alvin.png"
  },
  {
    title: "Flamia Gas Marketing",
    category: "Eid Mubarak",
    image: "/src/components/images/david.png"
  },
  {
    title: "Peak Flame Marketing",
    category: "Eid Mubarak",
    image: "/src/components/images/saviour.png"
  },
  {
    title: "IEEE-KYU Eid Celebration",
    category: "Eid Mubarak",
    image: "/src/components/images/24.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/src/components/images/ieee.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/src/components/images/ieee women.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/src/components/images/david_8th.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/src/components/images/women-love wins.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/src/components/images/lovewins.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/src/components/images/bible.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/src/components/images/alvin-tech.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/src/components/images/ma.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/src/components/images/xm.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/src/components/images/soap.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/src/components/images/1.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/src/components/images/2.png"
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section id="home">
        <HomeSlider />
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 py-20">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#284a95] mb-12 text-center"
          >
            My Latest Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <About />

      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;