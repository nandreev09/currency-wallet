import { useLatestRates } from "@/services/exchange";

const Dashboard = () => {
  const { data, isLoading, isError } = useLatestRates("USD");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading exchange rates.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Dashboard
      </h1>

      <p>
        Base currency: <strong>{data?.base}</strong>
      </p>

      <div className="mt-6">
        {Object.entries(data?.rates ?? {})
          .slice(0, 10)
          .map(([currency, rate]) => (
            <div
              key={currency}
              className="flex justify-between border-b py-2"
            >
              <span>{currency}</span>
              <span>{rate}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;