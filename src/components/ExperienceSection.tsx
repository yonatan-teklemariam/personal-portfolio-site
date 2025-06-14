
import React from 'react';
import { Briefcase, CalendarDays, Users } from 'lucide-react';

const experiences = [
  {
    role: 'Frontend Developer (Entry-Level)',
    company: 'Current Engagements & Learning',
    period: 'Present',
    description: 'Actively developing frontend skills, working on personal projects, and seeking opportunities to contribute to innovative tech solutions. Focusing on React, TypeScript, and modern web technologies.',
    icon: Briefcase,
  },
  {
    role: 'Farm Project Manager & Personnel Manager',
    company: '[Company Name], Eritrea', // Replace with actual company name
    period: '2019 – 2021',
    description: 'Led farm operations, managed personnel, and implemented strategies to improve productivity and sustainability. Oversaw crop cycles, resource allocation, and quality control.',
    icon: Users,
  },
  {
    role: 'Entomologist',
    company: '[Company Name], Eritrea', // Replace with actual company name
    period: '2017 – 2019',
    description: 'Conducted research on insect pests, developed and implemented pest management programs, and contributed to improving crop health and yield through scientific analysis and field work.',
    icon: CalendarDays, // Using CalendarDays as a stand-in for a more science-y icon
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-primary">Professional Experience</h2>
          <p className="text-lg mt-2">A timeline of my roles and responsibilities.</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-border -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`mb-10 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full animate-fade-in-up`} style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Content Card */}
              <div className="md:w-5/12">
                <div className={`bg-card p-6 rounded-lg shadow-xl border-l-4 md:border-l-0 md:border-r-0 ${index % 2 === 0 ? 'md:border-l-4 border-primary' : 'md:border-r-4 border-primary'} relative`}>
                  <exp.icon className={`absolute -top-5 ${index % 2 === 0 ? 'md:-left-5' : 'md:-right-5'}  bg-primary text-primary-foreground p-2 rounded-full h-10 w-10 shadow-lg`} />
                  <h3 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              </div>
              {/* Spacer for desktop */}
              <div className="hidden md:block md:w-2/12"></div>
              {/* Mobile/Desktop Icon & Date (simplified for mobile) */}
              <div className="md:w-5/12 md:hidden mt-4 text-center">
                 <exp.icon className="inline-block bg-primary text-primary-foreground p-2 rounded-full h-10 w-10 shadow-lg mb-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
