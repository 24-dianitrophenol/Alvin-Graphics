import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-lg shadow-lg"
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6"
      >
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-gray-300 mt-2">{category}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;