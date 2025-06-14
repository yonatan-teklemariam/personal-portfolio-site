
import React from 'react';
import { BarChart3, ShieldCheck, Leaf, Zap, Code2, Play } from 'lucide-react'; // Added Play icon

const agriculturalSuccess = {
  title: 'Agricultural Output Optimization (2021)',
  achievements: [
    { text: 'Increased produce output by 40%', icon: BarChart3 },
    { text: 'Reduced disease and pest incidence significantly', icon: ShieldCheck },
    { text: 'Boosted company profits by 45%', icon: Zap }, // Using Zap as profit boost
  ],
  description: 'Led strategic initiatives focusing on integrated pest management, soil health improvement, and resource optimization, resulting in substantial gains in farm productivity and profitability.',
  imagePlaceholder: Leaf, // Main icon for this success story
};

const webProjectsPlaceholder = [
  { title: 'Project Alpha (Coming Soon)', description: 'A dynamic e-commerce platform.', icon: Code2 },
  { title: 'Portfolio Showcase (In Progress)', description: 'Personal website for a creative professional.', icon: Code2 },
  { title: 'AgriTech Dashboard Mockup', description: 'Conceptual design for a farm management tool.', icon: Code2 },
];

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-primary">Portfolio & Projects</h2>
          <p className="text-lg mt-2">Showcasing my impact and technical skills.</p>
        </div>

        {/* Agricultural Success Story */}
        <div className="mb-16 p-8 bg-card rounded-xl shadow-2xl animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <agriculturalSuccess.imagePlaceholder className="h-24 w-24 text-primary" />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold text-foreground mb-3">{agriculturalSuccess.title}</h3>
              <p className="text-muted-foreground mb-4">{agriculturalSuccess.description}</p>
              <ul className="space-y-2">
                {agriculturalSuccess.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-center">
                    <ach.icon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{ach.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Video Section */}
        <div className="mb-16 p-8 bg-card rounded-xl shadow-2xl animate-fade-in-up">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-3">My Journey: From Agriculture to Tech</h3>
            <p className="text-muted-foreground">Watch this video to learn more about my background and passion for bridging agriculture and technology.</p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Yonatan Teklemariam - Agricultural Journey"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Web Design Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Web Development Showcase</h3>
          <p className="text-center text-muted-foreground mb-10">
            As I build out my frontend portfolio, this space will feature my web design and development projects. Stay tuned!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjectsPlaceholder.map((project, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <project.icon className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-medium text-foreground mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                {/* Placeholder for link or more details */}
                <a href="#" className="inline-block mt-4 text-sm text-primary hover:underline">
                  Learn More (Coming Soon)
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
