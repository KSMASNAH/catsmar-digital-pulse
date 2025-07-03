
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export const MonthlyReachChart = () => {
  const data = [
    {
      month: "Mayo",
      Facebook: 220,
      Instagram: 180,
      WhatsApp: 280
    },
    {
      month: "Junio",
      Facebook: 200,
      Instagram: 250,
      WhatsApp: 320
    },
    {
      month: "Julio",
      Facebook: 250,
      Instagram: 200,
      WhatsApp: 340
    }
  ];

  return (
    <Card className="p-6 shadow-lg">
      <div className="bg-slate-800 text-white p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold">Alcance Mensual por Canal</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" tick={{ fill: '#64748b' }} />
          <YAxis tick={{ fill: '#64748b' }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1e293b', 
              border: 'none', 
              borderRadius: '8px',
              color: 'white'
            }} 
          />
          <Legend />
          <Bar dataKey="Facebook" fill="#1e40af" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Instagram" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
          <Bar dataKey="WhatsApp" fill="#06b6d4" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
