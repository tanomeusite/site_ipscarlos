import { Toaster } from "@/components/ui/toaster"
import { Toaster as SonnerToaster } from "sonner"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import NossaHistoria from '@/pages/NossaHistoria';
import QuemSomos from '@/pages/QuemSomos';
import EquipePastoral from '@/pages/lideranca/EquipePastoral';
import Conselho from '@/pages/lideranca/Conselho';
import JuntaDiaconal from '@/pages/lideranca/JuntaDiaconal';
import Ministerios from '@/pages/lideranca/Ministerios';
import OndeEstamos from '@/pages/OndeEstamos';
import Contato from '@/pages/Contato';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nossa-historia" element={<NossaHistoria />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/lideranca/equipe-pastoral" element={<EquipePastoral />} />
        <Route path="/lideranca/conselho" element={<Conselho />} />
        <Route path="/lideranca/junta-diaconal" element={<JuntaDiaconal />} />
        <Route path="/lideranca/ministerios" element={<Ministerios />} />
        <Route path="/onde-estamos" element={<OndeEstamos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
        <SonnerToaster position="top-center" />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App