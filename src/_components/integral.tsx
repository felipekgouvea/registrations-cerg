import { CheckCircle, Sun } from "lucide-react";
import Image from "next/image";

import Aluno_01 from "../../public/INTEGRAL.jpg";
import Aluno_02 from "../../public/INTEGRAL_01.jpg";
import Aluno_03 from "../../public/INTEGRAL_02.jpg";
import Aluno_04 from "../../public/INFANTIL_02.jpg";

const Integral = () => {
  return (
    <section
      id="periodo-integral"
      className="py-20 bg-gradient-to-br from-yellow-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Sun className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Período Integral
          </h2>
          <p className="text-xl text-gray-600">Cuidado e educação completa</p>
          <p className="text-xl text-gray-600">das 7h às 18h30</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl text-center font-bold text-gray-900">
                Desenvolvimento Integral
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                O Período Integral oferece uma rotina completa e equilibrada,
                combinando atividades pedagógicas, recreativas, esportivas e
                culturais, proporcionando o desenvolvimento pleno da criança.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">Horário: 7h às 18h30</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">Café da manhã e Almoço</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Atividades extracurriculares
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">Apoio pedagógico</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">Robótica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">Recreação dirigida</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl p-6">
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
                    <div className="text-xl font-bold text-yellow-600">
                      R$ 1.300,00
                    </div>
                    <div className="text-gray-500 line-through text-lg">
                      R$ 1.410,00
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
                alt="Crianças no refeitório"
                width={200}
                height={250}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />
              <Image
                src={Aluno_02}
                alt="Atividades recreativas"
                width={200}
                height={180}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />
            </div>
            <div className="space-y-4 pt-8">
              <Image
                src={Aluno_03}
                alt="Aula de ballet"
                width={200}
                height={200}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />
              <Image
                src={Aluno_04}
                alt="Aula de judô"
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

export default Integral;
