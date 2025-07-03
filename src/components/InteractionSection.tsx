
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export const InteractionSection = () => {
  const pieData = [
    { name: "Reacciones", value: 242, color: "#0ea5e9" },
    { name: "Comentarios", value: 18, color: "#1e40af" }
  ];

  return (
    <Card className="p-6 shadow-lg">
      <div className="bg-slate-800 text-white p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold">Interacción</h3>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-3xl font-bold text-slate-700">18</p>
          <p className="text-sm text-slate-600">Comentarios</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-slate-700">02</p>
          <p className="text-sm text-slate-600">Compartidos</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-slate-700">242</p>
          <p className="text-sm text-slate-600">Reacciones Positivas</p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-slate-700 mb-3">Distribución de Interacción</h4>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1e293b', 
                border: 'none', 
                borderRadius: '8px',
                color: 'white'
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
