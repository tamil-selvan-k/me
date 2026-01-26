import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">MERN Stack developer</span> with a strong focus on React, Node.js, and backend scalability. I believe in writing clean, maintainable code that solves real problems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As an <span className="text-foreground font-medium">open-source contributor</span>, I have hands-on experience exploring real-world repositories, understanding production code, and contributing improvements. This has shaped my understanding of software engineering best practices.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through multiple internships, I've gained practical experience with <span className="text-foreground font-medium">cloud deployment, AWS services, and CI/CD pipelines</span>. I'm a strong problem solver with competitive programming exposure, having solved 1800+ problems.
              </p>
              
              <p className="text-lg text-primary font-medium">
                I am eager to learn new technologies, improve continuously, and take ownership of real-world products.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    B.Tech IT @ St. Joseph's
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    CGPA: 9.102
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    1800+ problems solved
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Multiple internships
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;