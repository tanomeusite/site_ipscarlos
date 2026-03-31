import React from "react";
import { motion } from "framer-motion";
import { HandHeart } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";

const HERO_IMG = "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/55551051c_generated_9948c575.png";

const diaconos = [
  "Diácono 1",
  "Diácono 2",
  "Diácono 3",
  "Diácono 4",
  "Diácono 5",
  "Diácono 6",
];

export default function JuntaDiaconal() {
  return (
    <div>
      <PageHero
        title="Junta Diaconal"
        subtitle="Servindo com amor e compaixão"
        image={HERO_IMG}
      />

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            overline="Serviço e Cuidado"
            title="Junta Diaconal"
            description="Os diáconos e diaconisas são responsáveis pelo serviço de misericórdia, assistência social e cuidado prático com os membros e a comunidade."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8 mb-12"
          >
            <p className="font-body text-muted-foreground leading-relaxed text-center">
              A Junta Diaconal exerce o ministério de misericórdia na igreja, cuidando dos necessitados,
              organizando ações sociais, visitando enfermos e promovendo o bem-estar da congregação.
              São homens e mulheres dedicados ao serviço cristão, eleitos pela congregação.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {diaconos.map((nome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors duration-300"
              >
                <HandHeart className="w-5 h-5 text-primary shrink-0" />
                <span className="font-body text-sm text-foreground font-medium">{nome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}