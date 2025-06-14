
import React from 'react';
import { LayoutDashboard, Smartphone, CheckCircle, Users } from 'lucide-react';

const services = [
  {
    icon: LayoutDashboard,
    title: 'Custom Website Development',
    description: 'Building responsive, user-friendly websites tailored to your specific needs, from simple landing pages to more complex web applications.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Ensuring your website looks and functions flawlessly across all devices – desktops, tablets, and smartphones – for a seamless user experience.',
  },
  {
    icon: Users, // Using Users icon for user-centric design
    title: 'User-Centric Solutions',
    description: 'Focusing on usability and intuitive navigation to create websites that are not only visually appealing but also easy for your audience to use.',
  },
  {
    icon: CheckCircle,
    title: 'Consultation & Support',
    description: 'Providing guidance on establishing your online presence and offering ongoing support to ensure your website remains effective and up-to-date.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-primary">What I Offer</h2>
          <p className="text-lg mt-2">Helping businesses and individuals establish their online presence with intuitive, user-friendly websites.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-lg shadow-xl hover:scale-105 transform transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-10 w-10 text-primary mr-4" />
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
