import HomeSlider from '../components/HomeSlider';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Birthday Celebration",
    category: "Birthday",
    image: "/images/1234.png"
  },
  {
    title: "Eid Marketing",
    category: "Eid Mubarak",
    image: "/images/alvin.png"
  },
  {
    title: "Flamia Gas Marketing",
    category: "Eid Mubarak",
    image: "/images/david.png"
  },
  {
    title: "Peak Flame Marketing",
    category: "Eid Mubarak",
    image: "/images/saviour.png"
  },
  {
    title: "IEEE-KYU Eid Celebration",
    category: "Eid Mubarak",
    image: "/images/24.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/images/IEEE.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/images/ieee women.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/images/david_8th.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/images/women-love wins.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/images/lovewins.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/images/bible.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/images/alvin-tech.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/images/ma.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/images/xm.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/images/soap.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/images/1.png"
  },
  {
    title: "Event Posters",
    category: "Print Design",
    image: "/images/2.png"
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <section id="home">
        <HomeSlider />
      </section>

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
            {projects.slice(0, 3).map((project, index) => (
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
          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-block bg-[#284a95] text-white px-6 py-3 rounded-lg hover:bg-[#f95006] transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
