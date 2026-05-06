import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="https://media.base44.com/images/public/69cc1a1ac332652db5ee9850/b2f6f6396_logoipscarlos.png"
                alt="Igreja Presbiteriana de São Carlos"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-body">
              Igreja Presbiteriana de São Carlos. Uma comunidade de fé, amor e esperança,
              servindo a Deus e à cidade desde 1895.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Navegação
            </h4>
            <div className="space-y-3">
              {[
                { label: "Nossa História", path: "/nossa-historia" },
                { label: "Quem Somos", path: "/quem-somos" },
                { label: "Equipe Pastoral", path: "/lideranca/equipe-pastoral" },
                { label: "Onde Estamos", path: "/onde-estamos" },
                { label: "Contato", path: "/contato" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Horários */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Horários
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground font-body">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p><span className="text-foreground font-medium">UPA:</span> Sexta às 19h30</p>
                  <p><span className="text-foreground font-medium">UMP:</span> Sábado às 18h30</p>
                  <p><span className="text-foreground font-medium">Cultos:</span> 9h e 19h</p>
                  <p><span className="text-foreground font-medium">Escola Dominical:</span> 10h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Contato
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground font-body">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p>Rua Dona Alexandrina, 1468 — São Carlos, SP</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <p>(16) 3371 8217</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <p>secretaria@ipscarlos.org.br</p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p>Secretaria: Seg a Sex, 8h às 12h30</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Igreja Presbiteriana de São Carlos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}