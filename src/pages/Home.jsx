import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, MapPin, BookOpen, Users, Heart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";

const HERO_IMG = "/__generating__/img_1ec301887082.png";
const COMMUNITY_IMG = "/__generating__/img_8c5c43e31ea8.png";
const BIBLE_IMG = "/__generating__/img_f09a8693514d.png";

const services = [
  { day: "Domingos", time: "9h30", label: "Culto Matutino" },
  { day: "Domingos", time: "18h30", label: "Culto Vespertino" },
  { day: "Quartas", time: "19h30", label: "Estudo Bíblico" },
];

const features = [
  {
    icon: BookOpen,
    title: "Palavra de Deus",
    description: "Pregação fiel e expositiva das Escrituras Sagradas, fundamentada na Confissão de Fé de Westminster.",
  },
  {
    icon: Users,
    title: "Comunhão",
    description: "Uma comunidade acolhedora onde famílias e indivíduos encontram amizade, apoio e crescimento espiritual.",
  },
  {
    icon: Heart,
    title: "Serviço",
    description: "Comprometidos em servir a cidade de São Carlos com amor, compaixão e ações sociais transformadoras.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Igreja Presbiteriana de São Carlos" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary font-body text-xs font-semibold tracking-[0.3em] uppercase mb-6"
          >
            Igreja Presbiteriana de São Carlos
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Uma comunidade de{" "}
            <span className="text-primary italic">fé</span>,{" "}
            <span className="text-primary italic">amor</span> e{" "}
            <span className="text-primary italic">esperança</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Venha nos conhecer e faça parte de uma família que glorifica a Deus
            e transforma vidas através do Evangelho.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="font-body text-sm tracking-wider uppercase px-8">
              <Link to="/quem-somos">Conheça-nos</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-body text-sm tracking-wider uppercase px-8 border-primary/30 hover:bg-primary/10">
              <Link to="/onde-estamos">
                <MapPin className="w-4 h-4 mr-2" />
                Como Chegar
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Service Times */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            overline="Venha nos visitar"
            title="Horários de Culto"
            description="Nossas portas estão sempre abertas para você. Participe de nossos cultos e estudos bíblicos."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/30 transition-colors duration-300 group"
              >
                <Clock className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs text-primary font-body font-semibold tracking-widest uppercase mb-2">
                  {service.day}
                </p>
                <p className="font-heading text-3xl font-bold text-foreground mb-2">
                  {service.time}
                </p>
                <p className="font-body text-muted-foreground text-sm">
                  {service.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            overline="Nossos Pilares"
            title="No que Cremos"
            description="Fundamentados na Palavra de Deus e nas doutrinas reformadas, somos uma igreja comprometida com a fé histórica."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary font-body text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                Comunidade
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Faça parte de nossa família
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Nossa igreja tem grupos de jovens, casais, crianças e estudos bíblicos que se reúnem
                todas as semanas. Uma programação voltada para o estudo da Palavra, adoração ao nosso
                Deus e para momentos de comunhão e amizade.
              </p>
              <Button asChild variant="outline" className="font-body text-sm border-primary/30 hover:bg-primary/10">
                <Link to="/contato">
                  Entre em Contato <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={COMMUNITY_IMG}
                  alt="Comunidade da igreja"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary/20 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bible verse */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src={BIBLE_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-heading text-2xl md:text-3xl italic text-foreground leading-relaxed mb-6">
              "Porque onde estiverem dois ou três reunidos em meu nome, ali eu estou no meio deles."
            </p>
            <cite className="font-body text-sm text-primary tracking-widest uppercase not-italic">
              Mateus 18:20
            </cite>
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
}