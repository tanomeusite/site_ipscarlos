import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";

const HISTORY_IMG = "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/ac1865a90_hist.jpg";

const timeline = [
  {
    year: "1875",
    title: "Fundação no Sítio Monjolinho",
    description:
      "No dia 25 de abril, o Rev. João Fernandes Dagama organizou oficialmente a igreja com a profissão de fé de sete membros iniciais. O evento ocorreu na residência de José Castilho de Moraes, marcando o nascimento da primeira comunidade presbiteriana da região.",
  },
  {
    year: "1877",
    title: "Primeiro Culto na Cidade",
    description:
      "Em 11 de junho, as atas registram a primeira referência a um culto realizado no perímetro urbano, em uma casa alugada na antiga Rua da Mata. Essa mudança foi estratégica para acomodar o crescente número de convertidos.",
  },
  {
    year: "1893",
    title: "Inauguração do Primeiro Templo",
    description:
      "A igreja deixou a 'Casa de Culto' para se instalar em seu próprio prédio na esquina das ruas São Sebastião e Dona Alexandrina. O edifício, de arquitetura clássica com torre neogótica, foi o primeiro templo evangélico edificado na cidade de São Carlos.",
  },
  {
    year: "1928",
    title: "Aquisição da Salva Histórica",
    description:
      "A igreja adquiriu uma salva de madeira para o recolhimento de dízimos e ofertas, objeto que se tornou uma relíquia preservada até hoje. A peça possui feltro no fundo para abafar o barulho das moedas, garantindo a reverência no culto.",
  },
  {
    year: "1931",
    title: "Construção do Pavilhão Rev. Bizarro",
    description:
      "Foi inaugurado o salão social para oferecer salas adequadas ao ensino da Escola Dominical. A construção contou com doações generosas de materiais e mão de obra dos próprios membros, consolidando o espaço para atividades educativas.",
  },
  {
    year: "1952",
    title: "Grande Reforma e Nova Fachada",
    description:
      "Após intensa campanha de arrecadação, o templo foi ampliado e ganhou sua atual arquitetura exuberante. A reinauguração em agosto revelou um estilo eclético com vitrais e uma torre imponente, refletindo o vigor da comunidade na época.",
  },
  {
    year: "1963",
    title: "Organização da Igreja de Vila Prado",
    description:
      "A congregação do bairro Vila Prado foi organizada como a segunda Igreja Presbiteriana da cidade. Esse fato marcou o início de um período de forte plantação de igrejas 'filhas' por diversos bairros de São Carlos.",
  },
  {
    year: "1975",
    title: "Centenário e Obra Social",
    description:
      "As celebrações dos 100 anos foram coroadas com a inauguração do Abrigo de Idosos Dona Helena Dornfeld em 29 de junho. A obra materializou o compromisso da igreja com a assistência social e o serviço à comunidade são-carlense.",
  },
  {
    year: "1980",
    title: "Centro Teológico Simonton",
    description:
      "A igreja passou a abrigar um seminário para formação de pastores e capacitação de líderes, transformando a Escola Dominical em um currículo teológico. O projeto atraiu estudantes de diversas regiões, tornando a igreja um polo de saber bíblico.",
  },
  {
    year: "2025",
    title: "Sesquicentenário e Expansão",
    description:
      "Ao completar 150 anos, a igreja celebrou seu jubileu com a plantação da Igreja Presbiteriana Encontro na região norte da cidade. O marco incluiu a criação de uma nova cápsula do tempo e a reafirmação do zelo pelo ensino bíblico.",
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