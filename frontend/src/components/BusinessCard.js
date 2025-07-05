import { useBusiness } from "../context/BusinessContext";

export default function BusinessCard() {
  const { businessData, setBusinessData, loading } = useBusiness();

  const regenerateHeadline = async () => {
    const res = await fetch(
      `https://businessdashboard-ph2g.onrender.com/regenerate-headline?name=${businessData.name}&location=${businessData.location}`
    );
    const data = await res.json();
    setBusinessData((prev) => ({ ...prev, headline: data.headline }));
  };

  if (loading) return <div className="text-center">🔄 Loading...</div>;
  if (!businessData) return null;

  return (
    <div className="bg-white shadow rounded p-4">
      <p className="text-lg font-semibold">
        ⭐ {businessData.rating} ({businessData.reviews} reviews)
      </p>
      <p className="mt-2 italic">"{businessData.headline}"</p>
      <button
        className="mt-4 bg-green-600 text-white py-1 px-3 rounded"
        onClick={regenerateHeadline}
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
}
