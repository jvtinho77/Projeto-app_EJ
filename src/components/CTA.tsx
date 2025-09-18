import React from 'react';
import { ArrowRight, Clock, Heart } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

const CTA = () => {
  const { goToOffers } = useNavigation();
  
  const handleClick = () => {
    // Tentar múltiplas abordagens
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll para uma posição aproximada
      window.scrollTo({
        top: window.innerHeight * 4,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-8">
          <span className="text-rose-400">NÃO ESPERE</span><br />
          Perder Sua Mulher Para<br />
          <span className="text-rose-400">Outro Cara</span>
        </h2>
        
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8 border border-white/20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-rose-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Em 21 dias</h3>
              <p className="text-gray-200 text-sm">Você pode se tornar o homem que controla tudo entre quatro paredes</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-12 h-12 text-rose-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Satisfação total</h3>
              <p className="text-gray-200 text-sm">Para você e sua parceira, toda vez, sem exceção</p>
            </div>
            <div className="flex flex-col items-center">
              <ArrowRight className="w-12 h-12 text-rose-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Mudança real</h3>
              <p className="text-gray-200 text-sm">Não mais promessas vazias, apenas resultados concretos</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <p className="text-xl md:text-2xl font-medium">
            Enquanto você hesita, outros homens estão tomando ação...
          </p>
          <p className="text-lg text-yellow-200">
            <strong>Pergunta sincera:</strong> Até quando você vai aceitar ser medíocre na cama?
          </p>
        </div>

        <button 
          onClick={handleClick}
          className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-black py-2.5 px-6 rounded-full text-sm shadow-2xl transition-all duration-300 transform hover:scale-105 mb-6"
        >
          🔥 QUERO COMEÇAR O DESAFIO AGORA
        </button>

        <p className="text-sm text-gray-300">
          Acesso imediato • Resultados em 21 dias • Garantia total
        </p>
      </div>
    </section>
  );
};

export default CTA;