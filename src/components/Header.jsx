import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function Header({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-2xl font-bold text-gold-600">
              {data.name}
            </a>
          </motion.div>
          <div className="hidden md:flex space-x-4">
            {data.navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-gold-600 transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
      <motion.div
        className="fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-40 md:hidden"
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center mt-20 space-y-6">
          {data.navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-800 hover:text-gold-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
