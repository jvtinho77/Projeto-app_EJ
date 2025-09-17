import React from 'react';
import { Users, CheckCircle, Shield, Award } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mais de <span className="text-rose-500">2.847 homens</span><br />
            já transformaram suas vidas
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-rose-500/20 rounded-xl border border-rose-400/30">
            <Users className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <div className="text-2xl font-bold text-white">2.847+</div>
            <p className="text-sm text-gray-300">Homens transformados</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur rounded-xl border border-white/20">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <div className="text-2xl font-bold text-white">97%</div>
            <p className="text-sm text-gray-300">Taxa de sucesso</p>
          </div>
          <div className="text-center p-6 bg-rose-500/20 rounded-xl border border-rose-400/30">
            <Shield className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <div className="text-2xl font-bold text-white">100%</div>
            <p className="text-sm text-gray-300">Método natural</p>
          </div>
          <div className="text-center p-6 bg-rose-500/20 rounded-xl border border-rose-400/30">
            <Award className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <div className="text-2xl font-bold text-white">21</div>
            <p className="text-sm text-gray-300">Dias para resultados</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-500/20 to-gray-500/20 rounded-2xl p-8 border border-rose-400/30 mb-8">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-rose-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Garantia Incondicional de Satisfação
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              Se em 30 dias você não notar uma melhoria significativa no seu controle,<br />
              devolvemos 100% do seu investimento, sem perguntas.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-lg font-bold text-white">✅ 100% Natural</div>
                <p className="text-sm text-gray-300">Sem remédios ou procedimentos</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">✅ Totalmente Discreto</div>
                <p className="text-sm text-gray-300">Ninguém precisa saber</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">✅ Cientificamente Comprovado</div>
                <p className="text-sm text-gray-300">Baseado em estudos reais</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
          <p className="text-lg text-gray-200">
            <strong>Última chance:</strong> O preço promocional expira em breve.<br />
            Não deixe a oportunidade de transformar sua vida escapar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;