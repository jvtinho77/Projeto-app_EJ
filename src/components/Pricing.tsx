import React from 'react';
import { Check, Star, Crown, Shield } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 px-4 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Escolha Seu Plano de Transformação
          </h2>
          <p className="text-xl text-gray-300">
            Investimento mínimo para uma mudança de vida máxima
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Plano Essencial */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 relative">
            <div className="text-center mb-6">
              <Shield className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Essencial</h3>
              <div className="text-3xl font-black text-white">
                R$ <span className="text-4xl">19</span>,90
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-200">Acesso ao aplicativo completo</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-200">Exercícios secretos dos atores</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-200">Desafio completo de 21 dias</span>
              </li>
            </ul>
            
            <a href="https://pay.cakto.com.br/xy3axpc_573634" target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                COMEÇAR AGORA
              </button>
            </a>
          </div>

          {/* Plano Completo - Popular */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border-2 border-rose-500 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-rose-500 text-white font-bold py-2 px-6 rounded-full text-sm">
                MAIS POPULAR
              </span>
            </div>
            
            <div className="text-center mb-6">
              <Star className="w-12 h-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Completo</h3>
              <div className="text-3xl font-black text-white">
                R$ <span className="text-4xl text-rose-500">29</span>,90
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-200">Tudo do Plano Essencial</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-200 font-medium">Bônus "Técnica do Chocolatinho"</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-200">PDF completo + Vídeo exclusivo</span>
              </li>
            </ul>
            
            <a href="https://pay.cakto.com.br/5ocv77c_573642" target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                QUERO O COMPLETO
              </button>
            </a>
          </div>

          {/* Plano Premium */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 relative">
            <div className="text-center mb-6">
              <Crown className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
              <div className="text-3xl font-black text-white">
                R$ <span className="text-4xl text-red-500">39</span>,90
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-200">Tudo do Plano Completo</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-200 font-medium">Acompanhamento médico especializado</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-200">Chamadas individuais de suporte</span>
              </li>
            </ul>
            
            <a href="https://pay.cakto.com.br/65795sq_573646" target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                QUERO O PREMIUM
              </button>
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Pagamento único • Acesso vitalício • Garantia de satisfação</p>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-400">
            <span>🔒 Pagamento 100% Seguro</span>
            <span>•</span>
            <span>💳 Cartão ou PIX</span>
            <span>•</span>
            <span>📱 Acesso Imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;