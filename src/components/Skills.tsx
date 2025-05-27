
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Redux", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST API", "GraphQL", "Firebase"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "AWS", "Heroku", "Netlify", "Vercel", "CI/CD"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>`
  },
  {
    title: "Soft Skills",
    skills: ["Project Management", "Team Collaboration", "Problem Solving", "Communication", "Agile Methodology"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className="section-title text-portfolio-navy mb-16">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <Card key={category.title} className="card-hover border-none shadow-md animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-portfolio-lightYellow/10 flex items-center justify-center mr-3 text-portfolio-lightYellow" dangerouslySetInnerHTML={{ __html: category.icon }}></div>
                  <h3 className="text-xl font-semibold text-portfolio-navy">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
