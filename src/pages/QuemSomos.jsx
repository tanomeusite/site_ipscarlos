import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";

const HERO_IMG = "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/c4901a454_generated_ce389ba4.png";

const values = [
  "Autoridade das Escrituras Sagradas",
  "Soberania de Deus em todas as coisas",
  "Salvação pela graça, mediante a fé",
  "Sacerdócio universal dos crentes",
  "Governo representativo da igreja",
  "Adoração centrada em Deus",
  "Compromisso com a família",
  "Serviço à comunidade",
];

export default function QuemSomos() {
  return (
    <div>
      <PageHero
        title="Quem Somos"
        subtitle="Conheça nossa missão, visão e os valores que nos guiam"
        image={HERO_IMG}
      />

      {/* Mission, Vision */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Nossa Missão
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Glorificar a Deus e desfrutar dele para sempre, proclamando o Evangelho de Jesus
              Cristo, edificando os santos na fé reformada e servindo à comunidade de São Carlos
              com amor e compaixão.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Nossa Visão
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Ser uma comunidade cristã relevante na cidade de São Carlos, reconhecida pela
              fidelidade à Palavra de Deus, pela excelência no culto, pelo amor fraternal
              e pelo impacto positivo na sociedade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            overline="O que nos guia"
            title="Nossos Valores"
            description="Somos uma igreja reformada, fundamentada nas Escrituras e nas doutrinas da graça."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-4 bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors duration-300"
              >
                <Gem className="w-5 h-5 text-primary shrink-0" />
                <span className="font-body text-sm text-foreground">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the denomination */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            overline="Tradição Reformada"
            title="Igreja Presbiteriana do Brasil"
          />
          <p className="font-body text-muted-foreground leading-relaxed">
            Fazemos parte da Igreja Presbiteriana do Brasil (IPB), uma denominação cristã
            evangélica de tradição reformada, fundamentada na Bíblia Sagrada e nos Símbolos
            de Fé de Westminster. A IPB é a maior igreja presbiteriana da América Latina,
            com mais de um milhão de membros, e tem como objetivo a glória de Deus e a
            propagação do Evangelho de Jesus Cristo.
          </p>
        </div>
      </section>
    </div>
  );
}