import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  quote: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image, quote }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-cyan-950 to-slate-900 p-6"
    >
      <div className="aspect-w-3 aspect-h-4 mb-4">
        <img
          src={image}
          alt={name}
          className="object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold text-cyan-100 mb-1">{name}</h3>
      <p className="text-cyan-400 text-sm mb-3">{position}</p>
      <p className="text-cyan-300 text-sm italic line-clamp-2">{quote}</p>
    </motion.div>
  );
};

export default TeamMember;