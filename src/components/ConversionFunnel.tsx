
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

export const ConversionFunnel = () => {
  const funnelData = [
    { stage: "Impresiones", value: 12300, color: "#06b6d4" },
    { stage: "Interacciones", value: 1455, color: "#0ea5e9" },
    { stage: "Clics", value: 528, color: "#3b82f6" },
    { stage: "Conversiones", value: 65, color: "#1e40af" }
  ];

  const monthlyData = [
    { month: "Mayo", value: 85 },
    { month: "Junio", value: 92 },
    { month: "Julio", value: 78 }
  ];

  return (
    <Card className="p-6 shadow-lg">
      <div className="bg-slate-800 text-white p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold">Captación y Conversión</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-slate-700 mb-3">Embudo de Conversión</h4>
          <div className="space-y-2">
            {funnelData.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-20 text-xs text-slate-600">{item.stage}</div>
                <div className="flex-1 bg-slate-200 rounded-full h-6 relative overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-700"
                    style={{ 
                      width: `${(item.value / funnelData[0].value) * 100}%`,
                      backgroundColor: item.color 
                    }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                    {item.value.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-700 mb-3">Conversiones Mensuales</h4>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: 'white'
                }} 
              />
              <Bar dataKey="value" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};
