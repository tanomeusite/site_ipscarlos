import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";

const HERO_IMG = "/__generating__/img_f09a8693514d.png";

const presbiteros = [
  "Presbítero 1",
  "Presbítero 2",
  "Presbítero 3",
  "Presbítero 4",
  "Presbítero 5",
  "Presbítero 6",
];

export default function Conselho() {
  return (
    <div>
      <PageHero
        title="Conselho"
        subtitle="O governo representativo da nossa igreja"
        image={HERO_IMG}
      />

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            overline="Governo da Igreja"
            title="Conselho Presbiteral"
            description="O Conselho é formado pelos pastores e presbíteros regentes, responsáveis pelo governo espiritual e administrativo da igreja."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8 mb-12"
          >
            <p className="font-body text-muted-foreground leading-relaxed text-center">
              O Conselho da Igreja Presbiteriana de São Carlos é composto por presbíteros eleitos
              pela congregação, que junto com os pastores, exercem o governo da igreja conforme os
              princípios bíblicos e a Constituição da Igreja Presbiteriana do Brasil. Suas
              atribuições incluem zelar pela doutrina, disciplina, administração e o bem-estar
              espiritual dos membros.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {presbiteros.map((nome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors duration-300"
              >
                <Shield className="w-5 h-5 text-primary shrink-0" />
                <span className="font-body text-sm text-foreground font-medium">{nome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}