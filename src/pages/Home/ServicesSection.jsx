import React from "react";
import { motion } from "framer-motion";
import { Ship, Package, FileCheck, Truck, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Import Services",
    description: "Seamless importation of goods from international markets with complete documentation support.",
  },
  {
    icon: Package,
    title: "Export Services",
    description: "Expand your business globally with our comprehensive export solutions and market access.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Expert handling of all customs procedures ensuring smooth and timely clearance.",
  },
  {
    icon: Truck,
    title: "Logistics Support",
    description: "End-to-end logistics management from warehouse to final destination.",
  },
  {
    icon: Globe,
    title: "Market Research",
    description: "In-depth market analysis to identify the best opportunities for your products.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality checks ensuring only the finest products reach you.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background border-t-2 border-zinc-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium uppercase tracking-wider text-sm text-yellow-600">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive import-export solutions tailored to meet your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:shadow-2xl"
            >
              <div className="inline-flex p-3 bg-accent/10 rounded-xl mb-6 group-hover:bg-gradient-gold group-hover:shadow-gold transition-all duration-300">
                <service.icon className="w-10 h-10 text-yellow-600 group-hover:text-primary hover:text-white  transition-colors bg-yellow-200/50 rounded hover:bg-yellow-600 duration-300" />
              </div>
              <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
