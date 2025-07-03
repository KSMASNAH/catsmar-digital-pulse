
import { Card } from "@/components/ui/card";
import { Users, Circle, FileText, CirclePercent } from "lucide-react";
import { useState } from "react";
import { MetricDetailModal } from "./MetricDetailModal";

export const MetricsCards = () => {
  const [selectedMetric, setSelectedMetric] = useState<"alcance" | "interaccion" | "prospectos" | "conversion" | null>(null);

  const metrics = [
    {
      title: "Alcance Total",
      subtitle: "(impresiones)",
      value: "5,890",
      icon: Users,
      color: "from-blue-600 to-blue-700",
      type: "alcance" as const
    },
    {
      title: "Tasa de",
      subtitle: "Interacción (%)",
      value: "46.08%",
      icon: Circle,
      color: "from-blue-500 to-blue-600",
      type: "interaccion" as const
    },
    {
      title: "Nuevos",
      subtitle: "Prospectos Captados",
      value: "65",
      icon: FileText,
      color: "from-cyan-500 to-cyan-600",
      type: "prospectos" as const
    },
    {
      title: "Tasa de",
      subtitle: "Conversión (%)",
      value: "7.8%",
      icon: CirclePercent,
      color: "from-teal-500 to-teal-600",
      type: "conversion" as const
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card 
            key={index} 
            className={`bg-gradient-to-br ${metric.color} text-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}
            onClick={() => setSelectedMetric(metric.type)}
          >
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

      {selectedMetric && (
        <MetricDetailModal
          isOpen={!!selectedMetric}
          onClose={() => setSelectedMetric(null)}
          metricType={selectedMetric}
        />
      )}
    </>
  );
};
