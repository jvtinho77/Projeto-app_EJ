import React from 'react';
import { Zap, Calendar, Trophy, Lock } from 'lucide-react';

const Solution = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-rose-500/20 text-rose-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Lock className="w-4 h-4 mr-2" />
            Método Exclusivo Revelado
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            <span className="text-rose-400">DESAFIO</span> DO CONTROLE<br />
            <span className="text-rose-400">MASCULINO</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-6">
            As técnicas secretas que os atores profissionais usam<br />
            e que as produtoras não querem que você saiba
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
            <Calendar className="w-10 h-10 text-rose-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">21 Dias</h3>
            <p className="text-gray-300 text-sm">
              Programa estruturado dia a dia para resultados garantidos
            </p>
          </div>
          
          <div className="text-center p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
            <Zap className="w-10 h-10 text-rose-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">Controle Total</h3>
            <p className="text-gray-300 text-sm">
              Você decide quando ejacular, não o contrário
            </p>
          </div>
          
          <div className="text-center p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
            <Trophy className="w-10 h-10 text-rose-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">Resultados</h3>
            <p className="text-gray-300 text-sm">
              Performance profissional na sua vida íntima
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-center mb-4">Como Funciona?</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">✓</div>
              <p className="text-gray-200 text-sm">Exercícios específicos baseados em técnicas de atores profissionais</p>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">✓</div>
              <p className="text-gray-200 text-sm">Treinamento mental para controle absoluto do prazer</p>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">✓</div>
              <p className="text-gray-200 text-sm">Método 100% natural, sem remédios ou procedimentos</p>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">✓</div>
              <p className="text-gray-200 text-sm">Resultados progressivos e duradouros em apenas 21 dias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;