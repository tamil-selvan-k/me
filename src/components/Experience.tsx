import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Klickkit",
    description:
      "Optimized and enhanced responsive UIs for production applications while designing well-structured databases and developing scalable, optimized backend services using Node.js and Express. Collaborated closely with the testing team to validate features using Selenium and improve system reliability. Deployed applications to cloud infrastructure, gaining strong practical understanding of cloud environments and performance optimization.",
    highlights: ["Production Apps", "Node.js & Express", "Selenium Testing", "Cloud Deployment"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Vittae Money",
    description:
      "Improved backend performance by 60% through code optimization and efficient database queries. Built scalable backend services and worked extensively with AWS services including EC2 and S3. Contributed to production-ready systems handling real user traffic.",
    highlights: ["60% Performance Boost", "AWS (EC2, S3)", "Scalable Architecture", "Production Systems"],
  },
  {
    title: "Web Developer Intern",
    company: "GWING Software Technologies",
    description:
      "Built and refined frontend features for client projects. Worked extensively with JavaScript and CSS on real-world production projects, improving UI/UX and implementing responsive designs.",
    highlights: ["Frontend Development", "JavaScript & CSS", "Client Projects", "Responsive Design"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-12">Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{exp.company}</span>
                    </div>
                    
                    <h3 className="heading-md mb-3">{exp.title}</h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;