import React from 'react';
import { Shield, Clock, Target, Star, Zap, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center bg-rose-500/20 text-rose-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Método Comprovado • 100% Natural
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            O <span className="text-rose-400">Segredo dos Atores</span><br />
            Para Durar <span className="text-rose-400">Muito Mais na Cama</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8">
            Descubra como eliminar a ejaculação precoce<br />
            em apenas <span className="text-rose-400 font-bold">21 dias</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="flex items-center text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Clock className="w-6 h-6 text-rose-400 mr-3" />
            <span className="font-medium">21 dias de transformação</span>
          </div>
          <div className="flex items-center text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Target className="w-6 h-6 text-rose-400 mr-3" />
            <span className="font-medium">Controle total garantido</span>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-rose-400 fill-current" />
            <Star className="w-5 h-5 text-rose-400 fill-current" />
            <Star className="w-5 h-5 text-rose-400 fill-current" />
            <Star className="w-5 h-5 text-rose-400 fill-current" />
            <Star className="w-5 h-5 text-rose-400 fill-current" />
          </div>
          <span className="text-gray-400 text-sm">+2.847 homens transformados</span>
        </div>

        <div className="relative">
          <button className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold py-3 px-8 rounded-full text-base shadow-2xl transition-all duration-300 transform hover:scale-105 relative z-10">
            <Zap className="w-5 h-5 inline mr-2" />
            DESCOBRIR O MÉTODO AGORA
          </button>
          <div className="absolute inset-0 bg-rose-400/30 rounded-full blur-xl transform scale-110 -z-10"></div>
        </div>

        {/* Garantia */}
        <div className="flex items-center justify-center gap-2 mt-6 text-gray-400 text-sm">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span>Garantia de 30 dias • 100% seguro</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;