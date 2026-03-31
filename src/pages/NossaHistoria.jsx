import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";

const HISTORY_IMG = "/__generating__/img_230937625d5e.png";

const timeline = [
  {
    year: "1895",
    title: "Fundação da Igreja",
    description:
      "A Igreja Presbiteriana de São Carlos foi fundada por missionários presbiterianos, trazendo a fé reformada para a região.",
  },
  {
    year: "1920",
    title: "Construção do Templo",
    description:
      "Com o crescimento da congregação, foi construído o templo na Rua Conde do Pinhal, que se tornaria referência na cidade.",
  },
  {
    year: "1960",
    title: "Expansão e Ministérios",
    description:
      "A igreja expandiu seus ministérios, criando grupos de jovens, escola dominical e ações sociais na comunidade.",
  },
  {
    year: "1990",
    title: "Renovação e Crescimento",
    description:
      "Período de renovação espiritual e crescimento numérico, com novas famílias se integrando à comunidade.",
  },
  {
    year: "Hoje",
    title: "Continuando a Missão",
    description:
      "Seguimos firmes no propósito de proclamar o Evangelho, servir à comunidade e glorificar a Deus em São Carlos.",
  },
];

export default function NossaHistoria() {
  return (
    <div>
      <PageHero
        title="Nossa História"
        subtitle="Mais de um século de fé, tradição e compromisso com o Evangelho"
        image={HISTORY_IMG}
      />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-lg text-muted-foreground leading-relaxed text-center mb-20"
          >
            A Igreja Presbiteriana de São Carlos tem uma rica história que remonta ao final do
            século XIX, quando missionários presbiterianos trouxeram a mensagem do Evangelho
            para esta região do interior paulista. Desde então, a igreja tem sido um farol de
            esperança e fé para gerações de são-carlenses.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                    <span className="font-heading text-2xl font-bold text-primary">{item.year}</span>
                    <h3 className="font-heading text-xl font-bold text-foreground mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}