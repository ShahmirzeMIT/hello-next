import { createContext, ReactNode, useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface AuthContextProps {
  children: ReactNode;
}

export const AuthContext = createContext<{
  userToken: User | null;
  // login: (userData: User | null) => void;
  logout: () => void;
  setUserToken: (userData: User | null) => void
}>({
  userToken: null,
  // login: () => {},
  logout: () => {},
  setUserToken: () => {}
});

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [userToken, setUserToken] = useState<User | null>(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("userToken");
  //   if (token) {
  //     setUserToken(JSON.parse(token));
  //   }
  // },[userToken])

  const logout = () => {
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, logout ,setUserToken}}>
      {children}
    </AuthContext.Provider>
  );
};
