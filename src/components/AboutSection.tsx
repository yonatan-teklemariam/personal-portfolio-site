
import React from 'react';
import { GraduationCap, Briefcase, Users, Zap, Brain, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const softSkills = [
    { name: 'Communication', icon: Users },
    { name: 'Leadership', icon: Award },
    { name: 'Adaptability', icon: Zap },
    { name: 'Continuous Learning', icon: Brain },
    { name: 'Working Well Under Pressure', icon: Briefcase }, // Re-using Briefcase for thematic fit
  ];

  return (
    <section id="about" className="bg-gray-800"> {/* Slightly different background for section separation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-primary">About Me</h2>
          <p className="text-lg mt-2">My journey from fields to frontend.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2 flex justify-center animate-fade-in-up">
            <img 
              src="/lovable-uploads/adacc3b1-b530-407c-b02b-d81f85af77d0.png" 
              alt="Yonatan Teklemariam" 
              className="w-56 h-56 sm:w-72 sm:h-72 rounded-lg object-cover border-4 border-primary shadow-xl" 
            />
          </div>

          <div className="md:col-span-3 space-y-8 animate-fade-in-up animation-delay-200">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3 flex items-center">
                <Briefcase className="mr-3 text-primary h-7 w-7" />
                Personal Bio
              </h3>
              <p>
                Hello! I'm Yonatan Teklemariam. My professional journey began in the rich fields of agricultural sciences, where I specialized as an entomologist and farm project manager. Driven by a passion for problem-solving and innovation, I've recently transitioned into the dynamic world of frontend development. My goal is to leverage my analytical skills and scientific background to build intuitive, impactful web solutions that bridge the gap between agriculture and technology.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <GraduationCap className="mr-3 text-primary h-7 w-7" />
                Educational Background
              </h3>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-medium text-foreground">B.Sc. in Agricultural Sciences (Plant Protection)</h4>
                <p className="text-muted-foreground">Hamelmalo Agricultural College, Eritrea</p>
                <p className="text-sm text-primary mt-1">Graduated with High Honors</p>
                <p className="text-sm text-muted-foreground mt-1">Intensive 4-year program focusing on research and practical application in plant health and protection.</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Zap className="mr-3 text-primary h-7 w-7" />
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {softSkills.map(skill => (
                  <div key={skill.name} className="flex items-center space-x-2 bg-card p-3 rounded-md shadow">
                    <skill.icon className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
