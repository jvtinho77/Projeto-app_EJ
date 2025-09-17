import React from 'react';
import { Gift, Heart, Clock } from 'lucide-react';

const Bonus = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-rose-500/10 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Gift className="w-4 h-4 mr-2" />
            Bônus Exclusivo
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Técnica do <span className="text-rose-500">"Chocolatinho"</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            O método secreto para fazer sua parceira atingir o clímax<br />
            em até <span className="font-bold text-rose-500">5 minutos</span>
          </p>
        </div>

        <div className="bg-gradient-to-br from-rose-500/20 to-red-500/20 rounded-2xl p-8 border border-rose-400/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Agora Você Terá o Controle <span className="text-rose-500">Completo</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-red-500 mr-3" />
                  <p className="text-gray-200">Satisfação garantida para sua parceira</p>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-rose-500 mr-3" />
                  <p className="text-gray-200">Resultados rápidos e eficazes</p>
                </div>
                <div className="flex items-center">
                  <Gift className="w-6 h-6 text-rose-500 mr-3" />
                  <p className="text-gray-200">Técnica exclusiva nunca revelada antes</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-bold text-white mb-4">O que você vai receber:</h4>
              <ul className="space-y-2 text-gray-200">
                <li>• PDF completo com passo a passo</li>
                <li>• Vídeo demonstrativo exclusivo</li>
                <li>• Técnicas avançadas de estimulação</li>
                <li>• Guia de comunicação íntima</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 bg-rose-500/20 border border-rose-400/30 p-6 rounded-xl">
          <p className="text-lg font-medium text-rose-200">
            <strong>Imagine...</strong> Ter controle total sobre seu prazer E ainda enlouquecer sua parceira de prazer.<br />
            Essa é a combinação perfeita que todo homem sonha em ter!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bonus;