import React, { createContext, useContext, ReactNode } from 'react';

interface NavigationContextType {
  goToOffers: () => void;
  goToEssencial: () => void;
  goToCompleto: () => void;
  goToPremium: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const goToOffers = () => {
    // Função para tentar fazer o scroll
    const tryScroll = () => {
      const pricingSection = document.getElementById('pricing');
      
      if (pricingSection) {
        pricingSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
        return true;
      }
      return false;
    };
    
    // Tentar imediatamente
    if (!tryScroll()) {
      // Se não encontrou, tentar novamente após um pequeno delay
      setTimeout(() => {
        if (!tryScroll()) {
          // Fallback: scroll manual
          window.scrollTo({
            top: window.innerHeight * 4, // Aproximadamente onde deve estar a seção de preços
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const goToEssencial = () => {
    window.open('https://pay.cakto.com.br/xy3axpc_573634', '_blank', 'noopener,noreferrer');
  };

  const goToCompleto = () => {
    window.open('https://pay.cakto.com.br/5ocv77c_573642', '_blank', 'noopener,noreferrer');
  };

  const goToPremium = () => {
    window.open('https://pay.cakto.com.br/65795sq_573646', '_blank', 'noopener,noreferrer');
  };

  const value: NavigationContextType = {
    goToOffers,
    goToEssencial,
    goToCompleto,
    goToPremium,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
