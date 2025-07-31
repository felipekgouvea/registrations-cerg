import { Baby, CheckCircle } from "lucide-react";
import Image from "next/image";

import Image_01 from "../../public/aluno_01.png";
import Image_02 from "../../public/INFANTIL.jpg";
import Image_03 from "../../public/INFANTIL_05.jpg";
import Image_04 from "../../public/INFANTIL_03.jpg";

const Infantil = () => {
  return (
    <section
      id="educacao-infantil"
      className="py-20 bg-gradient-to-br from-pink-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Baby className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Educação Infantil
          </h2>
          <p className="text-gray-600">
            Desenvolvimento integral para crianças
          </p>
          <p className="text-gray-600">de 3 a 5 anos</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl text-center font-bold text-gray-900">
                Metodologia Lúdica e Acolhedora
              </h3>
              <p className="text-lg text-gray-700 text-justify leading-relaxed">
                Nossa Educação Infantil é baseada no brincar como forma de
                aprender. Desenvolvemos atividades que estimulam a criatividade,
                coordenação motora e habilidades socioemocionais das crianças.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0" />
                  <span className="text-gray-700">Maternal II (3 anos)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0" />
                  <span className="text-gray-700">PRÉ I (4 anos)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0" />
                  <span className="text-gray-700">PRÉ II (5 anos)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0" />
                  <span className="text-gray-700">Atividades lúdicas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0" />
                  <span className="text-gray-700">Aulas de Ballet ou Judô</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Aulas de Língua Inglesa e Musicalização
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div className="max-w-50">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      Investimento
                    </h4>
                    <p className="text-gray-600">
                      Mensalidade com desconto para pagamento até dia 05
                    </p>
                  </div>
                  <div className="text-right ">
                    <div className="text-xl font-bold text-pink-600">
                      R$ 530,00
                    </div>
                    <div className="text-gray-500 line-through text-lg">
                      R$ 550,00
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
                src={Image_01}
                alt="Crianças brincando na educação infantil"
                width={200}
                height={250}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />
              <Image
                src={Image_02}
                alt="Atividades lúdicas no maternal"
                width={200}
                height={180}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />
            </div>
            <div className="space-y-4 pt-8">
              <Image
                src={Image_03}
                alt="Crianças pintando e desenhando"
                width={200}
                height={200}
                className="rounded-3xl shadow-2xl object-cover w-full"
              />
              <Image
                src={Image_04}
                alt="Roda de conversa na educação infantil"
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

export default Infantil;
