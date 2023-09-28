import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react'

type AuthContextValue = {
  isAdmin: boolean;
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextValue>({
  isAdmin: false,
  setIsAdmin: () => null,
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAdmin, setIsAdmin] = useState(false);

  return <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within a CountProvider')
  }

  return context
}
