import { motion } from "framer-motion";

function Skills({ data }) {
  return (
    <section id="skills" className="bg-gold-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">{data.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-white p-4 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
