import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="heading-lg mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-12">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:tamilselvan.k.dev@gmail.com"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;