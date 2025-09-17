import React from 'react';
import { RefreshCw, X, Eye, AlertCircle, TrendingDown, Clock } from 'lucide-react';

const Frustration = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4 mr-2" />
            Ciclo Vicioso
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O Ciclo Vicioso que Nunca Para
          </h2>
          <div className="flex justify-center items-center gap-2">
            <TrendingDown className="w-6 h-6 text-red-400" />
            <span className="text-gray-400 text-lg">3 passos que se repetem infinitamente</span>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 mb-8 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Clock className="w-6 h-6 text-red-400/50" />
          </div>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <RefreshCw className="w-16 h-16 text-red-400 animate-spin" style={{animationDuration: '3s'}} />
              <div className="absolute inset-0 bg-red-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start relative">
              <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-300 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 shadow-lg">
                <span className="text-sm">1</span>
              </div>
              <p className="text-lg text-gray-200">
                <strong className="text-blue-300">"Dessa vez vai ser diferente..."</strong><br />
                Você se prepara mentalmente, promete para si mesmo que vai conseguir controlar.
              </p>
            </div>
            
            <div className="flex items-start relative">
              <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-rose-500 to-rose-300 rounded-full"></div>
              <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 shadow-lg">
                <span className="text-sm">2</span>
              </div>
              <p className="text-lg text-gray-200">
                <strong className="text-rose-300">Mas o corpo não obedece...</strong><br />
                O prazer vem rápido demais, você perde o controle, e acontece de novo.
              </p>
            </div>
            
            <div className="flex items-start relative">
              <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-300 rounded-full"></div>
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 shadow-lg">
                <span className="text-sm">3</span>
              </div>
              <p className="text-lg text-gray-200">
                <strong className="text-red-300">O olhar da parceira...</strong><br />
                Ela diz que "está tudo bem", mas você vê nos olhos dela que algo está faltando.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-red-500/20 border-l-4 border-red-400 p-6 rounded-r-xl relative">
          <div className="absolute top-2 right-2">
            <AlertCircle className="w-6 h-6 text-red-400/50" />
          </div>
          <X className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <p className="text-lg font-medium text-red-200">
            <strong>E o ciclo se repete...</strong> Semana após semana, mês após mês.<br />
            Até quando você vai aceitar essa situação?
          </p>
          <div className="mt-4 flex justify-center">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frustration;