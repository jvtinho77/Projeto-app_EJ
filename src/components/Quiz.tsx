import React, { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle, Loader2, ArrowRight } from 'lucide-react';

interface UserData {
  nome: string;
  email: string;
  telefone: string;
}

interface QuizAnswer {
  questionId: number;
  answer: string;
}

const questions = [
  {
    id: 1,
    question: "Qual é a sua idade?",
    options: [
      "Menos de 20 anos",
      "20 a 29 anos", 
      "30 a 39 anos",
      "40 a 49 anos",
      "50 anos ou mais"
    ]
  },
  {
    id: 2,
    question: "Como você descreveria seu corpo hoje?",
    options: [
      "Magro",
      "Normal",
      "Acima do peso",
      "Musculoso"
    ]
  },
  {
    id: 3,
    question: "Você pratica atividade física regularmente?",
    options: [
      "Sim, todos os dias",
      "Sim, algumas vezes por semana",
      "Raramente",
      "Nunca"
    ]
  },
  {
    id: 4,
    question: "Você costuma consumir bebidas alcoólicas?",
    options: [
      "Sim, frequentemente",
      "De vez em quando",
      "Raramente",
      "Nunca"
    ]
  },
  {
    id: 5,
    question: "Você fuma?",
    options: [
      "Sim",
      "Não"
    ]
  },
  {
    id: 6,
    question: "Você toma algum tipo de antidepressivo ou medicação controlada?",
    options: [
      "Sim",
      "Não"
    ]
  },
  {
    id: 7,
    question: "Como você avaliaria o seu nível de estresse diário?",
    options: [
      "Muito alto",
      "Médio",
      "Baixo",
      "Quase nenhum"
    ]
  },
  {
    id: 8,
    question: "Você já tentou usar algum tipo de suplemento ou medicamento para melhorar seu desempenho?",
    options: [
      "Sim, vários",
      "Sim, uma vez ou outra",
      "Não, nunca"
    ]
  },
  {
    id: 9,
    question: "Em média, quanto tempo você costuma durar antes da ejaculação?",
    options: [
      "Menos de 1 minuto",
      "Entre 1 e 3 minutos",
      "Entre 3 e 5 minutos",
      "Mais de 5 minutos"
    ]
  },
  {
    id: 10,
    question: "Qual desses objetivos mais combina com você?",
    options: [
      "Ter mais controle durante a relação",
      "Aumentar a confiança com minha parceira",
      "Manter meu relacionamento forte",
      "Aprender técnicas novas"
    ]
  }
];

const exercises = [
  {
    id: 1,
    title: "Exercício 1 – Kegel (assoalho pélvico)",
    description: "Como fazer: Contraia os músculos do assoalho pélvico (como interromper o xixi) por 5 segundos, depois relaxe 5 segundos.",
    repetitions: "Repetições: 3 séries de 10–15 repetições por dia",
    benefit: "Benefício: Fortalece músculos que controlam a ejaculação"
  },
  {
    id: 2,
    title: "Exercício 2 – Respiração profunda / controle da excitação",
    description: "Como fazer: Inspire contando até 4, segure 4, solte contando até 6",
    repetitions: "Repetições: 5–10 minutos, 2 vezes por dia",
    benefit: "Benefício: Reduz ansiedade, aumenta foco e ajuda a controlar a excitação sexual"
  },
  {
    id: 3,
    title: "Exercício 3 – Prancha (Core / estabilidade)",
    description: "Como fazer: Apoie cotovelos e pés no chão, corpo reto da cabeça aos pés. Segure 20–40 segundos, mantendo respiração controlada",
    repetitions: "Repetições: 3 séries por dia",
    benefit: "Benefício: Fortalece core, melhora postura e resistência muscular durante o sexo"
  },
  {
    id: 4,
    title: "Exercício 4 – Ponte / Glúteo e Core",
    description: "Como fazer: Deite de costas, pés no chão, levante quadril formando linha reta joelhos-ombros, segure 3–5 segundos, desça devagar",
    repetitions: "Repetições: 3 séries de 12–15 repetições",
    benefit: "Benefício: Fortalece glúteos e core, músculos importantes para controle durante o sexo"
  },
  {
    id: 5,
    title: "Exercício 5 – Alongamento de quadríceps e psoas (quadril)",
    description: "Como fazer: Fique em pé ou ajoelhado, leve quadril pra frente, alongando frente da coxa, segure 20–30 segundos. Troque o lado",
    repetitions: "Repetições: 2–3 vezes por lado, por dia",
    benefit: "Benefício: Relaxa quadris e psoas, reduz tensão e ansiedade muscular, melhorando controle sexual"
  }
];

type QuizStep = 'form' | 'questions' | 'analyzing' | 'results';

