import { motion } from "framer-motion";

function Hero({ data }) {
  return (
    <section className="bg-gradient-to-r from-gold-100 to-gold-200 py-20 mt-16">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {data.title}
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {data.subtitle}
        </motion.p>
        <motion.button
          className="bg-gold-600 text-white px-6 py-3 rounded-full hover:bg-gold-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {data.cta}
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
