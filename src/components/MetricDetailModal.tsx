
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

interface MetricDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  metricType: "alcance" | "interaccion" | "prospectos" | "conversion";
}

export const MetricDetailModal = ({ isOpen, onClose, metricType }: MetricDetailModalProps) => {
  const getMetricData = () => {
    switch (metricType) {
      case "alcance":
        return {
          title: "Análisis Detallado del Alcance Total",
          value: "5,890",
          description: "Impresiones totales en el período mayo-julio 2025",
          chartData: [
            { mes: "Mayo", facebook: 15, instagram: 10, whatsapp: 12 },
            { mes: "Junio", facebook: 2038, instagram: 6300, whatsapp: 20 },
            { mes: "Julio", facebook: 5890, instagram: 8300, whatsapp: 35 }
          ],
          insights: [
            "Crecimiento del 73.8% comparado con el período anterior",
            "Instagram muestra el mayor crecimiento (189.0%)",
            "WhatsApp Business presenta oportunidades de expansión"
          ]
        };
      case "interaccion":
        return {
          title: "Tasa de Interacción Detallada",
          value: "46.08%",
          description: "Engagement promedio en todas las plataformas",
          chartData: [
            { mes: "Mayo", tasa: 10.08 },
            { mes: "Junio", tasa: 39.06 },
            { mes: "Julio", tasa: 46.08 }
          ],
          insights: [
            "Mejora constante en la tasa de engagement",
            "Julio presenta el mejor rendimiento del período",
            "Supera el promedio de la industria (3.2%)"
          ]
        };
      case "prospectos":
        return {
          title: "Captación de Nuevos Prospectos",
          value: "65",
          description: "Leads calificados generados en el período",
          chartData: [
            { mes: "Mayo", leads: 18, calificados: 15 },
            { mes: "Junio", leads: 25, calificados: 22 },
            { mes: "Julio", leads: 28, calificados: 28 }
          ],
          insights: [
            "Incremento del 55.6% en la captación de leads",
            "Calidad de leads mejoró significativamente",
            "Julio alcanzó 100% de leads calificados"
          ]
        };
      case "conversion":
        return {
          title: "Análisis de Tasa de Conversión",
          value: "7.8%",
          description: "Conversión de prospectos a clientes",
          chartData: [
            { mes: "Mayo", conversion: 6.5, promedio: 5.2 },
            { mes: "Junio", conversion: 7.8, promedio: 5.8 },
            { mes: "Julio", conversion: 9.1, promedio: 6.1 }
          ],
          insights: [
            "Crecimiento del 40% en la tasa de conversión",
            "Supera consistentemente el promedio del mercado",
            "Estrategias de nurturing muestran excelentes resultados"
          ]
        };
      default:
        return null;
    }
  };

  const data = getMetricData();
  if (!data) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-800">{data.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">{data.value}</div>
              <p className="text-slate-600">{data.description}</p>
            </div>
          </Card>

          <div className="h-80">
            <h3 className="text-lg font-semibold mb-4">Evolución Temporal</h3>
            <ResponsiveContainer width="100%" height="100%">
              {metricType === "alcance" ? (
                <BarChart data={data.chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="facebook" fill="#1877F2" name="Facebook" />
                  <Bar dataKey="instagram" fill="#E4405F" name="Instagram" />
                  <Bar dataKey="whatsapp" fill="#25D366" name="WhatsApp" />
                </BarChart>
              ) : metricType === "prospectos" ? (
                <BarChart data={data.chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="leads" fill="#0EA5E9" name="Total Leads" />
                  <Bar dataKey="calificados" fill="#059669" name="Leads Calificados" />
                </BarChart>
              ) : (
                <LineChart data={data.chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey={metricType === "interaccion" ? "tasa" : "conversion"} stroke="#0EA5E9" strokeWidth={3} />
                  {metricType === "conversion" && (
                    <Line type="monotone" dataKey="promedio" stroke="#94A3B8" strokeWidth={2} strokeDasharray="5 5" name="Promedio Mercado" />
                  )}
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Insights Clave</h3>
            <ul className="space-y-2">
              {data.insights.map((insight, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{insight}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};
