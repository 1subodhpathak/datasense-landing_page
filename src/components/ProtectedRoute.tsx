import { ReactNode } from 'react';
import { useAuth } from '@clerk/clerk-react';
// import { Navigation } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    alert('You must be signed in to access this page.');
    // return <Navigation to={'/'} className="text-blue-500" />;
  }

  return <>{children}</>;
};