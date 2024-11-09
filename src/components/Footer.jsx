import { Github, Linkedin, Mail } from "lucide-react";

function Footer({ data }) {
  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Mail: Mail,
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>{data.copyright}</p>
          </div>
          <div className="flex space-x-4">
            {data.socialLinks.map((link) => {
              const Icon = iconMap[link.name];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  className="hover:text-gold-400 transition duration-300"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
