import { Button } from "@/_components/ui/button";
import { Card, CardContent } from "@/_components/ui/card";
import { Badge } from "@/_components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  BookOpen,
  CheckCircle,
  Calendar,
  FileText,
  CreditCard,
  GraduationCap,
  Facebook,
  Instagram,
  Youtube,
  Baby,
  School,
  Sun,
  Moon,
} from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/_components/ui/accordion";
import Header from "@/_components/header";
import Hero from "@/_components/hero";
import Infantil from "@/_components/infantil";
import Fundamental from "@/_components/fundamental";
import Integral from "@/_components/integral";
import MeioPeriodo from "@/_components/meio-periodo";

import LogoMarca from "../../public/cerg.png";
import Link from "next/link";

export default function CERGLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      {/* Header */}
      <Header />
      {/* Hero Banner */}
      <Hero />
      {/* Educação Infantil Section */}
      <Infantil />
      {/* Ensino Fundamental Section */}
      <Fundamental />
      {/* Período Integral Section */}
      <Integral />
      {/* Meio Período Section */}
      <MeioPeriodo />
      {/* How it Works */}
      <section
        id="como-funciona"
        className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Como Funciona a Matrícula
            </h2>
            <p className="text-xl text-gray-600">
              Processo simples e acolhedor em 4 passos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                title: "Agende sua visita",
                desc: "Conheça nossa estrutura, metodologia e sinta o carinho que temos pela educação",
                color: "from-red-500 to-red-600",
              },
              {
                icon: FileText,
                title: "Entregue a documentação",
                desc: "Documentos necessários para matrícula - nossa equipe te orienta em tudo",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: CreditCard,
                title: "Efetue o pagamento",
                desc: "Formas flexíveis de pagamento com condições especiais para sua família",
                color: "from-green-500 to-green-600",
              },
              {
                icon: GraduationCap,
                title: "Matrícula concluída",
                desc: "Bem-vindo à família CERG! Seu filho já faz parte da nossa história",
                color: "from-yellow-500 to-yellow-600",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div
                  className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-110`}
                >
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-xl"
            >
              Iniciar Processo de Matrícula
            </Button>
          </div>
        </div>
      </section>
      {/* Materials and Uniforms */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Materiais e Uniformes
            </h2>
            <p className=" text-gray-600">
              Tudo que seu filho precisa para um ano letivo completo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transition-all">
              <CardContent className="p-0 space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Material Didático
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Utilizamos materiais da renomada Editora FTD
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">
                          Educação Infantil
                        </span>
                        <p className="text-sm text-gray-600">
                          Coleção Saber Mais
                        </p>
                      </div>
                    </div>
                    <span className="text-red-600 font-bold text-xl">
                      R$ 679,00
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 ">
                          Ensino Fundamental
                        </span>
                        <p className="text-sm text-gray-600">
                          Coleção Quero Saber Mais
                        </p>
                      </div>
                    </div>
                    <span className="text-blue-600 font-bold ">
                      R$ 1.578,00
                    </span>
                  </div>

                  <div className="text-center p-4 bg-green-50 rounded-2xl">
                    <p className="text-green-700 font-semibold">
                      💳 Parcelamento em 6x no cartão
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Sem juros para facilitar o pagamento
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Entrega do material será realizada na escola
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Link para compra dos Livros
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transition-all">
              <CardContent className="p-0 space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Uniformes Escolares
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Uniformes completos e confortáveis para todas as atividades
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl">
                  <p className="font-bold text-gray-900 text-xl mb-2">
                    Malharia Ásia Uniformes
                  </p>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="text-green-600 font-semibold text-lg">
                      (27) 99276-9000
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Required Documents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Documentos Necessários
            </h2>
            <p className="text-gray-600">
              Prepare estes documentos para agilizar sua matrícula
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { doc: "Foto 3x4", icon: "📷" },
              { doc: "Certidão de nascimento do aluno(a)", icon: "📄" },
              { doc: "RG e CPF do responsável", icon: "🆔" },
              { doc: "Declaração Escolar 2025", icon: "📋" },
              { doc: "Histórico Escolar (2º ao 5º ano)", icon: "📚" },
              { doc: "Declaração de Vacina", icon: "💉" },
              { doc: "Comprovante de residência", icon: "🏠" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-3xl">{item.icon}</div>
                <div className="flex items-center space-x-3 flex-1">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item.doc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl max-w-4xl mx-auto">
            <p className="text-blue-800 font-semibold text-lg">
              💡 Nossa equipe está pronta para te ajudar com qualquer dúvida
              sobre a documentação!
            </p>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className=" text-gray-600">
              Esclarecemos as principais dúvidas dos pais sobre o CERG
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-red-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      Qual a idade mínima para matrícula na Educação Infantil?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="pl-12">
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Aceitamos crianças a partir de 3 anos completos até 31 de
                      março do ano letivo. Nossa Educação Infantil é dividida
                      em:
                      <br />
                      <br />
                      <strong>Maternal II:</strong> 3 anos
                      <br />
                      <strong>PRÉ I:</strong> 4 anos
                      <br />
                      <strong>PRÉ II:</strong> 5 anos
                      <br />
                      <br />
                      Todas as turmas seguem uma metodologia lúdica e
                      acolhedora, respeitando o desenvolvimento individual de
                      cada criança.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-red-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      Quais são os horários de funcionamento da escola?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="pl-12">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Período Integral:</strong> 7h às 18h30
                      <br />
                      <br />
                      <strong>Meío Período:</strong> 11h às 18h30
                      <br />
                      <br />
                      <strong>Vespertino:</strong>
                      <br />
                      <br />
                      <strong>Infantil:</strong> 13h às 17h
                      <br />
                      <strong>Fundamental:</strong> 13h às 17h20
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-red-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      Posso visitar a escola antes de fazer a matrícula?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="">
                    <p className="text-gray-700 leading-relaxed">
                      Claro! Incentivamos muito a visita prévia:
                      <br />
                      <br />
                      <strong>Agendamento fácil:</strong> Ligue ou mande
                      WhatsApp para agendar
                      <br />
                      <strong>Tour completo:</strong> Conheça todas as
                      instalações e salas
                      <br />
                      <strong>Conversa com a direção:</strong> Esclareça todas
                      as dúvidas
                      <br />
                      <strong>Horários flexíveis:</strong> Manhã ou tarde,
                      conforme sua disponibilidade
                      <br />
                      <br />A visita é fundamental para que vocês se sintam
                      seguros e confiantes na escolha. Será um prazer
                      recebê-los!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-red-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      A escola oferece alimentação para os alunos?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="">
                    <p className="text-gray-700 leading-relaxed">
                      Claro! Incentivamos muito a visita prévia:
                      <br />
                      <br />
                      <strong>Agendamento fácil:</strong> Ligue ou mande
                      WhatsApp para agendar
                      <br />
                      <strong>Tour completo:</strong> Conheça todas as
                      instalações e salas
                      <br />
                      <strong>Conversa com a direção:</strong> Esclareça todas
                      as dúvidas
                      <br />
                      <strong>Horários flexíveis:</strong> Manhã ou tarde,
                      conforme sua disponibilidade
                      <br />
                      <br />A visita é fundamental para que vocês se sintam
                      seguros e confiantes na escolha. Será um prazer
                      recebê-los!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-red-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      Como funciona o processo de matrícula?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="">
                    <p className="text-gray-700 leading-relaxed">
                      Claro! Incentivamos muito a visita prévia:
                      <br />
                      <br />
                      <strong>Agendamento fácil:</strong> Ligue ou mande
                      WhatsApp para agendar
                      <br />
                      <strong>Tour completo:</strong> Conheça todas as
                      instalações e salas
                      <br />
                      <strong>Conversa com a direção:</strong> Esclareça todas
                      as dúvidas
                      <br />
                      <strong>Horários flexíveis:</strong> Manhã ou tarde,
                      conforme sua disponibilidade
                      <br />
                      <br />A visita é fundamental para que vocês se sintam
                      seguros e confiantes na escolha. Será um prazer
                      recebê-los!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-red-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">6</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      A escola tem uniforme obrigatório?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="">
                    <p className="text-gray-700 leading-relaxed">
                      Claro! Incentivamos muito a visita prévia:
                      <br />
                      <br />
                      <strong>Agendamento fácil:</strong> Ligue ou mande
                      WhatsApp para agendar
                      <br />
                      <strong>Tour completo:</strong> Conheça todas as
                      instalações e salas
                      <br />
                      <strong>Conversa com a direção:</strong> Esclareça todas
                      as dúvidas
                      <br />
                      <strong>Horários flexíveis:</strong> Manhã ou tarde,
                      conforme sua disponibilidade
                      <br />
                      <br />A visita é fundamental para que vocês se sintam
                      seguros e confiantes na escolha. Será um prazer
                      recebê-los!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-red-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">7</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      Como os pais acompanham o desenvolvimento dos alunos?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="">
                    <p className="text-gray-700 leading-relaxed">
                      Claro! Incentivamos muito a visita prévia:
                      <br />
                      <br />
                      <strong>Agendamento fácil:</strong> Ligue ou mande
                      WhatsApp para agendar
                      <br />
                      <strong>Tour completo:</strong> Conheça todas as
                      instalações e salas
                      <br />
                      <strong>Conversa com a direção:</strong> Esclareça todas
                      as dúvidas
                      <br />
                      <strong>Horários flexíveis:</strong> Manhã ou tarde,
                      conforme sua disponibilidade
                      <br />
                      <br />A visita é fundamental para que vocês se sintam
                      seguros e confiantes na escolha. Será um prazer
                      recebê-los!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-red-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">8</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      Posso visitar a escola antes de fazer a matrícula?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="">
                    <p className="text-gray-700 leading-relaxed">
                      Claro! Incentivamos muito a visita prévia:
                      <br />
                      <br />
                      <strong>Agendamento fácil:</strong> Ligue ou mande
                      WhatsApp para agendar
                      <br />
                      <strong>Tour completo:</strong> Conheça todas as
                      instalações e salas
                      <br />
                      <strong>Conversa com a direção:</strong> Esclareça todas
                      as dúvidas
                      <br />
                      <strong>Horários flexíveis:</strong> Manhã ou tarde,
                      conforme sua disponibilidade
                      <br />
                      <br />A visita é fundamental para que vocês se sintam
                      seguros e confiantes na escolha. Será um prazer
                      recebê-los!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-red-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">9</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      Posso visitar a escola antes de fazer a matrícula?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="">
                    <p className="text-gray-700 leading-relaxed">
                      Claro! Incentivamos muito a visita prévia:
                      <br />
                      <br />
                      <strong>Agendamento fácil:</strong> Ligue ou mande
                      WhatsApp para agendar
                      <br />
                      <strong>Tour completo:</strong> Conheça todas as
                      instalações e salas
                      <br />
                      <strong>Conversa com a direção:</strong> Esclareça todas
                      as dúvidas
                      <br />
                      <strong>Horários flexíveis:</strong> Manhã ou tarde,
                      conforme sua disponibilidade
                      <br />
                      <br />A visita é fundamental para que vocês se sintam
                      seguros e confiantes na escolha. Será um prazer
                      recebê-los!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-10"
                className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-red-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">10</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      Posso visitar a escola antes de fazer a matrícula?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="">
                    <p className="text-gray-700 leading-relaxed">
                      Claro! Incentivamos muito a visita prévia:
                      <br />
                      <br />
                      <strong>Agendamento fácil:</strong> Ligue ou mande
                      WhatsApp para agendar
                      <br />
                      <strong>Tour completo:</strong> Conheça todas as
                      instalações e salas
                      <br />
                      <strong>Conversa com a direção:</strong> Esclareça todas
                      as dúvidas
                      <br />
                      <strong>Horários flexíveis:</strong> Manhã ou tarde,
                      conforme sua disponibilidade
                      <br />
                      <br />A visita é fundamental para que vocês se sintam
                      seguros e confiantes na escolha. Será um prazer
                      recebê-los!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5527999151404?text=Olá, Gostaria de informações sobre o processo de matrícula."
                className="flex gap-4 items-center justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-xl font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={LogoMarca}
                  alt="Centro Educacional Ribeiro Gouvêa - CERG"
                  width={140}
                  height={40}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                32 anos formando gerações com amor, dedicação, qualidade e
                excelência pedagógica. Seu filho merece o melhor!
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg text-red-400">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">(27) 9.9915-1404</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">
                    secretaria@ceribeirogouvea.com.br
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">
                    Rua João Bubach, 95, Cruzeiro do Sul - Cariacica/ES
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg text-red-400">
                Horário de Atendimento
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">
                    Segunda a Sexta - 7h às 18h
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg text-red-400">Redes Sociais</h4>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 cursor-pointer transition-all transform hover:scale-110 shadow-lg">
                  <a href="https://instagram.com/ribeiro.gouvea">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Siga-nos e acompanhe o dia a dia dos nossos alunos!
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Centro Educacional Ribeiro Gouvêa.
            </p>
            <p className="text-gray-400">Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
