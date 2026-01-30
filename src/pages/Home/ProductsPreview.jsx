import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Textiles & Fabrics",
    description: "Premium cotton, silk, and synthetic fabrics",
    image: "🧵",
    gradient: "from-orange-400 to-rose-400",
  },
  {
    name: "Agricultural Products",
    description: "Spices, grains, and organic produce",
    image: "🌾",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    name: "Machinery & Equipment",
    description: "Industrial and agricultural machinery",
    image: "⚙️",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    name: "Handicrafts",
    description: "Traditional Indian artisan products",
    image: "🏺",
    gradient: "from-amber-400 to-orange-500",
  },
];

const ProductsPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
              Featured Categories
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Explore our diverse range of import-export products
            </p>
          </div>
          <Link to="/products" className="text-accent font-medium hover:underline">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 inline-block group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Link to="/products" className="block">
                <div className={`aspect-square rounded-2xl bg-gradient-to-br ${product.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                  <motion.span 
                    className="text-7xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring" }}
                  >
                    {product.image}
                  </motion.span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {product.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
