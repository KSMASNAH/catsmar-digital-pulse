
import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricsCards } from "@/components/MetricsCards";
import { MonthlyReachChart } from "@/components/MonthlyReachChart";
import { InteractionSection } from "@/components/InteractionSection";
import { ConversionFunnel } from "@/components/ConversionFunnel";
import { LoyaltySection } from "@/components/LoyaltySection";
import { LoginForm } from "@/components/LoginForm";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    // Simulación de validación básica - en producción esto debería ser más seguro
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <DashboardHeader />
          </div>
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            Cerrar Sesión
          </button>
        </div>
        <MetricsCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MonthlyReachChart />
          <InteractionSection />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ConversionFunnel />
          <LoyaltySection />
        </div>
      </div>
    </div>
  );
};

export default Index;
