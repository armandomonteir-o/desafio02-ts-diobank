import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";

interface IAppContext {
  email: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const storage = getAllLocalStorage();

  useEffect(() => {
    if (storage) {
      const { login, email } = JSON.parse(storage);
      setIsLoggedIn(login);
      if (login) {
        setEmail(email);
      }
    }
  }, [storage]);

  return (
    <AppContext.Provider value={{ email, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
