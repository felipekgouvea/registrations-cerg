import { Phone, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-200 to-red-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto space-y-12">
          {/* Main Title */}
          <div className="space-y-8">
            <Badge className="flex items-center justify-center bg-gradient-to-r from-red-100 to-red-200 text-red-800 px-8 py-4 text-lg font-semibold rounded-full border border-red-300 mx-auto">
              ✨ Matrículas Abertas 2026
            </Badge>

            <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Centro Educacional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700 block">
                Ribeiro Gouvêa
              </span>
            </h1>

            <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              <strong className="text-red-600">32 anos</strong> formando
              gerações com
              <strong className="text-red-600"> amor</strong>,
              <strong className="text-red-600"> dedicação</strong> e
              <strong className="text-red-600"> excelência pedagógica</strong>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link
              href="https://wa.me/5527999151404?text=Olá, Gostaria de agendar uma visita para conhecer melhor a instituição."
              className="flex gap-4 items-center justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-4 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <Calendar className="w-6 h-6 mr-2" />
              Agendar Visita Agora
            </Link>

            <Link
              href="https://wa.me/5527999151404?text=Olá, Gostaria de informações sobre o processo de matrícula."
              className="flex gap-4 items-center justify-center border-2 border-red-600 text-red-600 hover:bg-red-50 px-12 py-4 text-xl font-semibold rounded-2xl bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
