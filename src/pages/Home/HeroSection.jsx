import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Package, Ship } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0B1630]/90 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gold-light/5 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 "
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-white rounded-full"
            >
              <Globe className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">
                India's Trusted Trade Partner
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tigh text-white">
              Global Trade,
              <span className="text-yellow-600">Local Excellence</span>
            </h1>

            <p className="text-lg text-primary-foreground/70 max-w-xl leading-relaxed text-white">
              STBD bridges international markets with Indian businesses. We
              specialize in seamless import and export solutions, bringing the
              world's finest products to your doorstep.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-lg  transition border-2 border-white hover:bg-yellow-600 duration-200  hover:border-white "
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-lg  transition border-2 border-white hover:bg-white/25 duration-200 hover:text-white hover:border-white "
              >
                Get Quotes
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "50+", label: "Countries Served" },
                { value: "1000+", label: "Happy Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-3xl font-display font-bold text-yellow-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 text-yellow-600 border-dashed border-accent/30 rounded-full"
              />

              {/* Center Globe */}
              <div className="absolute inset-12  from-navy-light to-primary rounded-full flex items-center justify-center shadow-elevated">
                <Globe className="w-32 h-32 text-yellow-600 " />
              </div>
              {/* Floating Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 left-1/2 -translate-x-1/2 p-4 bg-card rounded-xl shadow-card bg-white text-yellow-600"
              >
                <Ship className="w-8 h-8 text-yellow-600" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-8 left-8 p-4 bg-card bg-white text-yellow-600 rounded-xl shadow-card"
              >
                <Package className="w-8 h-8 text-yellow-600" />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute bottom-16 bg-white text-yellow-600 right-8 p-4 bg-card rounded-xl shadow-card"
              >
                <Globe className="w-8 h-8 text-yellow-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(210 20% 98%)"
          />
        </svg>
      </div>
      <hr />
    </section>
  );
};

export default HeroSection;
