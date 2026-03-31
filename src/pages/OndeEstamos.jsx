import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Car } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";

const HERO_IMG = "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/c4901a454_generated_ce389ba4.png";

const position = [-22.0174, -47.8908];

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
              className="rounded-xl overflow-hidden border border-border h-[400px]"
            >
              <MapContainer
                center={position}
                zoom={16}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <strong>Igreja Presbiteriana de São Carlos</strong>
                    <br />
                    Rua Conde do Pinhal, 2076 — Centro
                  </Popup>
                </Marker>
              </MapContainer>
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
                      Rua Conde do Pinhal, 2076<br />
                      Centro — São Carlos, SP<br />
                      CEP: 13560-648
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
                      <p><span className="text-foreground font-medium">Domingos:</span> 9h30 (Matutino) e 18h30 (Vespertino)</p>
                      <p><span className="text-foreground font-medium">Quartas:</span> 19h30 (Estudo Bíblico)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">Telefone</h3>
                    <p className="font-body text-muted-foreground">(16) 3371-2009</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <Car className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">Estacionamento</h3>
                    <p className="font-body text-muted-foreground text-sm">
                      Estacionamento disponível nas proximidades da igreja. Há vagas na rua e estacionamentos privados próximos.
                    </p>
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