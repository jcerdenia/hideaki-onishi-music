import { createContext, useState } from "react";

interface AppState {
  footerHeight: number;
  setFooterHeight: (h: number) => void;
}

export const AppContext = createContext({} as AppState);

const AppProvider = ({ children }: any): JSX.Element => {
  const [footerHeight, setFooterHeight] = useState<number>(0);

  return (
    <AppContext.Provider value={{ footerHeight, setFooterHeight }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
