import React from "react";
import { motion } from "framer-motion";
import { HandHeart } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";

const HERO_IMG = "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/55551051c_generated_9948c575.png";

const diaconos = [
  { nome: "Diac. Alexandre Galocha", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/9a1642722_Alexandre-Galocha.jpg" },
  { nome: "Diac. Alexandre Wilks", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/37233da9b_Alexandre-Wilks.jpg" },
  { nome: "Diac. Fernando Destro", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/9ae122df2_Fernando-Destro.jpg" },
  { nome: "Diac. Jayro Boy", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/d037c72eb_Jayro-Boy.jpg" },
  { nome: "Diac. Jonathas Queiroz", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/3022bcd54_Jonathas-Queiroz.jpg" },
  { nome: "Diac. Lucas Cortes", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/491ec9ec2_Lucas-Cortes.jpg" },
  { nome: "Diac. Márcio Martins", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/e7988577c_Marcio-Martins.jpg" },
  { nome: "Diac. Matheus Queiroz", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/8304e5710_Matheus-Queiroz.jpg" },
  { nome: "Diac. Pedro Henrique Anchieta", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/ee28f896c_Pedro-Henrique-Anchieta.jpg" },
  { nome: "Diac. Ricardo Pacheco", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/7c94a576b_Ricardo-Pacheco.jpg" },
  { nome: "Diac. Ronaldo Pereira", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/d7fb0b38b_Ronaldo-Pereira.jpg" },
  { nome: "Diac. Tabajara Soares", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/2ffdd44a4_tabajara-Soares.jpg" },
  { nome: "Diac. Valdemar Devesse", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/13b1b5ab3_Valdemar-Devesse.jpg" },
  { nome: "Diac. Wallan Matos", foto: "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/07fd76748_Wallan-Matos.jpg" },
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
            description="Os diáconos são oficiais eleitos e ordenados para, sob supervisão do Conselho, dedicar-se especialmente à arrecadação de ofertas piedosas, ao cuidado de pobres, doentes e inválidos, à manutenção da ordem e reverência nos cultos, e à fiscalização da boa ordem na Casa de Deus."
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
              São homens dedicados ao serviço cristão, eleitos pela congregação.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {diaconos.map((diacono, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-300"
              >
                <div className="h-52 bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center overflow-hidden">
                  {diacono.foto ? (
                    <img src={diacono.foto} alt={diacono.nome} className="w-full h-full object-cover object-top" />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                      <HandHeart className="w-8 h-8 text-primary/50" />
                    </div>
                  )}
                </div>
                <div className="p-4 text-center">
                  <span className="font-body text-sm text-foreground font-medium">{diacono.nome}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}