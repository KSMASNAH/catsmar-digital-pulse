
import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricsCards } from "@/components/MetricsCards";
import { MonthlyReachChart } from "@/components/MonthlyReachChart";
import { InteractionSection } from "@/components/InteractionSection";
import { ConversionFunnel } from "@/components/ConversionFunnel";
import { LoyaltySection } from "@/components/LoyaltySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <DashboardHeader />
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