interface QuizProps {
  onComplete?: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<QuizStep>('form');
  const [userData, setUserData] = useState<UserData>({ nome: '', email: '', telefone: '' });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const totalQuestions = questions.length;
  const progress = currentStep === 'form' ? 0 : 
                   currentStep === 'questions' ? ((currentQuestion + 1) / totalQuestions) * 100 :
                   currentStep === 'analyzing' ? 90 : 100;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.nome && userData.email && userData.telefone) {
      setCurrentStep('questions');
    }
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      const newAnswer: QuizAnswer = {
        questionId: questions[currentQuestion].id,
        answer: selectedAnswer
      };
      
      setAnswers([...answers, newAnswer]);
      
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
      } else {
        // Última pergunta - enviar dados para webhook
        sendDataToWebhook();
      }
    }
  };

  const formatPhoneNumber = (phone: string) => {
    // Remove todos os caracteres não numéricos
    let cleanPhone = phone.replace(/\D/g, '');
    
    // Se começar com 55 (código do Brasil), remove o 55
    if (cleanPhone.startsWith('55') && cleanPhone.length > 10) {
      cleanPhone = cleanPhone.substring(2);
    }
    
    return cleanPhone;
  };

  const sendDataToWebhook = async () => {
    setIsLoading(true);
    
    const dataToSend = {
      ...userData,
      telefone: formatPhoneNumber(userData.telefone), // Formatar telefone
      answers: answers.concat({
        questionId: questions[currentQuestion].id,
        answer: selectedAnswer
      })
    };

    try {
      await fetch('https://n8n.blackmaind.shop/webhook/Dados_QUiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }

    setCurrentStep('analyzing');
    setIsLoading(false);
    
    // Delay de 8 segundos
    setTimeout(() => {
      setCurrentStep('results');
    }, 8000);
  };

  const handleAccessMethod = () => {
    // Continuar para o site principal
    if (onComplete) {
      onComplete();
    } else {
      window.location.href = '#pricing';
    }
  };

  const renderForm = () => (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Vamos iniciar sua avaliação
        </h2>
        <p className="text-gray-300">
          Preencha os dados abaixo para começar
        </p>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Nome
          </label>
          <input
            type="text"
            value={userData.nome}
            onChange={(e) => setUserData({...userData, nome: e.target.value})}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-rose-400 focus:bg-white/20 transition-all"
            placeholder="Seu nome completo"
            required
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            E-mail
          </label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-rose-400 focus:bg-white/20 transition-all"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Telefone
          </label>
          <input
            type="tel"
            value={userData.telefone}
            onChange={(e) => setUserData({...userData, telefone: e.target.value})}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-rose-400 focus:bg-white/20 transition-all"
            placeholder="(11) 99999-9999"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          Começar avaliação
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </form>
    </div>
  );

  const renderQuestions = () => (
    <div className="max-w-2xl mx-auto">
      {/* Barra de progresso */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-300 mb-2">
          <span>Pergunta {currentQuestion + 1} de {totalQuestions}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-rose-500 to-rose-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Pergunta */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          {questions[currentQuestion].question}
        </h2>
      </div>

      {/* Opções */}
      <div className="space-y-3 mb-8">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(option)}
            className={`w-full p-4 text-left border-2 rounded-lg transition-all duration-300 ${
              selectedAnswer === option
                ? 'bg-rose-500/20 border-rose-400 text-white'
                : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/30'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Botão próximo */}
      <div className="text-center">
        <button
          onClick={handleNextQuestion}
          disabled={!selectedAnswer}
          className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center mx-auto"
        >
          {currentQuestion === totalQuestions - 1 ? 'Finalizar' : 'Próxima'}
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );

  const renderAnalyzing = () => (
    <div className="max-w-md mx-auto text-center">
      <div className="mb-8">
        <Loader2 className="w-16 h-16 text-rose-400 mx-auto animate-spin mb-6" />
        <h2 className="text-2xl font-bold text-white mb-4">
          Estamos analisando seu perfil
        </h2>
        <p className="text-gray-300">
          Te entregaremos um método pronto em alguns instantes.
        </p>
      </div>
    </div>
  );

  const renderResults = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">
          Olha, avaliamos o seu caso
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Elaboramos algumas técnicas para você praticar diariamente, que podem te ajudar.
        </p>
        
        {/* Botão no topo */}
        <div className="mb-8">
          <button
            onClick={handleAccessMethod}
            className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
          >
            Acessar o método secreto
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="bg-white/10 border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-rose-400 mb-3">
              {exercise.title}
            </h3>
            <p className="text-gray-300 mb-3">
              {exercise.description}
            </p>
            <p className="text-gray-400 text-sm mb-2">
              {exercise.repetitions}
            </p>
            <p className="text-gray-400 text-sm">
              {exercise.benefit}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleAccessMethod}
          className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
        >
          Acessar o método secreto
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {currentStep === 'form' && renderForm()}
        {currentStep === 'questions' && renderQuestions()}
        {currentStep === 'analyzing' && renderAnalyzing()}
        {currentStep === 'results' && renderResults()}
      </div>
    </section>
  );
};

export default Quiz;
