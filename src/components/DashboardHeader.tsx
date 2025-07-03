
import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export const DashboardHeader = () => {
  // Obtener fecha actual en zona horaria de Perú
  const getCurrentDatePeru = () => {
    const now = new Date();
    const peruTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Lima"}));
    return peruTime.toLocaleDateString("es-PE", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <Card className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-8 shadow-xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Monitor de Eficacia Digital - CATSMAR SRL
          </h1>
          <p className="text-slate-200 text-lg">Área de Marketing</p>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <div className="flex items-center space-x-2 text-slate-200">
            <Calendar className="w-5 h-5" />
            <span className="text-lg font-medium">Período: Mayo - Julio 2025</span>
          </div>
          <p className="text-sm text-slate-300">Última actualización: {getCurrentDatePeru()}</p>
        </div>
      </div>
    </Card>
  );
};
