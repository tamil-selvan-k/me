import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "There You Go",
    subtitle: "Smart Travel & Safety Platform",
    description:
      "A comprehensive travel and safety solution built for Smart India Hackathon. Features real-time safety alerts, intelligent route planning, and emergency response integration.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/tamil-selvan-k",
    featured: true,
  },
  {
    title: "WhatsApp Clone",
    subtitle: "Real-time Messaging UI",
    description:
      "A pixel-perfect clone of WhatsApp's UI with focus on frontend architecture. Implements real-time messaging patterns and responsive design.",
    tech: ["JavaScript", "CSS", "HTML", "UI/UX"],
    github: "https://github.com/tamil-selvan-k",
  },
  {
    title: "JapanTripGuide",
    subtitle: "Interactive Travel Application",
    description:
      "A travel-focused web application with interactive UI elements, featuring destination guides, itinerary planning, and local recommendations.",
    tech: ["JavaScript", "CSS", "Responsive Design"],
    github: "https://github.com/tamil-selvan-k",
  },
  {
    title: "Technical Chatbot",
    subtitle: "AI-Powered Learning Assistant",
    description:
      "A lightweight chatbot designed for technical learning. Provides optimized responses using local data processing for quick, relevant answers.",
    tech: ["JavaScript", "NLP", "Data Processing"],
    github: "https://github.com/tamil-selvan-k",
  },
  {
    title: "ShadowTraceAI",
    subtitle: "Security & AI Project",
    description:
      "A creative project exploring the intersection of AI and security concepts. Implements tracing and analysis features with modern web technologies.",
    tech: ["React", "AI/ML", "Security"],
    github: "https://github.com/tamil-selvan-k",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-12">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="heading-md group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary">{project.subtitle}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;