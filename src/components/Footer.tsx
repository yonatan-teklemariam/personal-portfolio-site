
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="c-site-footer bg-gray-900 text-muted-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://linkedin.com/in/yonatanteklemariam" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/yonatan-teklemariam" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="mailto:almzjantle24@gmail.com" aria-label="Email" className="hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Yonatan Teklemariam. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Bridging Agriculture & Technology with Purpose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
