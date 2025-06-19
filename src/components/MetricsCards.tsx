
import { Card } from "@/components/ui/card";
import { Users, Circle, FileText, CirclePercent } from "lucide-react";

export const MetricsCards = () => {
  const metrics = [
    {
      title: "Alcance Total",
      subtitle: "(impresiones)",
      value: "12,300",
      icon: Users,
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Tasa de",
      subtitle: "Interacción (%)",
      value: "4.3%",
      icon: Circle,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Nuevos",
      subtitle: "Prospectos Captados",
      value: "65",
      icon: FileText,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Tasa de",
      subtitle: "Conversión (%)",
      value: "7.8%",
      icon: CirclePercent,
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className={`bg-gradient-to-br ${metric.color} text-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
          <div className="flex items-center justify-between mb-4">
            <metric.icon className="w-8 h-8 text-white/80" />
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-white/90">{metric.title}</h3>
            <p className="text-xs text-white/70">{metric.subtitle}</p>
            <p className="text-2xl font-bold">{metric.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
