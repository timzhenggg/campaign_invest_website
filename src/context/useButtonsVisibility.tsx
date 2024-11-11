import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ButtonVisibilityContextType {
  showButtonDesktop: boolean;
  setShowButtonDesktop: React.Dispatch<React.SetStateAction<boolean>>;
  showButtonMobile: boolean;
  setShowButtonMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonVisibilityContext = createContext<ButtonVisibilityContextType | undefined>(undefined);

interface ButtonVisibilityProviderProps {
  children: ReactNode;
}

export const ButtonVisibilityProvider: React.FC<ButtonVisibilityProviderProps> = ({ children }) => {
  const [showButtonDesktop, setShowButtonDesktop] = useState<boolean>(false);
  const [showButtonMobile, setShowButtonMobile] = useState<boolean>(false);

  return (
    <ButtonVisibilityContext.Provider value={{ showButtonDesktop, setShowButtonDesktop, showButtonMobile, setShowButtonMobile }}>
      {children}
    </ButtonVisibilityContext.Provider>
  );
};

export const useButtonsVisibility = (): ButtonVisibilityContextType => {
  const context = useContext(ButtonVisibilityContext);

  if (!context) {
    throw new Error('useButtonVisibility must be used within a ButtonVisibilityProvider');
  }

  return context;
};
