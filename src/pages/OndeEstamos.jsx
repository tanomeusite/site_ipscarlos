import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";

const HERO_IMG = "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/c4901a454_generated_ce389ba4.png";

const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.0!2d-47.8936!3d-22.0195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDAxJzEwLjIiUyA0N8KwNTMnMzYuOSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890&q=Rua+Dona+Alexandrina,+1468,+S%C3%A3o+Carlos,+SP";

export default function OndeEstamos() {
  return (
    <div>
      <PageHero
        title="Onde Estamos"
        subtitle="Venha nos visitar — nossas portas estão abertas para você"
        image={HERO_IMG}
      />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            overline="Localização"
            title="Como Chegar"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden border border-border"
              style={{ height: "100%", minHeight: "500px" }}
            >
              <iframe
                title="Localização da Igreja Presbiteriana de São Carlos"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.123456!2d-47.89558!3d-22.01982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f5a5a9b4bb63%3A0x7c3d4e7b8c9e1f2a!2sR.+Dona+Alexandrina%2C+1468+-+Vila+Monteiro%2C+S%C3%A3o+Carlos+-+SP%2C+13574-620!5e0!3m2!1spt-BR!2sbr!4v1700000000001!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", width: "100%", height: "100%", minHeight: "500px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">Endereço</h3>
                    <p className="font-body text-muted-foreground">
                      Rua Dona Alexandrina, 1468<br />
                      São Carlos, SP
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">Horários</h3>
                    <div className="space-y-2 font-body text-muted-foreground text-sm">
                      <p><span className="text-foreground font-medium">UPA:</span> Sexta às 19h30</p>
                      <p><span className="text-foreground font-medium">UMP:</span> Sábado às 18h30</p>
                      <p><span className="text-foreground font-medium">Cultos:</span> 9h e 19h</p>
                      <p><span className="text-foreground font-medium">Escola Dominical:</span> 10h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">Secretaria</h3>
                    <div className="space-y-1 font-body text-muted-foreground text-sm">
                      <p>De segunda a sexta: das 8h às 12h30</p>
                      <p><span className="text-foreground font-medium">Telefone:</span> (16) 3371 8217</p>
                      <p><span className="text-foreground font-medium">E-mail:</span> secretaria@ipscarlos.org.br</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}