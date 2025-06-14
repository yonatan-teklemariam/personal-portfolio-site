
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const templateParams = {
      from_name: formData.get('name') as string,
      from_email: formData.get('email') as string,
      message: formData.get('message') as string,
      to_name: 'Yonatan Teklemariam',
    };

    console.log('Sending email with params:', templateParams);

    try {
      const result = await emailjs.send(
        'service_e3g03d7', // Service ID
        'template_jt3dwfv', // Template ID
        templateParams,
        'xkYZW8H5Cvrcz4Zue' // Public Key
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-primary">Get In Touch</h2>
          <p className="text-lg mt-2">I'd love to hear from you. Let's connect!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-xl animate-fade-in-up">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
              <Input type="text" id="name" name="name" required placeholder="Your Name" disabled={isSubmitting} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email Address</label>
              <Input type="email" id="email" name="email" required placeholder="your.email@example.com" disabled={isSubmitting} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
              <Textarea id="message" name="message" rows={5} required placeholder="Your message..." disabled={isSubmitting} />
            </div>
            <div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>

          {/* Contact Details */}
          <div className="space-y-8 animate-fade-in-up animation-delay-200">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Details</h3>
            <div className="space-y-4">
              <a href="mailto:almzjantle24@gmail.com" className="flex items-center group">
                <Mail className="h-6 w-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">almzjantle24@gmail.com</span>
              </a>
              <a href="tel:+447350989507" className="flex items-center group">
                <Phone className="h-6 w-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">+44 7350 989507</span>
              </a>
              <a href="https://linkedin.com/in/yonatanteklemariam" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <Linkedin className="h-6 w-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">linkedin.com/in/yonatanteklemariam</span>
              </a>
              <a href="https://github.com/yonatan-teklemariam" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <Github className="h-6 w-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">github.com/yonatan-teklemariam</span>
              </a>
            </div>
            {/* Optional: Map or illustration */}
             <div className="mt-8 p-4 bg-card rounded-lg text-center">
               <p className="text-muted-foreground">Based in the UK, available for remote opportunities.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
