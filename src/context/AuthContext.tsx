import { createContext, useContext } from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import type { UserResource } from '@clerk/types';

type AuthContextType = {
  isSignedIn: boolean;
  user: UserResource | null | undefined;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn = false, user } = useUser();
  const { signOut } = useClerk();

  return (
    <AuthContext.Provider value={{ isSignedIn, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};