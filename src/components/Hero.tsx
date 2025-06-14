
import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming shadcn button is available
import { ArrowRight, UserCircle } from 'lucide-react'; // UserCircle as placeholder

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-gray-800 pt-20"> {/* Added pt-20 for navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground">
              Yonatan Teklemariam
            </h1>
            <p className="text-2xl sm:text-3xl text-primary font-medium">
              Plant Scientist & Aspiring Frontend Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              Bridging Agriculture & Technology with Purpose. Crafting intuitive digital experiences inspired by scientific precision and a passion for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="#portfolio">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                 <a href="#contact">Connect With Me</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in-up animation-delay-300">
            {/* Placeholder for Yonatan's portrait */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-muted flex items-center justify-center border-4 border-primary shadow-2xl">
              <UserCircle size={128} className="text-primary" />
            </div>
             {/* You can replace this div with an <img> tag once you have Yonatan's photo.
                 Example: <img src="/path/to/yonatan-portrait.jpg" alt="Yonatan Teklemariam" className="rounded-full w-96 h-96 object-cover border-4 border-primary shadow-2xl" /> 
             */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
