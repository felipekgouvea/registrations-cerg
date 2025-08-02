import { CheckCircle, Moon } from "lucide-react";
import Image from "next/image";

import Aluno_01 from "../../public/MEIO PERIODO.jpg";
import Aluno_02 from "../../public/MEIO PERIODO_01.jpg";
import Aluno_03 from "../../public/INFANTIL_01.jpg";
import Aluno_04 from "../../public/INFANTIL_04.jpg";

const MeioPeriodo = () => {
  return (
    <section
      id="meio-periodo"
      className="py-20 bg-gradient-to-br from-green-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Moon className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meio Período
          </h2>
          <p className="text-xl text-gray-600">
            Flexibilidade para sua família
          </p>
          <p className="text-xl text-gray-600">11h às 18h00</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl text-center font-bold text-gray-900">
                Horários Flexíveis
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                O Meio Período oferece a flexibilidade que sua família precisa,
                mantendo a qualidade pedagógica e o cuidado que caracterizam o
                CERG, em horários que se adaptam à sua rotina.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Almoço incluso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Mesma qualidade pedagógica
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Flexibilidade familiar</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div className="max-w-50">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      Investimento
                    </h4>
                    <p className="text-gray-600">
                      Mensalidade com desconto para pagamento até dia 05
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600">
                      R$ 900,00
                    </div>
                    <div className="text-gray-500 line-through text-lg">
                      R$ 1.020,00
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
                alt="Turma da manhã"
                width={200}
                height={250}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />
              <Image
                src={Aluno_02}
                alt="Atividades da tarde"
                width={200}
                height={180}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />
            </div>
            <div className="space-y-4 pt-8">
              <Image
                src={Aluno_04}
                alt="Recreio escolar"
                width={200}
                height={200}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />
              <Image
                src={Aluno_03}
                alt="Saída da escola"
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

export default MeioPeriodo;
