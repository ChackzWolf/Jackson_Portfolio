import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-100">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center overflow-hidden">
          <motion.div 
           initial={{ opacity: 0, x: 100 }}
           whileInView={{ opacity: 2, x: 0 }}
           transition={{ duration: 0.6 }}

          className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-portfolio-lightYellow font-medium animate-slide-in my-5 md:my-2">Hello, I'm</h4>
            <h1 className="text-portfolio-navy font-bold  text-3xl md:text-5xl">
              <span className="block mb-5">Jackson Cheriyan Kollareth</span>
              <span className="text-portfolio-lightYellow ">MERN Stack Developer</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0  my-5" style={{ animationDelay: "0.2s" }}>
              I build modern, responsive web applications using MongoDB, Express, React, and Node.js.
              Passionate about creating clean, efficient, and user-friendly experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start " style={{ animationDelay: "0.4s" }}>
              <Button 
                onClick={scrollToProjects}
                className="bg-portfolio-lightYellow hover:bg-portfolio-yellow text-white"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-portfolio-lightYellow text-portfolio-lightYellow hover:bg-portfolio-lightYellow/10"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start pt-7 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <a href="https://github.com/ChackzWolf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-lightYellow transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jacksoncheriyan05/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-lightYellow transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </motion.div>
           <motion.div 
           initial={{ opacity: 0, x: -100 }}
           whileInView={{ opacity: 2, x: 0 }}
           transition={{ duration: 0.6 }} className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center " style={{ animationDelay: "0.4s" }}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-portfolio-lightYellow/20 rounded-full"></div>
              <div className="absolute inset-4 bg-portfolio-lightYellow/40 rounded-full"></div>
              <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
                {/* Replace with actual profile image */}
                <img src="/profile/avatar.jpeg" alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
