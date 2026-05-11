import React from "react";
import { motion } from "framer-motion";
import { Music, Baby, Users, BookOpen, Heart, Mic } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";

const HERO_IMG = "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/c5c0bffde_capainterno.jpg";

const ministerios = [
  {
    icon: Music,
    nome: "Louvor e Adoração",
    descricao: "Grupo de louvor que conduz a congregação em adoração nos cultos e eventos especiais.",
  },
  {
    icon: Users,
    nome: "Jovens e Adolescentes",
    descricao: "Encontros semanais com estudo bíblico, comunhão e atividades voltadas para a juventude.",
  },
  {
    icon: Baby,
    nome: "Infantil",
    descricao: "Escola dominical e atividades para crianças, ensinando os princípios da fé de forma lúdica.",
  },
  {
    icon: BookOpen,
    nome: "Educação Cristã",
    descricao: "Escola dominical para adultos, estudos bíblicos e cursos de formação teológica.",
  },
  {
    icon: Heart,
    nome: "Ação Social",
    descricao: "Projetos e ações voltados para atender necessidades da comunidade são-carlense.",
  },
  {
    icon: Mic,
    nome: "Missões",
    descricao: "Apoio a missionários e projetos missionários nacionais e internacionais.",
  },
];

export default function Ministerios() {
  return (
    <div>
      <PageHero
        title="Ministérios"
        subtitle="Servindo a Deus e à comunidade em diversas áreas"
        image={HERO_IMG}
      />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            overline="Nossas Áreas de Atuação"
            title="Ministérios da Igreja"
            description="Cada ministério é uma oportunidade de servir a Deus usando os dons que Ele nos deu."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministerios.map((min, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <min.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {min.nome}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {min.descricao}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}