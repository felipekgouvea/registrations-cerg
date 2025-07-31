import { CheckCircle, School } from "lucide-react";
import Image from "next/image";

import Aluno_01 from "../../public/ENSINO FUNDAMENTAL.jpg";
import Aluno_02 from "../../public/FUNDAMENTAL_01.jpg";
import Aluno_03 from "../../public/FUNDAMENTAL_02.jpg";
import Aluno_04 from "../../public/JUDO.jpg";

const Fundamental = () => {
  return (
    <section
      id="ensino-fundamental"
      className="py-20 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <School className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ensino Fundamental I
          </h2>
          <p className="text-gray-600">
            Formação sólida e preparação para o futuro - 1º ao 5º ano
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl text-center font-bold text-gray-900">
                Metodologia Ativa e Interdisciplinar
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                No Ensino Fundamental I, focamos no desenvolvimento das
                competências essenciais para a formação acadêmica e cidadã,
                preparando os alunos para os desafios futuros com uma base
                sólida de conhecimento.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">1º ao 5º ano</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Projetos interdisciplinares
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">Aulas de Musicalização</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">Aulas de Ballet ou Judô</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">Aulas de Língua Inglesa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Acompanhamento individual
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div className="max-w-60">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      Investimento
                    </h4>
                    <p className="text-gray-600">
                      Mensalidade com desconto para pagamento até dia 05
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      R$ 630,00
                    </div>
                    <div className="text-gray-500 line-through text-lg">
                      R$ 650,00
                    </div>
                    <div className="text-sm text-gray-600">por mês</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src={Aluno_01}
                alt="Alunos estudando no ensino fundamental"
                width={200}
                height={250}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />
              <Image
                src={Aluno_02}
                alt="Aula de matemática interativa"
                width={200}
                height={180}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />
            </div>
            <div className="space-y-4 pt-8">
              <Image
                src={Aluno_03}
                alt="Laboratório de ciências"
                width={200}
                height={200}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />
              <Image
                src={Aluno_04}
                alt="Biblioteca escolar"
                width={200}
                height={220}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fundamental;
