
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";

export const LoyaltySection = () => {
  const loyaltyData = [
    { month: "Mayo", nuevos: 30, recurrentes: 45 },
    { month: "Junio", nuevos: 35, recurrentes: 52 },
    { month: "Julio", nuevos: 28, recurrentes: 58 }
  ];

  const retentionData = [
    { name: "Retenidos", value: 75, color: "#0ea5e9" },
    { name: "No retenidos", value: 25, color: "#e2e8f0" }
  ];

  return (
    <Card className="p-6 shadow-lg">
      <div className="bg-slate-800 text-white p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold">Fidelización</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-slate-700 mb-3">Clientes Recurrentes vs. Nuevos</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={loyaltyData}>
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
              <Bar dataKey="nuevos" fill="#06b6d4" radius={[4, 4, 0, 0]} />
              <Bar dataKey="recurrentes" fill="#1e40af" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-slate-700 mb-2">CLV Estimado</h4>
            <p className="text-3xl font-bold text-green-600">$1,200</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-3 text-center">
              Tasa de Retención Mensual
            </h4>
            <div className="relative">
              <ResponsiveContainer width="100%" height={120}>
                <PieChart>
                  <Pie
                    data={retentionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={50}
                    startAngle={90}
                    endAngle={450}
                    dataKey="value"
                  >
                    {retentionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-700">75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
