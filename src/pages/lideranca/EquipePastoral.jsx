import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";

const HERO_IMG = "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/d78d66e81_generated_5021373e.png";

const pastores = [
{
  nome: "Rev. Willian Roberto da Silva",
  cargo: "Pastor Titular",
  descricao: "Responsável pela liderança espiritual da congregação, pregação dominical e aconselhamento pastoral.",
  foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/123177513_wil.png"
},
{
  nome: "Rev. Pastor Auxiliar",
  cargo: "Pastor Auxiliar",
  descricao: "Auxilia no ministério pastoral, coordena grupos pequenos e lidera os ministérios de jovens e adolescentes."
}];


export default function EquipePastoral() {
  return (
    <div>
      <PageHero
        title="Equipe Pastoral"
        subtitle="Nossos pastores dedicados ao serviço do Senhor e da congregação"
        image={HERO_IMG} />
      

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            overline="Liderança Espiritual"
            title="Nossos Pastores"
            description="Pastores chamados por Deus para apascentar, ensinar e cuidar do rebanho do Senhor." />
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastores.map((pastor, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-300">
              
                <div className="h-72 bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center overflow-hidden">
                  {pastor.foto ? (
                    <img src={pastor.foto} alt={pastor.nome} className="w-full h-full object-cover object-top" />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                      <span className="font-heading text-3xl font-bold text-primary">
                        {pastor.nome.split(" ").pop()[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs text-primary font-body font-semibold tracking-widest uppercase mb-2">
                    {pastor.cargo}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {pastor.nome}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {pastor.descricao}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}