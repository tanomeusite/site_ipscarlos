import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ overline, title, description, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {overline && (
        <span className="inline-block text-primary font-body text-xs font-semibold tracking-[0.25em] uppercase mb-4">
          {overline}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${light ? "text-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
      <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
    </motion.div>
  );
}