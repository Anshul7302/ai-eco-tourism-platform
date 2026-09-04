interface DashboardCardProps {
  title: string;
  value: number | string;
  color: string;
}

export default function DashboardCard({
  title,
  value,
  color,
}: DashboardCardProps) {
  return (
    <div
      className={`rounded-xl shadow-lg text-white p-6 ${color}`}
    >
      <h3 className="text-lg">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>
    </div>
  );
}