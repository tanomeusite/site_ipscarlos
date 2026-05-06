import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";

const HERO_IMG = "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/d78d66e81_generated_5021373e.png";

const presbiteros = [
  { nome: "Pb. Carlos André Azambuja", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/37543a233_Carlos-Andre-Azambuja.jpg" },
  { nome: "Pb. Elcio Andrade", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/19d34420e_Elcio-Andrade.jpg" },
  { nome: "Pb. Gabriel Casalecchi", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/e5e87627a_Gabriel-Casalecchi.jpg" },
  { nome: "Pb. Gabriel Penteado", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/9d5fee402_Gabrieo-Penteado.jpg" },
  { nome: "Pb. Marcos Mazzetti Siqueira", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/2900fd5df_Marcos-Mazzetti-Siqueira.jpg" },
  { nome: "Pb. Pedro Anchieta", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/daa02bcd8_Pedro-Anchieta.jpg" },
  { nome: "Pb. Samuel Gatti Robles", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/ba3939da3_Samuel-Gatti-Robles.jpg" },
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {presbiteros.map((presbitero, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-300"
              >
                <div className="h-52 bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center overflow-hidden">
                  {presbitero.foto ? (
                    <img src={presbitero.foto} alt={presbitero.nome} className="w-full h-full object-cover object-top" />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-primary/50" />
                    </div>
                  )}
                </div>
                <div className="p-4 text-center">
                  <span className="font-body text-sm text-foreground font-medium">{presbitero.nome}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}