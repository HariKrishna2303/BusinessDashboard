import { useState } from "react";
import { useBusiness } from "../context/BusinessContext";

export default function BusinessForm() {
  const { setBusinessData, setLoading } = useBusiness();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !location) return setError("All fields are required");
    setError("");
    setLoading(true);
    const res = await fetch("http://localhost:4000/business-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, location }),
    });
    const data = await res.json();
    setBusinessData(data);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-5 mb-4">
      <h2 className="text-xl font-bold mb-2">Business Info</h2>
      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Business Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}
