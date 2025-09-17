import React from 'react';
import { AlertTriangle, Heart, Frown, Zap, XCircle, TrendingDown } from 'lucide-react';

const PainSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Situações Comuns
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Você já se sentiu assim?
          </h2>
          <div className="flex justify-center items-center gap-2">
            <TrendingDown className="w-6 h-6 text-red-400" />
            <span className="text-gray-400 text-lg">3 situações que todo homem enfrenta</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-red-500/20 rounded-xl border border-red-500/30 relative overflow-hidden">
            <div className="absolute top-2 right-2">
              <XCircle className="w-6 h-6 text-red-400/50" />
            </div>
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-3">A Frustração</h3>
            <p className="text-gray-200 text-sm">
              Aquele momento constrangedor quando tudo acaba antes mesmo de começar...
            </p>
            <div className="mt-4 flex justify-center">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="text-center p-6 bg-red-500/20 rounded-xl border border-red-500/30 relative overflow-hidden">
            <div className="absolute top-2 right-2">
              <XCircle className="w-6 h-6 text-red-400/50" />
            </div>
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-3">A Vergonha</h3>
            <p className="text-gray-200 text-sm">
              Ver que você não consegue satisfazer completamente sua parceira...
            </p>
            <div className="mt-4 flex justify-center">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="text-center p-6 bg-red-500/20 rounded-xl border border-red-500/30 relative overflow-hidden">
            <div className="absolute top-2 right-2">
              <XCircle className="w-6 h-6 text-red-400/50" />
            </div>
            <Frown className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-3">O Medo</h3>
            <p className="text-gray-200 text-sm">
              A insegurança de que ela possa procurar satisfação em outro lugar...
            </p>
            <div className="mt-4 flex justify-center">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20 relative">
          <div className="absolute top-4 left-4">
            <Zap className="w-6 h-6 text-rose-400" />
          </div>
          <div className="absolute top-4 right-4">
            <Zap className="w-6 h-6 text-rose-400" />
          </div>
          <p className="text-lg text-gray-200 leading-relaxed">
            <strong className="text-rose-400">Eu sei exatamente como você se sente.</strong><br />
            Essa sensação de impotência... de não ter controle sobre o próprio corpo...<br />
            A vergonha que consome por dentro... O medo de decepcionar novamente...
          </p>
          <div className="mt-4 flex justify-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-rose-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-rose-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-rose-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;