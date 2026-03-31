import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";

const HERO_IMG = "https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/55551051c_generated_9948c575.png";

const infoItems = [
  {
    icon: MapPin,
    title: "Endereço",
    text: "Rua Conde do Pinhal, 2076 — Centro, São Carlos - SP",
  },
  {
    icon: Phone,
    title: "Telefone",
    text: "(16) 3371-2009",
  },
  {
    icon: Mail,
    title: "E-mail",
    text: "contato@ipscarlos.org.br",
  },
  {
    icon: Clock,
    title: "Secretaria",
    text: "Segunda a Sexta: 9h às 17h",
  },
];

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
    setSending(false);
  };

  return (
    <div>
      <PageHero
        title="Contato"
        subtitle="Entre em contato conosco — será um prazer atendê-lo"
        image={HERO_IMG}
      />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            overline="Fale Conosco"
            title="Envie sua Mensagem"
            description="Tem alguma dúvida, pedido de oração ou gostaria de saber mais sobre a igreja? Preencha o formulário abaixo."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="font-body text-sm">Nome</Label>
                    <Input
                      id="nome"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      placeholder="Seu nome completo"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body text-sm">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="seu@email.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="font-body text-sm">Telefone</Label>
                  <Input
                    id="telefone"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    placeholder="(16) 99999-9999"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="font-body text-sm">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    placeholder="Escreva sua mensagem..."
                    required
                    className="bg-background border-border h-32 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full font-body text-sm tracking-wider uppercase"
                >
                  {sending ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-2 space-y-4"
            >
              {infoItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading text-sm font-bold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}